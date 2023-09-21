import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { Flex } from "@chakra-ui/react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetails = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, "products", itemId);
    getDoc(productItem).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [itemId]);

  return (
    <Flex alignItems={"center"} justifyContent={"center"} w={"100%"} h={"80vh"}>
      <ItemDetailContainer productData={product} />
    </Flex>
  );
};
