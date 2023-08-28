import React from "react";
import { Box, Button, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface Props {
  imgURL: string[];
  link?: string;
}

export default function Carousel({ imgURL, link }: Props) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide

  return (
    <Box height={"max-content"} width={"full"} padding={2}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {imgURL.map((url, index) => (
            <Box
              key={index}
              h={"300px"}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
              borderRadius={15}
            />
          ))}
        </Slider>
        {link && (
          <Button
            as="a"
            bgColor={"black"}
            color={"white"}
            float={"right"}
            top={-20}
            right={10}
            borderRadius={8}
            _hover={{ bgColor: "gray.800" }}
            href={link}
            target={"_blank"}
            marginBottom={-100}
          >
            Visit
          </Button>
        )}
      </Box>
    </Box>
  );
}
