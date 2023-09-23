import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Box, Tag, TagRightIcon, TagLabel } from "@chakra-ui/react";
const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Box>
      <Tag variant="subtle" backgroundColor={"transparent"}>
        <TagLabel fontSize={20}>{cartItems}</TagLabel>
        <TagRightIcon boxSize="20px" as={AiOutlineShoppingCart} />
      </Tag>
    </Box>
  );
};

export default CartWidget;
