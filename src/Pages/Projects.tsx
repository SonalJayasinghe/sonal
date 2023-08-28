import { Box, Flex, VStack} from "@chakra-ui/react";
import NavBar from "../components/NavBar/navbar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

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

          <Box w="90%" marginTop={"95px"}>
            <ProjectCard/>
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
