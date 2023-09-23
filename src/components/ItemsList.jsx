import { useNavigate } from "react-router-dom";
import {
  Grid,
  GridItem,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import useCollection from "../hooks/useCollection";

const ItemsList = () => {
  const navigate = useNavigate();
  const { products } = useCollection("products", "allProducts");

  return (
    <Grid w={"100%"} templateColumns="repeat(3, 1fr)" gap={4}>
      {products.map((product) => {
        return (
          <GridItem key={product.id}>
            <Card border={"3px solid #e53e3e"}>
              <CardBody minH={"500px"} p={4}>
                <Image
                  w={"100%"}
                  h={"350px"}
                  m={"0 auto"}
                  objectFit={"cover"}
                  src={product.image}
                  alt={product.altImage}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.title}</Heading>
                  <Text>{product.description}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    onClick={() => navigate(`/item/${product.id}`)}
                    variant="solid"
                    backgroundColor={"blue.600"}
                    _hover={{ backgroundColor: "blue.800" }}
                    color={"whiteAlpha.900"}
                  >
                    Details
                  </Button>
                  <Button
                    variant="ghost"
                    backgroundColor={"blue.600"}
                    _hover={{ backgroundColor: "blue.800" }}
                    color={"whiteAlpha.900"}
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ItemsList;
