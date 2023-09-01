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
import { PiStudentFill } from "react-icons/pi";
import { GiHastyGrave } from "react-icons/gi";
import {MdOutlineFiberNew, MdComputer} from "react-icons/md"

import { LIFE_ITEM } from "../data/LifeItem";

function Card() {
  const iconMap: { [key: string]: IconType } = {
    birthday: LiaBirthdayCakeSolid,
    student: PiStudentFill,
    business: MdComputer,
    grave: GiHastyGrave,
    new: MdOutlineFiberNew,
  };

  return (
    <Center>
      <Flex gap={4} flexWrap={"wrap"}>
        {LIFE_ITEM.map((item, index) => ( 
        <Box
          borderColor={"black"}
          borderWidth={1}
          borderRadius={10}
          padding={4}
          width={{base:"350px",md:"45%", lg:"32%"}}
          key={index}
          _hover={{
            transform: "scale(1.008)",
            transition: "transform .2s",
            transitionTimingFunction: "ease-in-out",
            shadow: "md",
          }}
        >
          <HStack spacing={5} overflowWrap={"break-word"}>
            <StackItem>
              <VStack>
                <StackItem>
                  <Icon
                    as={iconMap[item.icon]}
                    boxSize={55}
                    marginBottom={-2}
                  />
                </StackItem>
                <StackItem>
                  <Text> {item.year} </Text>
                </StackItem>
                <StackItem>
                  <Box
                    bg={"blackAlpha.100"}
                    fontSize={"small"}
                    color={"blackAlpha.600"}
                    padding={1}
                    borderRadius={4}
                  >
                    {item.status}
                  </Box>
                </StackItem>
              </VStack>
            </StackItem>
            <Box>
              <Heading as={"h2"} fontSize={"2xl"}>
                {item.title}
              </Heading>
              <Text>
                {" "}
               {item.discription}
              </Text>
            </Box>
          </HStack>
        </Box>
))}
        
      </Flex>
    </Center>
  );
}

export default Card;
