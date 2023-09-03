import { HStack, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <HStack
      borderBottom={"2px solid #000"}
      backgroundColor={"orange.200"}
      justifyContent={"space-between"}
    >
      <ChakraLink
        pl={4}
        fontFamily={"heading"}
        fontSize={"2rem"}
        as={ReactRouterLink}
        to="/"
      >
        WeSocks
      </ChakraLink>
      <HStack
        gap={4}
        flexDirection={{
          base: isToggled ? "column-reverse" : "row",
          lg: "row",
        }}
        justifyContent={{
          base: isToggled ? "flex-end" : "center",
          lg: "center",
        }}
        alignItems={{ base: isToggled ? "flex-end" : "center", lg: "center" }}
        p={4}
        position={{ base: isToggled ? "absolute" : "relative", lg: "relative" }}
        top={0}
        right={0}
        bottom={0}
        h={{ base: isToggled ? "100vh" : "auto", lg: "auto" }}
        textAlign={{ base: "right", lg: "center" }}
        backgroundColor={"orange.200"}
        borderLeft={"2px solid #000"}
        boxShadow={{
          base: isToggled ? "0 0 0 100vmax rgba(0, 0, 0, .5)" : "none",
          lg: "none",
        }}
      >
        <UnorderedList
          p={isToggled ? 8 : 2}
          gap={4}
          display={{ base: isToggled ? "flex" : "none", lg: "flex" }}
          flexDirection={{ base: "column", lg: "row" }}
          fontSize={20}
        >
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/groceries">
              Groceries
            </ChakraLink>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/smartphones">
              Smartphones
            </ChakraLink>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/skincare">
              Skincare
            </ChakraLink>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/laptops">
              Laptops
            </ChakraLink>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/fragrances">
              Fragrances
            </ChakraLink>
          </ListItem>
        </UnorderedList>
        <CartWidget />
        <Button
          display={{ base: "flex", lg: "none" }}
          flexDirection={"column"}
          gap={2}
          p={0}
          backgroundColor={"transparent"}
          onClick={() => setIsToggled(!isToggled)}
        >
          <CloseIcon display={isToggled ? "block" : "none"} />
          <HamburgerIcon display={isToggled ? "none" : "block"} />
        </Button>
      </HStack>
    </HStack>
  );
};

export default NavBar;
