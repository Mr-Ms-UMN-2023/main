import { Flex, Box, Image, Heading, Button, Modal } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import Parallax from "react-rellax";
import { GalleryModal } from "./GalleryModal";

const Gallery = (props: any) => {
  const imageArr: any = [];
  const [hoverText, setHoverText] = useState("");
  const [hoverSource, setHoverSource] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalSource, setModalSource] = useState("");
  const [modalText, setModalText] = useState("");
  
  // range speed: -10 sampai 10

  const imageSources = [
    {
      src: "Assets/Gallery/pancala-day1-1.jpg",
      kategori: "PANCALA - DAY 1",
      alt: "",
      speed: 5,
      mt: "3rem",
      w: "50%",
      ml: "10%",
    },
    {
      src: "Assets/Gallery/pancala-day1-2.jpg",
      kategori: "PANCALA - DAY 1",
      alt: "",
      speed: 2,
      mt: "2.67rem",
      w: "38%",
      ml: "35%",
    },
    {
      src: "Assets/Gallery/pancala-day1-1.jpg",
      kategori: "PANCALA - DAY 1",
      alt: "",
      speed: 3,
      mt: "2.3rem",
      w: "32%",
      ml: "50%",
    },
    {
      src: "Assets/Gallery/pancala-day1-2.jpg",
      kategori: "PANCALA - DAY 1",
      alt: "",
      speed: 7,
      mt: "2rem",
      w: "38%",
      ml: "37%",
    },
    {
      src: "Assets/Gallery/pancala-day1-1.jpg",
      kategori: "PANCALA - DAY 1",
      alt: "",
      speed: -4,
      mt: "0rem",
      w: "32%",
      ml: "50%",
    },
    {
      src: "Assets/Gallery/pancala-day1-2.jpg",
      kategori: "PANCALA - DAY 1",
      alt: "",
      speed: 2,
      mt: "2rem",
      w: "40%",
      ml: "60%",
    },
    {
      src: "Assets/Gallery/pancala-day2-1.jpg",
      kategori: "PANCALA - DAY 2",
      alt: "",
      speed: -5,
      mt: "3rem",
      w: "40%",
      ml: "30%",
    },
    {
      src: "Assets/Gallery/pancala-day2-2.jpg",
      kategori: "PANCALA - DAY 2",
      alt: "",
      speed: 1,
      mt: "1.4rem",
      w: "36%",
      ml: "32%",
    },
    {
      src: "Assets/Gallery/pancala-day2-1.jpg",
      kategori: "PANCALA - DAY 2",
      alt: "",
      speed: 2,
      mt: "3rem",
      w: "28%",
      ml: "27%",
    },
    {
      src: "Assets/Gallery/pancala-day2-2.jpg",
      kategori: "PANCALA - DAY 2",
      alt: "",
      speed: 1,
      mt: "2.2rem",
      w: "40%",
      ml: "56%",
    },
    {
      src: "Assets/Gallery/pancala-day2-1.jpg",
      kategori: "PANCALA - DAY 2",
      alt: "",
      speed: -2,
      mt: "1rem",
      w: "36%",
      ml: "46%",
    },
    {
      src: "Assets/Gallery/pancala-day2-2.jpg",
      kategori: "PANCALA - DAY 2",
      alt: "",
      speed: 1,
      mt: "2rem",
      w: "36%",
      ml: "50%",
    },
  ];

  // useEffect(() => {
  //   console.log(isHovered);
  //   console.log(hoverSource);
  //   console.log(hoverText);
  // }, [isHovered, hoverSource, hoverText]);

  const handleClick = (source: string, text: string) => {
    setModalSource(source);
    setModalText(text);
    setOpenModal(true);
    console.log(modalSource);
  };

  const handleCloseFromModal = (cond: boolean) => {
    setOpenModal(cond);
  }

  const handleImageHover = (kategori: string, source: string) => {
    setHoverSource(source);
    setHoverText(kategori);
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  const handleOverlayHover = () => {
    setIsHovered(true);
  }

  imageSources.forEach((source) => {
    const image = (
      <Parallax
        speed={source.speed}
        mt={source.mt}
      >
        <Button onClick={() => handleClick(source.src, source.kategori)}
        w={source.w}
        ml={source.ml}
        h={"auto"}
        bg={"transparent"}
        _hover={{
            background: "transparent",
            transform: "scale(1.1)",
        }}
        _focus={{
          background: "transparent"
        }}
        _active={{
          background: "transparent"
        }}
        >
          <Image
            objectFit="contain"
            w={{base: "100%", xl: "40%"}}
            h={"auto"}
            src={source.src}
            onMouseEnter={() => handleImageHover(source.kategori, source.src)}
            onMouseLeave={handleImageLeave}
            filter={isHovered && hoverSource != source.src ? "blur(3px)" : ""}
            opacity={isHovered && hoverSource != source.src ? 0.5 : 1}
            alt={source.alt}
          />
        </Button>
      </Parallax>
    );

    imageArr.push(image);
  });

  return (
    <>
      <GalleryModal openModal={openModal} closeModal={handleCloseFromModal} src={modalSource} text={modalText}/>
      <Box
        display={isHovered ? "block" : "none"}
        position="fixed"
        zIndex={3}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        onMouseEnter={handleOverlayHover}
        onMouseLeave={handleImageLeave}
      >
        <Heading textAlign={"center"} color="#c28824">
          {hoverText}
        </Heading>
      </Box>
      <Flex direction={"column"} overflow={"hidden"} pt={"5rem"} pb={"50rem"}>
        {imageArr}
      </Flex>
    </>
  );
};

export { Gallery as Gallery };
