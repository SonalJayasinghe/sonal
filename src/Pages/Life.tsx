import { Box, Flex, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Life() {
  const pgNo = 1;

  useEffect(() => {
    document.title = "Welcome to Marinara Hotel";
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

          <Box w="90%" marginTop={"95px"}>
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
