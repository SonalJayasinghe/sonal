import {
  Box,
  Flex,
  HStack,
  Heading,
  Square,
  Stack,
  StackItem,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaBirthdayCake } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";


function Card() {
  return (
    <Flex gap={4} flexWrap={"wrap"}>
      <Box
        borderColor={"black"}
        borderWidth={1}
        borderRadius={10}
        padding={4}
        width={350}
      >
        <HStack spacing={21} overflowWrap={"break-word"}>
          <StackItem>
            <VStack>
              <StackItem>
                <FaBirthdayCake size={70} />
              </StackItem>
              <StackItem>
                <Text> 2023</Text>
              </StackItem>
              <StackItem>
               <Box bg={"blackAlpha.100"} fontSize={"small"} color={"blackAlpha.600"} padding={1} borderRadius={4}>
                  Done
               </Box>
              </StackItem>
            </VStack>
          </StackItem>
          <Box>
            <Heading as={"h2"} fontSize={"2xl"}>
              {" "}
              Born{" "}
            </Heading>
            <Text> fejfiejfjfiejifej</Text>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Card;
