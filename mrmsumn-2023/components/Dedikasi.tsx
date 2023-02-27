import {
  Box,
  Flex,
  Img,
  Text,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

let ArrMrMsFav = [
  {
    foto: "/Assets/dedikasi/mrFav2022.png",
    jurusan: "Visual Communication Design 2021",
    nama: "Jessen Gunawan",
  },
  {
    foto: "/Assets/dedikasi/msFav2022.png",
    jurusan: "Digital Journlism 2021",
    nama: "Chatarina Ivanka",
  },
  {
    foto: "/Assets/dedikasi/mrBestTalent2022.png",
    jurusan: "Digital Journlism 2021",

    nama: "Sopater Daniel",
  },
  {
    foto: "/Assets/dedikasi/msBestTalent2022.png",
    jurusan: "Strategic Communication 2020",

    nama: "Felicia Ivana Tanu",
  },
];

const Dedikasi = (props: any) => {
  return (
    <Flex
      pb="5rem"
      left={"0px"}
      top={"0px"}
      alignItems={"center"}
      flexDir={"column"}
      color={"white"}
      // overflowY={"scroll"}
      overflowX={"hidden"}
      // zIndex={"100"}
      w="100vw"
      // h="100vh"
      bgColor={"black"}
      // position={"fixed"}
    >
      {/* <Flex
        zIndex={"100"}
        cursor={"pointer"}
        onClick={() => props.Dedikasi(false)}
        left="0px"
        top="1rem"
        alignItems={"center"}
        position={"fixed"}
        textAlign={{ base: "center", md: "right" }}>
        <Box w="3rem">
          <Box className={styles.animateLine} bg="white" h="2px"></Box>
        </Box>

        <Text>Back to Home</Text>
      </Flex> */}
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        textAlign={{ base: "center", md: "right" }}
        alignItems={"center"}
        justifyContent={{ base: "center", md: "right" }}
        w="100vw"
        minH="100vh">
        <Box>
          <Heading color="#c28824">Mr. UMN 2022</Heading>
          <Text fontSize={"1.2rem"}>Mr. Dickson Kang</Text>
          <Text fontSize={"1.2rem"}>Visual Communication Design - 2020</Text>
        </Box>
        <Img
          w={{ base: "100vw", md: "50vw" }}
          src="/Assets/dedikasi/fotoMr2022.png"
        />
      </Flex>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        w="100vw"
        minH="100vh"
        textAlign={{ base: "center", md: "left" }}
        alignItems={"center"}
        justifyContent={{ base: "center", md: "left" }}>
        <Img
          w={{ base: "100vw", md: "50vw" }}
          src="/Assets/dedikasi/fotoMs2022.png"
        />
        <Box>
          <Heading color="#c28824">Ms. UMN 2022</Heading>
          <Text fontSize={"1.2rem"}>Ms. Amelia Santoso</Text>
          <Text fontSize={"1.2rem"}>Strategic Communication - 2020</Text>
        </Box>
      </Flex>

      <Flex
        flexDir={"column"}
        w="100vw"
        minH="100vh"
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
        overflow="hidden">
        <Img
          transform="rotateY(180deg)"
          maxW={{ base: "200vw", md: "70vw" }}
          src="/Assets/dedikasi/runnerUp2022.png"
        />
        <Heading mb="2rem" color="#c28824">
          Runner Up
        </Heading>
        <Flex w={{base : "90vw", md : 'auto'}} flexDirection={{base : 'column', lg : 'row'}} alignItems={"center"} justifyContent={"space-evenly"} gap={{md : '0rem', lg : '8rem'}}>
          <Box w={{ base: "80vw", lg: "30vw" }} my={{base : ".5rem", md : '0'}}>
            <Heading color="#c28824" fontSize={{ base: "1.2rem", md: "2rem" }} w={{base : "100%", md : 'auto'}}>
              Mr. Dave Hapien Indrianto
            </Heading>
            <Text fontSize={{ base: "0.8rem", md: "1.2rem" }} w={{base : "100%", md : 'auto'}}>
              Strategic Communication - 2020
            </Text>
          </Box>

          <Box w={{ base: "80vw", lg: "30vw" }} my={{base : ".5rem", md : '0'}}>
            <Heading color="#c28824" fontSize={{ base: "1.2rem", md: "2rem" }}>
              Ms. Clara Shinta Purnama
            </Heading>
            <Text fontSize={{ base: "0.8rem", md: "1.2rem" }}>
              Strategic Communication - 2020
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Flex
        mt="10vh"
        position={"relative"}
        p={"2rem"}
        w="100vw"
        alignItems={"center"}
        justifyContent={"center"}>
        <Grid
          position={"relative"}
          className={styles.mrmsbox}
          placeItems={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"1rem"}
          templateColumns="repeat(12, 1fr)"
          templateRows={"repeat(auto-fit,1fr)"}>
          {ArrMrMsFav.map((item, index) => {
            return (
              <GridItem key={index} colSpan={{ base: 12, md: 6, xl: 3 }}>
                <Box
                  h="70vh"
                  borderRadius={"1rem"}
                  overflow="hidden"
                  position={"relative"}
                  filter={"grayscale(100%)"}
                  _hover={{ filter: "grayscale(0%)!important" }}
                  // className={styles.MrMsFav}
                  border={"1px solid #c28824"}>
                  <Img w="100%" src={item.foto} />
                  <Flex
                    p="1rem"
                    alignItems={"center"}
                    justifyContent={"center"}
                    w="100%"
                    left={"0px"}
                    bottom={"0px"}
                    position={"absolute"}
                    h="30%"
                    bg={"rgba(0, 0, 0, 0.9)"}>
                    <Box>
                      <Heading textAlign={"center"} color="#c28824">
                        {item.nama}
                      </Heading>
                      <Text textAlign="center">
                        {item.jurusan}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>

      <Flex
        mt="10vh"
        position={"relative"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}>
        <Heading color="#c28824">Mr. & Ms. UMN 2022 Finalist</Heading>
        <Flex
          position={"relative"}
          gap={{ base: "5rem", md: "2rem" }}
          flexDir={{ base: "column", md: "row" }}>
          <Flex flexDir={{ base: "column", xl: "row" }}>
            <Flex
              position={"relative"}
              flexDir={"column"}
              alignItems={"center"}>
              <Img
                maxH={{ base: "90vh", md: "70vh" }}
                maxW={{ base: "80vw", md: "25vw" }}
                src="/Assets/finalist22/42598.jpg"
              />
              <Flex flexDir={"column"}>
                <Heading fontSize={"1.5rem"} color="#c28824">
                  William Albert Hammod
                </Heading>
                <Text fontSize={"1.2rem"}>Film 2020</Text>
              </Flex>
            </Flex>
            <Flex
              position={"relative"}
              flexDir={"column"}
              alignItems={"center"}>
              <Img
                maxH={{ base: "90vh", md: "70vh" }}
                maxW={{ base: "80vw", md: "25vw" }}
                src="/Assets/finalist22/62346.jpg"
              />
              <Flex position={"relative"} flexDir={"column"}>
                <Heading fontSize={"1.5rem"} color="#c28824">
                  Kevin Brigitha Sirait
                </Heading>
                <Text fontSize={"1.2rem"}>Strategic Communication 2021</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir={{ base: "column", xl: "row" }}>
            <Flex
              position={"relative"}
              flexDir={"column"}
              alignItems={"center"}>
              <Img
                maxH={{ base: "90vh", md: "70vh" }}
                maxW={{ base: "80vw", md: "25vw" }}
                src="/Assets/finalist22/43470.jpg"
              />
              <Flex flexDir={"column"}>
                <Heading fontSize={"1.5rem"} color="#c28824">
                  Liemanuel Glennixon
                </Heading>
                <Text fontSize={"1.2rem"}>
                  Visual Communication Design 2020
                </Text>
              </Flex>
            </Flex>
            <Flex
              position={"relative"}
              flexDir={"column"}
              alignItems={"center"}>
              <Img
                src="/Assets/finalist22/54768.jpg"
                maxH={{ base: "90vh", md: "70vh" }}
                maxW={{ base: "80vw", md: "25vw" }}
              />
              <Flex flexDir={"column"}>
                <Heading fontSize={"1.5rem"} color="#c28824">
                  Tiffany Jovita
                </Heading>
                <Text fontSize={"1.2rem"}>Strategic Communication 2020</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const buttonDedikasi = (props: any) => {
  return (
    <Box
      w="2rem"
      onClick={() => props.Dedikasi((current: any) => (current ? false : true))}
      cursor={"pointer"}
      textAlign={"center"}
      p="0.5rem"
      zIndex={"90"}
      bg="white"
      transform={"translate(0px, -50%)"}
      top={"50vh"}
      right="0px"
      position={"fixed"}>
      <Heading
        fontSize={"1rem"}
        fontWeight={"1000"}
        style={{ textOrientation: "mixed", writingMode: "vertical-rl" }}>
        Mr. & Ms. UMN
      </Heading>
    </Box>
  );
};

export { Dedikasi as Dedikasi };
export { buttonDedikasi as ButtonDedikasi };
