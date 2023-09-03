import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Image,
  Square,
  Center,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon,MinusIcon } from "@chakra-ui/icons";
import { NAV_ITEMS } from "../../data/NavItem";
import { MobileNavItem } from "./mobNavBar";
import { Link } from "react-router-dom";
import img from '../../assets/logo.png';

interface Props {
  pgNo?: number;
}

function WithSubnavigation({ pgNo }: Props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box justifyContent={"space-between"}>
      <Flex
        bg={"black"}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        shadow={"md"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          justify={"space-between"}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
          _hover={{color: "none"}}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon color={"white"} w={3} h={3} /> : <HamburgerIcon color={"white"} w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image style={{filter: "invert()"}} src={img} w={"125px"} />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Square>
              <DesktopNav pgNo={pgNo} />
            </Square>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        ></Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ pgNo }: Props) => {
  const linkColor = "white";
  const linkHoverColor = "white";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={index}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"sm"}
                outline={0}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                <Link
                  id={navItem.label}
                  to={navItem.href}
                >
                  <VStack>
                  <b color="white">{navItem.label}</b>
                  {pgNo === index ? (
                    <MinusIcon margin={-3} color={"white"}/>
                  ) : null}
                  </VStack>
                </Link>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      backdropFilter="auto"
      zIndex={1}
      backdropBlur="10px"
      backgroundColor={"whiteAlpha.600"}
      p={4}
      display={{ md: "none" }}
      position={"absolute"}
      width="100%"
      height="100vh"
    >
      {NAV_ITEMS.map((navItem, index) => (
        <Center key={index}>
          <MobileNavItem {...navItem} />
        </Center>
      ))}
    </Stack>
  );
};

export default WithSubnavigation;