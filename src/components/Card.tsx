import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  StackItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

function Card() {
  const iconMap: { [key: string]: IconType } = {
    birthday: LiaBirthdayCakeSolid,
  };

  return (
    <Center>
      <Flex gap={4} flexWrap={"wrap"}>
        <Box
          borderColor={"black"}
          borderWidth={1}
          borderRadius={10}
          padding={4}
          width={350}
        >
          <HStack spacing={5} overflowWrap={"break-word"}>
            <StackItem>
              <VStack>
                <StackItem>
                  <Icon
                    as={iconMap["birthday"]}
                    boxSize={55}
                    marginBottom={-2}
                  />
                </StackItem>
                <StackItem>
                  <Text> 2001 </Text>
                </StackItem>
                <StackItem>
                  <Box
                    bg={"blackAlpha.100"}
                    fontSize={"small"}
                    color={"blackAlpha.600"}
                    padding={1}
                    borderRadius={4}
                  >
                    Failed
                  </Box>
                </StackItem>
              </VStack>
            </StackItem>
            <Box>
              <Heading as={"h2"} fontSize={"2xl"}>
                {" "}
                Born{" "}
              </Heading>
              <Text>
                {" "}
                Born in 25<sup>th</sup> of February 2001 in Colombo, Sri Lanka.{" "}
              </Text>
            </Box>
          </HStack>
        </Box>

        
      </Flex>
    </Center>
  );
}

export default Card;
