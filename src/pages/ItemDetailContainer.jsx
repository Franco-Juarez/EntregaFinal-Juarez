import { ItemDetails } from "../components/ItemDetails";
import { Flex } from "@chakra-ui/react";
import useItem from "../hooks/useItem";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { product } = useItem("products", itemId);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      minH={"80vh"}
      p={8}
    >
      <ItemDetails productData={product} />
    </Flex>
  );
};
