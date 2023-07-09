import { Flex, Grid, GridItem, Image, Heading, Box, Button } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef } from "react";
import { CandidatesIntro } from "./CandidatesIntro";

const CandidatesDesktop = (props: any) => {
  const intro = useRef<HTMLDivElement>(null)
  const changeOverflow = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <Box
        className="candidatesWrapper"
        minH="100vh"
        minW="100vw"
        mx="auto"
        position="relative"
        ref={changeOverflow}
      >
        {/* <Box>
        <Button w={'100vw'} h={'100vh'} onClick={handleClick} position={'absolute'} zIndex={99}/>
        </Box> */}
        

        <Flex flexDirection={"column"} position={"relative"}>
          {/* atas */}
          <Image
            src={"Assets/Candidate/frameAtas.png"}
            top={-10}
            position={"absolute"}
            zIndex={1}
          />
          {/* bg */}
          <Image
            src={"Assets/Candidate/bgAwan.png"}
            mx={"auto"}
            w={"100%"}
            h={"64rem"}
            mt={"8rem"}
            position={"absolute"}
            zIndex={0}
            objectFit={"cover"}
          />

          {/* kiri */}
          <Image
            src={"Assets/Candidate/landscape/frameKiri.png"}
            left={0}
            position={"absolute"}
            zIndex={3}
            top={-2}
            transform={"scale(0.5)"}
            transformOrigin={"top left"}
          />
          <Image
            src={"Assets/Candidate/bunga1.png"}
            left={0}
            top={"45%"}
            position={"absolute"}
            transform={"scale(0.5)"}
            transformOrigin={"top left"}
            zIndex={3}
          />
          <Image
            src={"Assets/Candidate/landscape/frameKiri.png"}
            left={0}
            position={"absolute"}
            zIndex={2}
            top={"100%"}
            transform={"scale(0.5)"}
            transformOrigin={"top left"}
          />

          {/* kanan */}
          <Image
            src={"Assets/Candidate/landscape/frameKanan.png"}
            position={"absolute"}
            zIndex={3}
            top={-2}
            right={0}
            transform={"scale(0.5)"}
            transformOrigin={"top right"}
          />
          <Image
            src={"Assets/Candidate/bunga2.png"}
            right={0}
            top={"45%"}
            position={"absolute"}
            transform={"scale(0.5)"}
            transformOrigin={"top right"}
            zIndex={3}
          />
          <Image
            src={"Assets/Candidate/landscape/frameKanan.png"}
            position={"absolute"}
            zIndex={2}
            top={"100%"}
            right={0}
            transform={"scale(0.5)"}
            transformOrigin={"top right"}
          />

          {/* tengah */}
          <Image
            src={"Assets/Candidate/landscape/garis_lengkung_FULL.png"}
            top={-10}
            position={"absolute"}
            zIndex={1}
          />
          <Image
            src={"Assets/Candidate/cahayaIlahi.png"}
            mx={"auto"}
            my={"auto"}
            top={"-30%"}
            w={"100%"}
            position={"absolute"}
            zIndex={1}
          />
          <Image
            src="Assets/Candidate/pintuTangga_edited.png"
            position={"absolute"}
            mx={"auto"}
            my={"auto"}
            top={"-30%"}
            transform={"scale(0.8)"}
            zIndex={2}
          />

          <Image
            src="Assets/Candidate/meet_our_candidates.png"
            position={"absolute"}
            mx={"auto"}
            my={"auto"}
            top={"-30%"}
            transform={"scale(0.5)"}
            zIndex={2}
          />

          {/* <Heading
          position={"absolute"}
          mx={"auto"}
          my={"auto"}
          zIndex={15}
          fontSize='3rem'
          filter={"drop-shadow(0 0 10px #c28824)"}
          // color="#c28824"
          bgGradient='linear(to-r, #9f6b00, #ffd22a,  #9f6b00, #ffd22a)'
          bgClip='text'
          textAlign={'center'}
          mt={'30rem'}
          textShadow={'0 0 50px #433405'}
        >
          MEET OUR
          <br/>CANDIDATES  
        </Heading>          */}

          <Image
            src="Assets/Candidate/pilar.png"
            position={"absolute"}
            mx={"auto"}
            transform={"scale(0.8)"}
            top={"-30%"}
            zIndex={2}
          />

          {/* bawah */}
          <Image
            src={"Assets/Candidate/bunga1_edited.png"}
            position="absolute"
            left={"50%"}
            top={"78%"}
            transform={"scale(0.5) rotate(270deg)"}
            transformOrigin={"left"}
            zIndex={3}
          />

          <Image
            src={"Assets/Candidate/bunga1.png"}
            position="absolute"
            left={"13%"}
            top={"78%"}
            transform={"scale(0.3) rotate(270deg)"}
            transformOrigin={"left"}
            zIndex={3}
          />

          <Image
            src={"Assets/Candidate/bunga1.png"}
            position="absolute"
            left={"87%"}
            top={"78%"}
            transform={"scale(0.3) rotate(270deg)"}
            transformOrigin={"left"}
            zIndex={3}
          />

          {/* <Image
          src={"Assets/Candidate/fadeBawah.png"}
          position="absolute"
          mx={"auto"}
          zIndex={99}
          width={"100%"}
          top={"120%"}
          objectFit={"fill"}
        /> */}

          <Grid
            templateColumns={"repeat(3, 1fr)"}
            position={"relative"}
            top={"6rem"}
          >
            {/* Grid 1 */}
            <GridItem>
              <Image
                src={"Assets/Candidate/landscape/candidates01.png"}
                mx={"auto"}
                my={"auto"}
                w={"100%"}
                position={"relative"}
                zIndex={10}
                transform={"scale(1.1)"}
              />
            </GridItem>

            {/* Grid 2 */}
            <GridItem>
              {/* <Image
              src={'Assets/Candidate/frameAtas.png'}
              top={0}
              w={'100%'}
              /> */}
            </GridItem>

            {/* Grid 3 */}
            <GridItem>
              <Image
                src={"Assets/Candidate/landscape/candidates02.png"}
                top={0}
                w={"100%"}
                mx={"auto"}
                my={"auto"}
                position={"relative"}
                zIndex={10}
                transform={"scale(1.1)"}
              />
            </GridItem>

            {/* Grid 4 */}
            <GridItem>
              <Flex
                position={"relative"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src={"Assets/Candidate/landscape/candidates03.png"}
                  top={0}
                  position={"absolute"}
                  zIndex={10}
                  transform={"scale(1.1)"}
                />

                <Image
                  src={"Assets/Candidate/kabutKandidat2.png"}
                  position={"absolute"}
                  zIndex={11}
                  bottom={0}
                  top={"80%"}
                />
              </Flex>
            </GridItem>

            {/* Grid 5 */}
            <GridItem></GridItem>

            {/* Grid 6 */}
            <GridItem>
              <Flex
                position={"relative"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  src={"Assets/Candidate/landscape/candidates04.png"}
                  top={0}
                  position={"absolute"}
                  zIndex={10}
                  transform={"scale(1.1)"}
                />

                <Image
                  src={"Assets/Candidate/kabutKandidat.png"}
                  position={"absolute"}
                  zIndex={11}
                  bottom={0}
                  top={"80%"}
                />
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </>
  );
};

export { CandidatesDesktop as CandidatesDesktop };
