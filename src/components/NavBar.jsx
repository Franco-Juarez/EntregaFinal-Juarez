import { HStack, UnorderedList, ListItem, Link, Button, Heading } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import { useState } from "react";

const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <HStack borderBottom={"2px solid #000"} backgroundColor={"orange.200"} justifyContent={"space-between"} >
      <Heading p={4}>WeSock!</Heading>
      <HStack 
      gap={4}
      flexDirection={{base: isToggled ? "column-reverse" : "row", lg:"row"}}
      justifyContent={{base: isToggled ? "flex-end" : "center", lg:"center"}}
      alignItems={{base: isToggled ? "flex-end" : "center", lg:"center"}}
      p={4}
      position={{base:isToggled ? "absolute" : "relative", lg:"relative"}}
      top={0}
      right={0}
      bottom={0}
      h={{base: isToggled ? "100vh" : "auto", lg:"auto"}}
      textAlign={{base:"right", lg:"center"}}
      backgroundColor={"orange.200"}
      borderLeft={"2px solid #000"}
      boxShadow={{base: isToggled ? "0 0 0 100vmax rgba(0, 0, 0, .5)" : "none", lg:"none"}}
      >
        <UnorderedList p={isToggled ? 8 : 2}  gap={4} display={{base: isToggled ? 'flex' : 'none', lg:"flex"}} flexDirection={{base:"column", lg:"row"}} fontSize={20}>
          <ListItem listStyleType={"none"}><Link>Nuevo!</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>Gift Packs</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>Hombre</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>Mujer</Link></ListItem>
          <ListItem listStyleType={"none"}><Link>Unisex</Link></ListItem>
        </UnorderedList>
        <CartWidget />
        <Button
        display={{base:"flex", lg:"none"}}
        flexDirection={"column"}
        gap={2}
        p={0}
        backgroundColor={"transparent"}
        onClick={() => setIsToggled(!isToggled)}
        >
          <CloseIcon display ={isToggled ? 'block' : 'none'} />
          <HamburgerIcon display ={isToggled ? 'none' : 'block'}   />
        </Button>
      </HStack>
    </HStack>
  )
}

export default NavBar;