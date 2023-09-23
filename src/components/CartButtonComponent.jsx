import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Flex, Text } from "@chakra-ui/react";

const CartButtonComponent = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleAddProduct = () => {
    setCartItems(cartItems + 1);
    setCount(count + 1);
  };

  const handleRemoveProduct = () => {
    cartItems > 0 && (setCartItems(cartItems - 1), setCount(count - 1));
  };

  return (
    <Flex pt={4} alignItems={"center"} gap={4}>
      <Button onClick={handleRemoveProduct}>-</Button>
      <Text>{count}</Text>
      <Button onClick={handleAddProduct}>+</Button>
    </Flex>
  );
};

export default CartButtonComponent;
