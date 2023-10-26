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
  let imageSources = props.source;

  // useEffect(() => {
  //   console.log(isHovered);
  //   console.log(hoverSource);
  //   console.log(hoverText);
  // }, [isHovered, hoverSource, hoverText]);

  // useEffect(() => {
  //   console.log(imageSources);
  // }, [imageSources]);

  const handleClick = (source: string, text: string) => {
    setModalSource(source);
    setModalText(text);
    setOpenModal(true);
    console.log(modalSource);
  };

  const handleCloseFromModal = (cond: boolean) => {
    setOpenModal(cond);
  };

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
  };

  imageSources.forEach((source: any) => {
    const image = (
      <Parallax speed={source.speed} key={source.src}>
        <Button
          onClick={() => handleClick(source.src, source.kategori)}
          w={source.w}
          mt={source.mt}
          ml={source.ml}
          h={"auto"}
          bg={"transparent"}
          _hover={{
            background: "transparent",
            transform: "scale(1.1)",
          }}
          _focus={{
            background: "transparent",
          }}
          _active={{
            background: "transparent",
          }}
        >
          <Image
            objectFit="contain"
            w={{ base: "100%", xl: "40%" }}
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
      <GalleryModal
        openModal={openModal}
        closeModal={handleCloseFromModal}
        src={modalSource}
        text={modalText}
      />
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
      <Flex direction={"column"} pt={"5rem"} pb={"50rem"}>
        {imageArr}
      </Flex>
    </>
  );
};

export { Gallery as Gallery };
