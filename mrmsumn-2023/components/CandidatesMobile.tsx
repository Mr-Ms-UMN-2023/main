import { Flex, Box, Image, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";

const CandidatesMobile = (props: any) => {
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
          mt={props.orientation ? "17.3vh" : "15vh"}
        >
          <Image
            src={"Assets/Candidate/compressed/hd+/bunga1.png"}
            // w="40%"
            h="25rem"
            position={"absolute"}
            zIndex={2}
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
            zIndex={2}
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
            src={"Assets/Candidate/compressed/hd+/bunga2.png"}
            h="25rem"
            position={"absolute"}
            zIndex={2}
            right={-4}
          />
        </Flex>

        <Image
          display={{ base: "block", md: props.orientation ? "block" : "none" }}
          src={
            "https://cdn.discordapp.com/attachments/1125453534062719016/1167125833924747384/BG_candidate_potrait_edited.png?ex=654cfda2&is=653a88a2&hm=bc05d31fb9aadc1d37c28e9985de1e209bc3b697a9ffe66242dcb7d48cba1e94&"
          }
          position={"absolute"}
          zIndex={1}
          mt={props.orientation ? "9rem" : 0}
          objectFit={"scale-down"}
        />

        <Image
          display={{ base: "none", md: props.orientation ? "none" : "block" }}
          src={
            "https://media.discordapp.net/attachments/1125453534062719016/1148827877513637918/pintuLengkap.png?ex=654b05d6&is=653890d6&hm=0110e486e0a00b6a88c59c72852b1e7366ec56bd79fe18583a1a9f528ba4adaa&=&width=936&height=936"
          }
          alignSelf={"center"}
          position={"absolute"}
          zIndex={1}
          mt={props.orientation ? "9rem" : 0}
          objectFit={"scale-down"}
        />

        <Image
          // display={props.showCandidates ? "block" : "none"}
          alignSelf={"center"}
          opacity={props.brightness * 100 + "%"}
          zIndex={2}
          mt={props.orientation ? "8rem" : 0}
          pt={
            props.orientation
              ? { base: "10rem", md: "13rem" }
              : { base: "22rem", lg: "10rem" }
          }
          position={"absolute"}
          src={
            "https://cdn.discordapp.com/attachments/1125453534062719016/1148821197363101747/all.png"
          }
          w={{ base: "100%", md: props.orientation ? "100%" : "70vw" }}
          mx={"auto"}
        />
      </Flex>
    </Box>
  );
};

export { CandidatesMobile as CandidatesMobile };
