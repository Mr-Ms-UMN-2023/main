import {
  Box,
  Image,
  AspectRatio,
  Img,
  Button,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";

const CandidatesIntro = (props: any) => {
  const intro = useRef<HTMLDivElement>(null);
  const imgZoom = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if(props.desktop){
      imgZoom.current.style.transform = "scale(1)";
    } else {
      intro.current.style.transform = "scale(10)";
    }
    intro.current.style.opacity = "0";

    btn.current.style.display = "none";

    setTimeout(() => {
      intro.current.style.display = "none";
      props.setShow(true);
    }, 1000);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        transform={"translate(-50%, -50%)"}
        h={{ base: "80%", lg: "70%" }}
        w={{ base: "80%", lg: "50%" }}
        zIndex={99}
        ref={btn}
        background={'transparent'}
        _hover={{ 
          background: 'transparent'
        }}
        _active={{
          background: 'transparent'
        }}
        _focus={{
          background: 'transparent'
        }}
        overflow={'hidden'}
      >
        <Image
        src="Assets/Candidate/meet_our_candidates.png"
        _hover={{ 
          transform: 'scale(1.1)'
        }}
        transition={'all 1s ease-in-out'}
        transformOrigin={'center'}
        />
      </Button>
      <Box
        h={"100vh"}
        w={"100vw"}
        position={"absolute"}
        zIndex={95}
        ref={intro}
        className={styles.zoom}
        overflow={'hidden'}
        transformOrigin={{ base: '50% 60%', lg:'50% 65%', xl:'50% 75%'}}
      >
        <AspectRatio
          position={"relative"}
          h={'100vh'}
          w={'100vw'}
          overflow={"hidden"}
          ratio={16 / 9}
          transform={props.desktop ? 'scale(10)' : undefined}
          transformOrigin={props.desktop ? '50% 70%' : undefined}
          className={styles.zoom}
          ref={imgZoom}
        >
          <Img
            loading="eager"
            h={"100vh"}
            w={"100vw"}
            src="/Assets/Candidate/pintuLengkap.png"
          />
        </AspectRatio>
      </Box>
    </>
  );
};

export { CandidatesIntro as CandidatesIntro };
