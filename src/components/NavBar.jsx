import { useState } from "react";
import CartWidget from "./CartWidget";
import {
  HStack,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import logoNavBar from "../assets/logo-nav.svg";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <HStack
      borderBottom={"3px solid #e53e3e"}
      backgroundColor={"whiteAlpha.500"}
      justifyContent={"space-between"}
    >
      <ChakraLink
        pl={8}
        fontFamily={"heading"}
        fontSize={"2rem"}
        as={ReactRouterLink}
        to="/"
      >
        <Image w={"80px"} src={logoNavBar} />
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
        py={4}
        px={8}
        position={{ base: isToggled ? "fixed" : "relative", lg: "relative" }}
        top={0}
        right={0}
        bottom={0}
        h={{ base: isToggled ? "100vh" : "auto", lg: "auto" }}
        textAlign={{ base: "right", lg: "center" }}
        backgroundColor={"#FFFFFF"}
        borderLeft={"3px solid #e53e3e"}
        boxShadow={{
          base: isToggled ? "0 0 0 100vmax rgba(0, 0, 0, .5)" : "none",
          lg: "none",
        }}
        zIndex={999}
      >
        <UnorderedList
          p={isToggled ? 4 : 2}
          pr={0}
          gap={2}
          display={{ base: isToggled ? "flex" : "none", lg: "flex" }}
          flexDirection={{ base: "column", lg: "row" }}
          fontSize={20}
        >
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/incomes">
              New Incomes!
            </ChakraLink>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/gifts">
              Gift Packs
            </ChakraLink>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/collection">
              Collection 2023
            </ChakraLink>
          </ListItem>
          <ListItem listStyleType={"none"}>
            <ChakraLink as={ReactRouterLink} to="/category/kids">
              Kids
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
