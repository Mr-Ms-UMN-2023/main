import {
  Flex,
  Box,
  Image,
  Heading,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";

const CandidatesMobile = (props: any) => {
  const [orientation, setOrientation] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(orientation: portrait)")) {
      setOrientation(true);
    } else {
      setOrientation(false);
    }

    window
      .matchMedia("(orientation: portrait)")
      .addEventListener("change", (e) => {
        const portrait = e.matches;

        if (portrait) {
          setOrientation(true);
        } else {
          setOrientation(false);
        }
      });
  }, []);

  return (
    <Box
      display={props.show ? "block" : "none"}
      minH="100vh"
      w="100wh"
      maxW="1366px"
      mx="auto"
      position="relative"
    >
      <Flex flexDirection={"column"} position={"relative"}>
        <Flex
          justifyContent={"between"}
          alignItems={"center"}
          textAlign={"center"}
          position={"relative"}
          zIndex={98}
          mt={orientation ? "17.3vh" : "30vh"}
        >
          <Image
            src={"Assets/Candidate/bunga1.png"}
            // w="40%"
            h="25rem"
            position={"absolute"}
            left={-4}
          />

          <Heading
            bgGradient="linear(to-r, #9f6b00, #ffd22a,  #9f6b00, #ffd22a)"
            bgClip="text"
            mx={"auto"}
            px={"auto"}
            pb="2"
            fontSize={{ base: "1.7rem", md: "3rem" }}
            filter={"drop-shadow(0 0 100px #c28824)"}
            zIndex={97}
          >
            MEET OUR
            <br />
            CANDIDATES
          </Heading>
          {/* <Image
              h='20rem'
              mx={'auto'}
              src={'Assets/Candidate/meet_our_candidates.png'}
              zIndex={97}/> */}

          <Image
            src={"Assets/Candidate/bunga2.png"}
            h="25rem"
            position={"absolute"}
            right={-4}
          />
        </Flex>

        <Image
          src={"Assets/Candidate/potrait/BG_candidate_potrait_edited.png"}
          position={"absolute"}
          zIndex={0}
          w={"100%"}
          mt={orientation ? "9rem" : 0}
          objectFit={"scale-down"}
        />

        <Image
          zIndex={50}
          mt={orientation ? "8rem" : 0}
          pt={
            orientation
              ? { base: "10rem", md: "19rem" }
              : { base: "22rem", lg: "26rem" }
          }
          position={"absolute"}
          src={"https://cdn.discordapp.com/attachments/1125453534062719016/1148821197363101747/all.png"}
        />
      </Flex>
    </Box>
  );
};

export { CandidatesMobile as CandidatesMobile };
