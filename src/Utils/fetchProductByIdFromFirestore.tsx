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

// Define el tipo para el producto
type ProductData = Product | undefined;

// Define el tipo para la función de fetchProductByIdFromFirestore
const fetchProductByIdFromFirestore = async (
  productId: number
): Promise<ProductData> => {
  try {
    const q = query(collection(db, "Productos"), where("id", "==", productId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Si no se encuentra ningún documento, devuelve null
      return undefined;
    } else {
      // Solo se espera un documento, así que se toma el primero
      const doc: DocumentSnapshot = querySnapshot.docs[0];
      const data: FirestoreData = doc.data() as FirestoreData;

      // Construye el objeto Product a partir de los datos del documento
      const product: Product = {
        name: data.titulo,
        image: data.imagen,
        price: data.precio,
        description: data.descripcion,
        id: data.id,
        // Agrega más campos según la estructura real de tus datos de producto
      };

      return product;
    }
  } catch (error) {
    console.error(
      "Error al obtener datos de Firestore para el producto:",
      error
    );
    throw error;
  }
};

export { fetchProductByIdFromFirestore };
