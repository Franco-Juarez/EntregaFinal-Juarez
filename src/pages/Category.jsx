import { useParams, useNavigate } from "react-router-dom";
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
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getFirestore();
    const productCollection = collection(db, "products");
    const q = query(productCollection, where("category", "==", categoryId));
    console.log(q);
    getDocs(q).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryId]);

  return (
    <VStack py={12} justifyContent={"center"} alignItems={"center"}>
      <Heading textTransform={"capitalize"}>{categoryId}</Heading>
      <Grid p={4} templateColumns="repeat(3, 1fr)" gap={4}>
        {products.map((product) => {
          return (
            <GridItem key={product.id}>
              <Card>
                <CardBody>
                  <Image
                    w={"400px"}
                    h={"400px"}
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
    </VStack>
  );
};
