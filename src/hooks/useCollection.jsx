import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const useCollection = (collectionName, categoryId) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, collectionName);
    categoryId === "allProducts"
      ? getDocs(productCollection)
          .then((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
          })
          .catch((err) => {
            console.log(err);
          })
      : (() => {
          const q = query(
            productCollection,
            where("category", "==", categoryId)
          );
          getDocs(q).then((snapshot) => {
            setProducts(
              snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
          });
        })();
  }, [collectionName, categoryId]);
  return { products };
};

export default useCollection;
