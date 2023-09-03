import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";

function InfoMe() {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <>
      <Flex flexWrap={"wrap"} direction={{ base: "column-reverse", md: "row" }}>
        <Center>
          <Flex
            gap={8}
            direction={{ base: "column", md: "row" }}
            align={"center"}
            flex={1}
          >
            <Box>
              {!isLoaded && (
                <Skeleton minW={350} maxW={350} h={420} borderRadius={35} />
              )}
              <Image
                minW={350}
                maxW={350}
                src="./assets/sonal.jpg"
                borderRadius={35}
                onLoad={() => setLoaded(true)}
                visibility={isLoaded ? "visible" : "hidden"}
                _hover={{
                  transform: "scale(1.01)",
                  transition: "transform .2s",
                  transitionTimingFunction: "ease-in-out",
                  shadow: "md",
                }}
              />
            </Box>

            <Box>
              <Heading> Who is this? </Heading>
              <Text align={"justify"}>
                <br />
                Ayubowan! I'm{" "}
                <b>
                  <a
                    href="https://www.linkedin.com/in/sonaljayasinghe/"
                    target="_blank"
                  >
                    {" "}
                    Sonal Jayasinghe
                  </a>
                </b>
                , and I'm currently pursuing a{" "}
                <b>
                  {" "}
                  <a
                    target="_blank"
                    href="https://science.sjp.ac.lk/information-and-communication-technology-ict/"
                  >
                    B.Sc. in Information and Communication Technology at the
                    University of Sri Jayewardenepura.{" "}
                  </a>
                </b>{" "}
                My life's philosophy is encapsulated in the Latin phrase
                <b>"Illumina Vita Tua"</b> which translates to "Light up Your
                Life." This motto drives me to develop ingenious solutions to
                everyday challenges through simple yet impactful business ideas.
                <br />
                <br /> My journey is guided by a profound passion for both IT
                and business. I believe that by harmonizing these two realms, I
                can contribute positively to society and enhance lives. As I
                tread this path, I envision not only professional success but
                also a future where I can be an exemplary husband.
                <br />
                <br />
                One of my ongoing ventures is the{" "}
                <b>
                  <a
                    href="https://sonaljayasinghe.github.io/marinara-hotel/"
                    target="_blank"
                  >
                    {" "}
                    Marinara Hotel Website{" "}
                  </a>
                </b>
                project, a testament to my dedication to bridging IT and
                business. Beyond this, I lend my expertise in digital marketing
                and IT support to{" "}
                <b>
                  {" "}
                  <a href="https://web.facebook.com/istoruva" target="_blank">
                    {" "}
                    ඉස්ටෝරු​ව Books and Rare Item Store.{" "}
                  </a>{" "}
                </b>{" "}
                In fact, I'm proud to hold a 50% ownership stake in this
                venture, reflecting my commitment to its growth.
                <br />
                <br />
                Recently, I've embarked on a new collaboration with{" "}
                <b>
                  {" "}
                  <a href="http://youtube.com/samayama" target="_blan">
                    {" "}
                    Samayama Youtube Channel{" "}
                  </a>{" "}
                </b>
                , managing their digital marketing strategies and overseeing
                video editing. This partnership, where I also hold 50%
                ownership, exemplifies my belief in leveraging technology to
                amplify creativity.
                <br />
                <br />
                As I walk this path illuminated by my motto, "Illumina Vita
                Tua," I invite you to join me on a journey of problem-solving,
                innovation, and growth. Let's connect and collaborate to light
                up lives together.
              </Text>
            </Box>
          </Flex>
        </Center>
      </Flex>
    </>
  );
}

export default InfoMe;
