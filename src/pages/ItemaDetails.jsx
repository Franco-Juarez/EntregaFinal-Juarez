import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { Flex } from "@chakra-ui/react";

export const ItemDetails = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${itemId}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemId]);

  return (
    <Flex alignItems={"center"} justifyContent={"center"} w={"100%"} h={"80vh"}>
      <ItemDetailContainer productData={product} />
    </Flex>
  );
};
