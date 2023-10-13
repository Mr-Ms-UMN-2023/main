import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Flex, Img, Text } from "@chakra-ui/react";
const Page = () => {
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   const id = searchParams.get("id");
  // });

  return (
    <Flex
      textAlign={"center"}
      flexDir={"column"}
      h="100vh"
      w="100vw"
      color="white"
      alignItems={"center"}
      justifyContent={"center"}>
      <Img
        width={"40%"}
        position={"absolute"}
        top="0px"
        right={"0px"}
        maxW="20rem"
        src="/Assets/TiketHimalaya/bunga.png"
      />
      <Img
        zIndex={"0"}
        width={"40%"}
        maxW="40rem"
        position={"absolute"}
        bottom="0px"
        left={"0px"}
        src="/Assets/TiketHimalaya/wayang.png"
      />
      <Img
        transform="rotateY(180deg)"
        width={"40%"}
        position={"absolute"}
        top="0px"
        left={"0px"}
        maxW="20rem"
        src="/Assets/TiketHimalaya/bunga.png"
      />
      <Img
        transform="rotateY(180deg)"
        zIndex={"0"}
        width={"40%"}
        maxW="40rem"
        position={"absolute"}
        bottom="0px"
        right={"0px"}
        src="/Assets/TiketHimalaya/wayang.png"
      />
      <Text fontFamily={"TrajanPro-Bold"} fontWeight={"bold"} color={"#f3d242"}>
        Selamat Pembelian Tiket anda Berhasil
      </Text>
      <Text color={"#f3d242"}>Silahkan cek email untuk mendapatkan tiket</Text>
    </Flex>
  );
};

export default Page;
