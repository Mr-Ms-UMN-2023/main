import { Box, Text, Img, Flex, HStack, Link } from "@chakra-ui/react";
// import Link from "next/link";

const TiketHimalaya = () => {
  return (
    <>
      <Flex
        position={"relative"}
        minH={"100vh"}
        alignItems={"center"}
        justify="center"
        color="white">
        <Img
          width={"40%"}
          position={"absolute"}
          top="0px"
          right={"0px"}
          maxW="20rem"
          src="/Assets/TiketHimalaya/bunga.png"
        />
        <Img
          width={"50%"}
          maxW="40rem"
          position={"absolute"}
          bottom="0px"
          left={"0px"}
          src="/Assets/TiketHimalaya/wayang.png"
        />
        <Img
          zIndex={"-1"}
          top={"50%"}
          left="50%"
          transform={"translate(-50%, -50%)"}
          position={"fixed"}
          minWidth={{ base: "200vw", md: "100vw" }}
          src="/Assets/TiketHimalaya/bg.png"
        />

        <Flex
          flexDir={"column"}
          w={{ base: "80vw", md: "50vw" }}
          maxWidth={{ base: "80vw", md: "30rem" }}
          padding={"2rem"}
          boxShadow={"0px 0px 50px 10px #FCD741"}>
          <Text
            fontSize={{ base: "1.5rem", md: "2rem" }}
            fontWeight={"bold"}
            textAlign={"center"}>
            Himalaya
          </Text>
          <Text
            fontSize={{ base: "1.5rem", md: "2rem" }}
            fontWeight={"bold"}
            textAlign={"center"}>
            Mr. & Ms. UMN 2023
          </Text>
          <HStack mt={"2rem"}>
            <Img
              width="2rem"
              height={"2rem"}
              objectFit="contain"
              src="/Assets/TiketHimalaya/icon-location.png"
            />
            <Text>
              Lokasi: <b>QBIG Convention</b>
            </Text>
          </HStack>
          <HStack>
            <Img
              width="2rem"
              height={"2rem"}
              objectFit="contain"
              src="/Assets/TiketHimalaya/icon-calendar.png"
            />
            <Text>
              Tangal: ̌<b>11 November 2023</b>
            </Text>
          </HStack>
          <HStack>
            <Img
              width="2rem"
              height={"2rem"}
              objectFit="contain"
              src="/Assets/TiketHimalaya/icon-time.png"
            />
            <Text>
              Jam: <b>16.00 WIB</b>
            </Text>
          </HStack>
          <HStack>
            <Img
              width="2rem"
              height={"2rem"}
              objectFit="contain"
              src="/Assets/TiketHimalaya/icon-price.png"
            />
            <Text>
              Harga Tiket: <b>Rp. 20.000</b>
            </Text>
          </HStack>
          <Text fontSize={"0.8rem"} mt={"2rem"}>
            *Jika email tiket tidak terkirim dalam waktu 1 hari silahkan isi
            form ini
          </Text>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSedPpIfUO3BUyl6p7Cn-CzQqyBzqrSDnfpSbLhzl2HPrN4OaQ/viewform?usp=sf_link">
            <Text fontWeight={"bold"} color={"#FCD741"}>
              Formulis Pengajuan Kendala
            </Text>
          </Link>

          <Link
            w={"fit-content"}
            alignSelf={"center"}
            justifySelf={"center"}
            textAlign={"center"}
            href={"/tiket-himalaya/konfirmasi"}
            padding={"0.5rem"}
            mt={"2rem"}
            fontSize={{ base: "1rem", md: "1.5rem" }}
            fontWeight={"Bold"}
            color={"black"}
            width={"80%"}
            bg="#FCD741">
            DAPATKAN TIKET ANDA
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default TiketHimalaya;
