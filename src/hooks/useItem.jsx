import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const useItem = (collectionName, itemId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, collectionName, itemId);
    getDoc(productItem).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [collectionName, itemId]);
  return { product };
};

export default useItem;
