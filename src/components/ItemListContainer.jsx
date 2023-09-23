import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import ItemsList from "./ItemsList";

const ItemListContainer = ({ greeting }) => {
  const navigate = useNavigate();

  return (
    <VStack
      py={8}
      px={4}
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
          fontSize={{ base: "2rem", lg: "6rem" }}
          textAlign={"center"}
        >
          {greeting}
        </Heading>
        <Text textAlign={"center"} fontSize={{ base: "1rem", lg: "1.5rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
        <Box
          pt={4}
          display={"flex"}
          gap={8}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Button
            onClick={() => navigate(`/category/collection`)}
            color={"whiteAlpha.900"}
            backgroundColor={"red.500"}
            _hover={{ backgroundColor: "red.700" }}
          >
            2023 Collection
          </Button>
          <Button
            onClick={() => navigate(`/category/incomes`)}
            _hover={{ backgroundColor: "blue.800" }}
            color={"whiteAlpha.900"}
            backgroundColor={"blue.600"}
          >
            New Incomes!
          </Button>
        </Box>
      </VStack>
      <VStack w={{ base: "100%", lg: "1200px" }}>
        <ItemsList />
      </VStack>
    </VStack>
  );
};

export default ItemListContainer;

ItemListContainer.propTypes = {
  greeting: PropTypes.string,
};
