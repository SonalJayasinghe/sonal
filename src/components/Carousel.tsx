import React, { useState } from "react";
import { Box, Button, Image, Skeleton } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import {FiExternalLink} from "react-icons/fi"

// Settings for the slider
const settings = {
  arrows: false,
  fade: true,
  infinite: true,
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
  const [, setSlider] = React.useState<Slider | null>(null);
  const [isLoaded, setLoaded] = useState(false);

  // These are the images used in the slide

  return (
    <Box height={"max-content"} width={"full"} padding={2}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href= "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box>
        <Slider {...settings} ref={(slider) => setSlider(slider)} dots = {isLoaded} autoplay={isLoaded}>
          {!isLoaded && (
            <Skeleton
              w={"100%"}
              h={{ base: "300px", md: "350px" }}
              borderRadius={35}
            />
          )}
          {imgURL.map((url, index) => (
            <Image
              key={index}
              h={{ base: "max-conent", md: "350px" }}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              src= {url}
              onLoad={() => {
                if (index === imgURL.length - 1) {
                  setLoaded(true);
                }
              }}
              borderRadius={30}
            />
          ))}
        </Slider>

        {link && (
          <Button
            as="a"
            bgColor={"black"}
            color={"white"}
            float={"right"}
            bottom={16}
            leftIcon={<FiExternalLink/>}
            right={8}
            borderRadius={50}
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
