import {
  Box,
  AspectRatio,
  Image,
  Text,
  position,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

const Loading = () => {
  const [Loading, setLoading] = useState(1);
  useEffect(() => {
    document.body.classList.add("stop-scrolling");

    setTimeout(() => {
      setLoading(0);
      document.body.classList.contains("stop-scrolling")
        ? document.body.classList.remove("stop-scrolling")
        : null;
    }, 8000);
  }, []);

  const onEnded = () => {
    document.body.classList.remove("stop-scrolling");
    setLoading(0);
  };

  return (
    <Flex
      minH="100vh"
      minW="100vw"
      // maxH="200vh"
      // maxW="200vw"
      position={"fixed"}
      display={Loading == 0 ? "none" : "block"}
      alignItems="center"
      justifyContent={"center"}
      opacity={Loading}
      transition={"opacity 2s ease-out"}
      top="50%"
      left="50%"
      transform='translate(-50%, -50%)'
      zIndex={"100"}
      overflow='hidden'
      bg="black">
      <video
        height='100vh'
        width='100vw'
        src={"/Assets/Video/intro_2.mp4"}
        onEnded={() => onEnded()}
        className={styles.loading_video}
        playsInline
        autoPlay={true}
        muted={true}
        disablePictureInPicture
        style={{
          pointerEvents: "none",
          touchAction: "none",
          imageRendering: "pixelated",
          imageResolution: "inherit !important",
        }}></video>
    </Flex>
  );
};

export { Loading as Loading };

// src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
