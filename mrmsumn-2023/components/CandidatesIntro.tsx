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
  const [start, setStart] = useState(false);
  const img = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("clicked");
    setStart(true);
    if(props.desktop){
      imgZoom.current.style.transform = "scale(1)";
    } else {
      intro.current.style.transform = "scale(10)";
    }
    intro.current.style.opacity = "0";

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
        my={{base: "20%" , xl:"15%"}}
        mx={{base: "10%", xl:"25%"}}
        h={{ base: "80%", xl: "40%" }}
        w={{ base: "80%", xl: "50%" }}
        maxH={'100vh'}
        zIndex={2}
        disabled={start}
        background={'transparent'}
        overflow={'hidden'}
        display={start ? 'none' : 'block'}
      >
        <Image
        src="https://cdn.discordapp.com/attachments/1125453534062719016/1148827878411218994/meet_our_candidates.png"
        _hover={{ 
          transform: 'scale(1.1)',
          animation: 'none',
        }}
        // bg={'white'}
        my={"-30%"}
        className = {styles.pulse}
        transition={'all 1s ease-in-out'}
        transformOrigin={'center'}
        zIndex={3}
        />
      </Button>
      <Box
        h={"100vh"}
        w={"100vw"}
        position={"absolute"}
        zIndex={1}
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
            src="https://cdn.discordapp.com/attachments/1125453534062719016/1148827877513637918/pintuLengkap.png"
          />
        </AspectRatio>
      </Box>
    </>
  );
};

export { CandidatesIntro as CandidatesIntro };
