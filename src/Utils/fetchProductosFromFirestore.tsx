// utils.js

import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../Services/firebaseConfig";

const fetchProductosFromFirestore = async (
  setProductos: (arg0: { id: string }[]) => void
) => {
  try {
    const q = query(collection(db, "Productos"));
    const querySnapshot = await getDocs(q);

    const productosData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProductos(productosData);
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
  }
};

export { fetchProductosFromFirestore };
