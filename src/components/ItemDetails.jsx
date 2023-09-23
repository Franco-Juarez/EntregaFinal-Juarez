import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import CartButtonComponent from "./CartButtonComponent";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const ItemDetails = ({ productData }) => {
  const navigate = useNavigate();
  return (
    <Card
      display={"flex"}
      justifyContent={"flex-start"}
      w={"100%"}
      maxW={"1100px"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      border={"3px solid #e53e3e"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "40%" }}
        src={productData.image}
        alt={productData.altImage}
      />

      <Stack>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          gap={4}
        >
          <Button
            _hover={{ backgroundColor: "blue.800" }}
            onClick={() => navigate(`/category/${productData.category}`)}
            variant="solid"
            backgroundColor={"blue.600"}
            color={"whiteAlpha.900"}
          >
            {productData.category}
          </Button>
          <Heading size="md">{productData.title}</Heading>
          <Text py="2">{productData.description}</Text>
          <Text fontSize={"2rem"}>${productData.price}</Text>
        </CardBody>
        <CardFooter pt={0} display={"flex"} flexDirection={"column"}>
          <Flex>
            <StarIcon />
            <Text>{productData.rating}</Text>
          </Flex>
          <Button
            _hover={{ backgroundColor: "blue.800" }}
            width={"200px"}
            variant="solid"
            backgroundColor={"blue.600"}
            color={"whiteAlpha.900"}
          >
            Agregar al carrito
          </Button>
          <CartButtonComponent />
        </CardFooter>
      </Stack>
    </Card>
  );
};

ItemDetails.propTypes = {
  productData: PropTypes.shape({
    image: PropTypes.string,
    altImage: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};
