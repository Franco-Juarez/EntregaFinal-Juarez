import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import ItemsList from "./itemsList";
import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => {
  return (
    <VStack
      py={8}
      gap={10}
      backgroundColor={"whiteAlpha.500"}
      w={"100%"}
      minH={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack>
        <Heading
          pt={"2rem"}
          width={{ base: "100%", lg: "50%" }}
          fontSize={"6rem"}
          textAlign={"center"}
        >
          {greeting}
        </Heading>
        <Text fontSize={"1.5rem"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Box pt={4} display={"flex"} gap={8}>
          <Button
            color={"whiteAlpha.900"}
            backgroundColor={"red.500"}
            _hover={{ backgroundColor: "red.700" }}
          >
            2023 Collection
          </Button>
          <Button
            _hover={{ backgroundColor: "blue.800" }}
            color={"whiteAlpha.900"}
            backgroundColor={"blue.600"}
          >
            Winter Sale
          </Button>
        </Box>
      </VStack>
      <VStack w={"1200px"}>
        <ItemsList />
      </VStack>
    </VStack>
  );
};

export default ItemListContainer;

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
};
