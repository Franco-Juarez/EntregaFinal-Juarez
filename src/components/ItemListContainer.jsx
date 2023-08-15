import { HStack, Heading, VStack, Icon, Link, Text } from "@chakra-ui/react"; 
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const ItemListContainer = ({greeting}) => {
  return (
    <VStack gap={10} backgroundColor={"orange.200"} w={"100%"} h={"90vh"} alignItems={"center"} justifyContent={"center"}>
        <Heading width={{base: "100%", lg:"80%"}} fontSize={"4rem"} textAlign={"center"}>{greeting}</Heading>
        <Text fontWeight={400} fontSize={"1.5rem"} as={"h5"}>
          Seguinos en nuestras redes sociales
        </Text>
        <HStack gap={10}>
          <Link href='#' isExternal>
            <Icon fontSize={"2rem"} as={BsFacebook} />
          </Link>
          <Link href='#' isExternal>
            <Icon fontSize={"2rem"} as={BsInstagram} />
          </Link>
          <Link href='#' isExternal>
            <Icon fontSize={"2rem"} as={BsTwitter} />
          </Link>
        </HStack>
    </VStack>
  )
}

export default ItemListContainer;