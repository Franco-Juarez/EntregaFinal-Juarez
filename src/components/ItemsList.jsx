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
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemsList = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Grid p={4} templateColumns="repeat(3, 1fr)" gap={4}>
      {products.map((product) => {
        return (
          <GridItem key={product.id}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  w={"350px"}
                  h={"350px"}
                  m={"0 auto"}
                  objectFit={"cover"}
                  src={product.thumbnail}
                  alt="Green double couch with wooden legs"
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
                    colorScheme="blue"
                  >
                    Details
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
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
