import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../Services/firebaseConfig";

const fetchDataFromFirestore = async (
  setHeader: (arg0: { id: string }[]) => void
) => {
  try {
    const q = query(collection(db, "Imagenes"));
    const querySnapshot = await getDocs(q);

    const productosData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setHeader(productosData);
  } catch (error) {
    console.error("Error al obtener datos de Firestore:", error);
  }
};

export { fetchDataFromFirestore };
