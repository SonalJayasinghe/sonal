import { Box, Center, Flex, Heading, Stack, StackItem, Text } from "@chakra-ui/react";

import Carousel from "./Carousel";
import { PROJECT_ITEM } from "../data/ProjectItem";

function ProjectCard() {
  return (
    <Center>
      <Flex w={"100%"} gap={5} flexDirection={{base:"column", md:"row"}} align={"center"}>
        {PROJECT_ITEM.map((item, index) => (
          <Box
            borderColor={"black"}
            borderWidth={1}
            borderRadius={10}
            padding={4}
            key={index}
            w={{base:"100%", md:"50%"}}
            h={"max-content"}
          >
            <Stack>
            <StackItem>
                <Heading as={"h2"} fontSize={"2xl"} textAlign={"center"}> {item.title}</Heading>
                <Text align={"center"}> {item.discription} </Text>
            </StackItem>

            <StackItem>
            <Carousel imgURL={item.imgUrl} link={item.link} />
            
            </StackItem>
            
            </Stack>
          </Box>
          
        ))}
      </Flex>
    </Center>
  );
}

export default ProjectCard;
