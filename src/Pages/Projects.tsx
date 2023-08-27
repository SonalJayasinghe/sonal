import { Box, Flex, Heading, VStack , Text} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";

function Projects() {
  const pgNo = 2;

  useEffect(() => {
    document.title = "My Projects";
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

          <Box w="100%" marginTop={"95px"}>
            <Box textAlign="center" py={10} px={6}>
              <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bg={"black"}
                backgroundClip="text"
              >
                Ooops...
              </Heading>
              <Text fontSize="18px" mt={3} mb={2}>
                We will build this soon
              </Text>
              <Text color={"gray.500"} mb={6}>
                The page you&apos;re looking for does not seem to exist. Please
                go back to the home.
              </Text>
            </Box>
          </Box>

          <Box w="100%" marginTop={"auto"}>
            <Footer />
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default Projects;
