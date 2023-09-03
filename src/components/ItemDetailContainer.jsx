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

// eslint-disable-next-line react/prop-types
export const ItemDetailContainer = ({ productData }) => {
  // eslint-disable-next-line react/prop-types
  return (
    <Card
      w={"600px"}
      minH={"300px"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={productData.thumbnail}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Button mb={4}>{productData.category}</Button>
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
        </CardFooter>
      </Stack>
    </Card>
  );
};
