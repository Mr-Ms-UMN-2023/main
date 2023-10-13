import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ETiket = () => {
  const [tiketData, setTiketData] = useState();
  const searchParams = useSearchParams();
  //   const [qrToken, setQrToken] = useState([]);
  const qrToken = ["koong", "hiap"];
  //   setQrToken(["ojan", "Koong"]);

  const TIKET = [
    {
      nama: "koong",
      token: "token",
      email: "koong@gmail.com",
    },
    { nama: "koong", token: "token", email: "koong@gmail.com" },
  ];

  console.log(searchParams.get("id"));

  const fetchData = async () => {
    const response = await fetch("/api/e-ticket/" + searchParams.get("id"));

    const parsedResponse = await response.json();
    if (parsedResponse.status == 200) {
      const res = parsedResponse.data;
      setTiketData(res);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Flex
      minH={"100vh"}
      color={"white"}
      flexDir={"column"}
      alignItems="center"
      justify={"center"}
      w="100vw">
      {/* {TIKET.map((e: any, index) => {
        return <Tiket {...e} key={index} />;
      })} */}

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
      <Text
        fontFamily={"TrajanPro-Bold"}
        fontWeight={"black"}
        color={"#f3d242"}>
        E-Tiket belum tersedia saat ini silahkan kembali lagi nanti
      </Text>
    </Flex>
  );
};

const Tiket = (props: any) => {
  return (
    <Box maxW={"800px"} w="100vw" p="1rem" color="white">
      <Img
        w="100%"
        src="https://cdn.discordapp.com/attachments/1125453534062719016/1162302877507784704/Banner_Ticket.png?ex=653b71e8&is=6528fce8&hm=b97686cec57f00ef08a7b30985c857004429ae330f7fa8b19e53a57afd92992a&"
      />
      <Flex mt="2rem" w="100%">
        <Img
          objectFit={"contain"}
          maxH={"60vh"}
          mr="2rem"
          w="50%"
          src={`https://image-charts.com/chart?chs=200x200&cht=qr&chl=${props.token}&choe=UTF-8`}
        />
        <Flex flexDir={"column"} justify="center">
          <Box>
            <Text>Tiket No. / No. Tiket</Text>
            <Text fontWeight={"bold"}>{props.token}</Text>
          </Box>
          <Box mt="1rem">
            <Text>Name / Nama</Text>
            <Text fontWeight={"bold"}>{props.nama}</Text>
          </Box>
          <Box mt="1rem">
            <Text>Email</Text>
            <Text fontWeight={"bold"}>{props.email}</Text>
          </Box>
        </Flex>
      </Flex>
      <Box mt="1rem" fontWeight={"bold"}>
        Awarding Night Mr. & Ms. UMN 2023
      </Box>
      <Flex gap={"2rem"}>
        <Box>
          <Box>Open Gate</Box>
          <Box>Vanue Event</Box>
        </Box>
        <Box>
          <Box>: 16.00 - 18.00 WIB</Box>
          <Box>: QBIG Convention Hall</Box>
        </Box>
      </Flex>
      <Box mt="2rem">
        <Text fontWeight={"bold"}>Syarat & Ketentuan</Text>
        <Text mt="1rem" fontWeight={"bold"}>
          Umum
        </Text>
        <Text>1. Harga belum termasuk biaya administrasi.</Text>
        <Text>2. Pembeli wajib megisi data diri pribadi saat memsan.</Text>
        <Text>3. Tiket yang sudah dibeli tidak dapat dikembalikan.</Text>

        <Text mt="1rem" fontWeight={"bold"}>
          E-tiket
        </Text>
        <Text>1. E-Tiket tidak dapat dikembalikan</Text>
        <Text>2. Kehilangan E-Tiket merupakan tanggung jawab pemegang</Text>
        <Text>
          3. Masing - masing E-ticket akan ditukarkan pada tanggal kegiatan
          untuk memilih tempat duduk.
        </Text>
      </Box>
    </Box>
  );
};

export default ETiket;
