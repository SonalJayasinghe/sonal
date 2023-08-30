import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
  Center,
  Divider,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NAV_ITEMS } from "../data/NavItem";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"blackAlpha.100"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.200",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box bg={"black"} color={"white"} marginTop={8}>
      <Container as={Stack} maxW={"6xl"} py={5}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={3} justify={"center"}>
            <Box>
              <Image
                style={{ filter: "invert()" }}
                src={"./assets/logo.png"}
                width={"150px"}
              />
            </Box>
            <Text ml={5} fontSize={"sm"}>
              Illumina Vita Tua{" "}
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Facebook"} href={""}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"YouTube"} href={""}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={""}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Site Map</ListHeader>
            {NAV_ITEMS.map((item, index) => (
              <Box
                key={index}
                as="a"
                href={'#' + item.href}
                scrollBehavior={"smooth"}
              >
                {item.label}
              </Box>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Mini Games</ListHeader>
            
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Podcasts</ListHeader>
            <Box>
              <a
                href="https://podcasters.spotify.com/pod/show/dark-room"
                target="_blank"
              >
                {" "}
                Dark Room Podcast{" "}
              </a>
              <br />
            </Box>
          </Stack>
        </SimpleGrid>
        <Divider orientation="horizontal" borderColor="gray.700" />

        <Center margin={1} color={"gray.400"}>
          <a
            href="https://www.linkedin.com/in/sonaljayasinghe/"
            target="_blank"
          >
            {" "}
            Developed by Sonal Jayasinghe
          </a>
        </Center>
      </Container>
    </Box>
  );
}
