import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Life() {
  const pgNo = 1;

  useEffect(() => {
    document.title = "My Life";
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Flex minH={"100vh"}>
        <VStack width="100%">
          <Box w="100%" position={"fixed"} zIndex={2}>
            <NavBar pgNo={pgNo} />
          </Box>

          <Box w="90%" marginTop={"95px"} padding={3}>
           <Heading textAlign={"center"} as={"h2"} fontSize={"2xl"}> This is my Life Story... </Heading>
          </Box>
          <Box w="90%" marginTop={"5px"} padding={3}>
            <Card/>
          </Box>

          <Box w="100%" marginTop={"auto"}>
            <Footer />
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default Life;
