import { Box, Text, Img, Flex, HStack, Link } from "@chakra-ui/react";
import router from "next/router";
// import Link from "next/link";

export const TIKET = {
  tempat: "Q BIG Convention Hall",
  tanggal: "24 November 2023",
  jam: "16.00 - 18.00",
  harga: 85000,
};

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
              Lokasi: <b>{TIKET.tempat}</b>
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
              Tangal: ̌<b>{TIKET.tanggal}</b>
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
              Open Gate: <b>{TIKET.jam.toString()} WIB</b>
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
              Harga Tiket: <b>Rp. {TIKET.harga.toLocaleString()}</b>
            </Text>
          </HStack>
          <Text fontSize={"0.8rem"} mt={"2rem"}>
            *Jika email tiket tidak terkirim dalam waktu 1 hari silahkan isi
            form ini
          </Text>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSedPpIfUO3BUyl6p7Cn-CzQqyBzqrSDnfpSbLhzl2HPrN4OaQ/viewform?usp=sf_link">
            <Text fontWeight={"bold"} color={"#FCD741"}>
              Formulir Pengajuan Kendala
            </Text>
          </Link>

          <Box
            cursor={"pointer"}
            onClick={() => router.push("/tiket-himalaya/konfirmasi")}
            w={"fit-content"}
            alignSelf={"center"}
            justifySelf={"center"}
            textAlign={"center"}
            padding={"0.5rem"}
            mt={"2rem"}
            fontSize={{ base: "1rem", md: "1.5rem" }}
            fontWeight={"Bold"}
            color={"black"}
            width={"80%"}
            bg="#FCD741">
            DAPATKAN TIKET ANDA
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default TiketHimalaya;
