import { Button, Heading, VStack, Image, HStack } from "@chakra-ui/react";
import sock from "../assets/sock.png";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/imageBg.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <VStack
      gap={4}
      alignItems={"center"}
      justifyContent={"center"}
      w={"100%"}
      minH={"90vh"}
    >
      <HStack
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundImage={bgImage}
        justifyContent={"center"}
        w={"100%"}
        maxW={"400px"}
      >
        <Image maxW={"300px"} src={sock} />
      </HStack>
      <Heading fontSize={"3rem"} textAlign={"center"} maxW={"60%"}>
        Sometimes things get lost, just like any sock
      </Heading>
      <Button
        _hover={{ backgroundColor: "blue.800" }}
        color={"whiteAlpha.900"}
        backgroundColor={"blue.600"}
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </VStack>
  );
};

export default NotFound;
