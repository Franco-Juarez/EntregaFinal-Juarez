import { StarIcon } from "@chakra-ui/icons";
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
import CartButtonComponent from "./CartButtonComponent";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ItemDetailContainer = ({ productData }) => {
  // eslint-disable-next-line react/prop-types

  const navigate = useNavigate();
  return (
    <Card
      w={"600x"}
      minH={"150px"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      border={"3px solid #e53e3e"}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "40%" }}
        src={productData.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Button
            onClick={() => navigate(`/category/${productData.category}`)}
            variant="solid"
            colorScheme="blue"
          >
            {productData.category}
          </Button>
          <Heading size="md">{productData.title}</Heading>
          <Text py="2">{productData.description}</Text>
        </CardBody>
        <CardFooter display={"flex"} flexDirection={"column"}>
          <Flex>
            <StarIcon />
            <Text>{productData.rating}</Text>
          </Flex>
          <Button width={"200px"} variant="solid" colorScheme="blue">
            Agregar al carrito
          </Button>
          <CartButtonComponent />
        </CardFooter>
      </Stack>
    </Card>
  );
};
