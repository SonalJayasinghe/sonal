import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";

function Podcast() {
  const pgNo = 3;

  useEffect(() => {
    document.title = "My Podcasts";
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

          <Box w="100%" marginTop={"-60px"}>
            <Box textAlign="center" py={10} px={6}>
              <iframe
                width="100%"
                height={"590vh"}
                src="https://podcasters.spotify.com/pod/show/dark-room"
              ></iframe>
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

export default Podcast;
