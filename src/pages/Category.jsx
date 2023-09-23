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
import useCollection from "../hooks/useCollection";

export const Category = () => {
  const { categoryId } = useParams();
  const { products } = useCollection("products", categoryId);
  const navigate = useNavigate();

  return (
    <VStack py={12} justifyContent={"center"} alignItems={"center"}>
      <Heading textTransform={"capitalize"}>{categoryId}</Heading>
      <Grid
        p={4}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={4}
      >
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
    </VStack>
  );
};
