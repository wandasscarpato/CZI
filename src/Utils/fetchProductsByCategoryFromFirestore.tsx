import {
  query,
  collection,
  where,
  getDocs,
  DocumentSnapshot,
} from "firebase/firestore";
import { db } from "../Services/firebaseConfig";
import { Product } from "../components/Interface";

// Define el tipo para el array de datos de Firestore
type FirestoreData = {
  [key: string]: any; // Aquí, any puede ser ajustado según los tipos específicos de tus datos
};

// Define el tipo para el array de productos
type ProductsData = Product[];

// Define el tipo para la función de fetchProductsByCategoryFromFirestore
const fetchProductsByCategoryFromFirestore = async (
  categoryId: number
): Promise<ProductsData> => {
  try {
    const q = query(
      collection(db, "Productos"),
      where("categoria", "==", categoryId)
    );
    const querySnapshot = await getDocs(q);

    const productsData = querySnapshot.docs.map((doc: DocumentSnapshot) => {
      // Extiende la información del documento proporcionando un tipo más explícito
      const data: FirestoreData = doc.data() as FirestoreData;
      return {
        name: data.titulo,
        image: data.imagen,
        price: data.precio,
        description: data.descripcion,
        id: data.id,
        // Agrega más campos según la estructura real de tus datos de producto
      };
    });
    console.log(productsData);
    return productsData;
  } catch (error) {
    console.error("Error al obtener datos de Firestore para productos:", error);
    throw error;
  }
};

export { fetchProductsByCategoryFromFirestore };
