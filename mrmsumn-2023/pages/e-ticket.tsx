import { Box, color, Flex, Img, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ETiket = () => {
  const [tiketData, setTiketData] = useState<any>();
  const route = useRouter();

  const fetchData = async () => {
    const pattern = /order_id=([A-Z0-9-]+)/;
    const match = window.location.href.toString().match(pattern);
    console.log(match);
    if (match) {
      const order_id = match[1];
      console.log(order_id);
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/ticket/get/order_id/" + order_id
      );

      console.log(
        process.env.NEXT_PUBLIC_API_URL + "/api/ticket/get/order_id/" + order_id
      );

      const parsedResponse = await response.json();

      if (parsedResponse.code == 200) {
        const res = parsedResponse.data;
        console.log(res, parsedResponse);
        setTiketData(res);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex
      minH={"100vh"}
      color={"white"}
      flexDir={"column"}
      alignItems="center"
      justify={"center"}
      w="100vw">
      {tiketData ? (
        tiketData.map((e: any, index: number) => {
          return (
            <>
              <Tiket
                {...e}
                index={index + 1}
                max={tiketData.length}
                key={index}
              />
            </>
          );
        })
      ) : (
        <>
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
            Code E-Tiket Salah
          </Text>
        </>
      )}
    </Flex>
  );
};

const Tiket = (props: any) => {
  return (
    <Box maxW={"800px"} w="100vw" p="1rem" color="white">
      {props.max !== 1 && props.index !== 1 && (
        <hr
          style={{
            marginBottom: "5rem",
            color: "#f4cf41",
            border: "1px dashed #f4cf41",
          }}
        />
      )}
      <Img
        w="100%"
        src="https://cdn.discordapp.com/attachments/1125453534062719016/1162302877507784704/Banner_Ticket.png?ex=653b71e8&is=6528fce8&hm=b97686cec57f00ef08a7b30985c857004429ae330f7fa8b19e53a57afd92992a&"
      />
      <Text fontSize={"1.5rem"} mt={"1rem"} fontWeight={"bold"}>
        Ticket {props.index} of {props.max}
      </Text>
      <Flex w="100%">
        <Img
          objectFit={"contain"}
          maxH={"60vh"}
          w="50%"
          src={`https://image-charts.com/chart?chs=200x200&cht=qr&chl=${props.token}&choe=UTF-8&icqrb=000000&icqrf=f4cf41&chof=.png`}
        />
        <Flex flexDir={"column"} justify="center">
          <Box>
            <Text>Tiket No. / No. Tiket</Text>
            <Text fontWeight={"bold"}>{props.token.slice(7)}</Text>
          </Box>
          {/* <Box mt="1rem">
            <Text>Name / Nama</Text>
            <Text fontWeight={"bold"}>{props.nama}</Text>
          </Box>
          <Box mt="1rem">
            <Text>Email</Text>
            <Text fontWeight={"bold"}>{props.email}</Text>
          </Box> */}
        </Flex>
      </Flex>
      <Box mt="1rem" fontWeight={"bold"}>
        Awarding Night Mr. & Ms. UMN 2023
      </Box>
      <Flex gap={"2rem"}>
        <Box>
          <Box>Open Gate</Box>
          <Box>Date</Box>
          <Box>Vanue Event</Box>
        </Box>
        <Box>
          <Box>: 16.00 - 18.00 WIB</Box>
          <Box>: 24 November 2023</Box>
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
