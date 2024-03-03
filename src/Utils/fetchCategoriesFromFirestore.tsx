import {
  query,
  collection,
  getDocs,
  DocumentSnapshot,
} from "firebase/firestore";
import { db } from "../Services/firebaseConfig";

// Define el tipo para la estructura de una categoría
interface Category {
  id: number;
  titulo: string;
  imagen: string;
}

// Define el tipo para el array de datos de Firestore
type FirestoreData = {
  [key: string]: any; // Aquí, any puede ser ajustado según los tipos específicos de tus datos
};

// Define el tipo para la función de setCategories
type SetCategoriesFunction = React.Dispatch<React.SetStateAction<Category[]>>;

const fetchCategoriesFromFirestore = async (
  setCategories: SetCategoriesFunction
) => {
  try {
    const q = query(collection(db, "Categorias"));
    const querySnapshot = await getDocs(q);

    const categoriesData: Category[] = querySnapshot.docs.map(
      (doc: DocumentSnapshot) => {
        // Extiende la información del documento proporcionando un tipo más explícito
        const data: FirestoreData = doc.data() as FirestoreData;
        console.log(data.id, "----");
        return {
          id: data.id,
          titulo: data.titulo,
          imagen: data.imagen, // Ajusta el nombre del campo según la estructura real de tus datos
        };
      }
    );

    setCategories(categoriesData);
  } catch (error) {
    console.error(
      "Error al obtener datos de Firestore para categorías:",
      error
    );
  }
};

export { fetchCategoriesFromFirestore };
