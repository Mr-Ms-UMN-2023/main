import {
  Box,
  Text,
  Img,
  Flex,
  HStack,
  Link,
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import router from "next/router";
import { useEffect, useState } from "react";
// import Link from "next/link";

export const TIKET = {
  tempat: "Q BIG Convention Hall",
  tanggal: "24 November 2023",
  jam: "16.00 - 18.00",
};

const TiketHimalaya = () => {
  const [data, setData] = useState([{}]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://mrms2023.my.id/api/ticket/get/ticket-items"
      );
      let result = await res.json();
      result = result.splice(0, 3);
      setData(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tutup, setTutup] = useState<any>(false);

  useEffect(() => {
    fetchData();
    let today = new Date();
    console.log("today", today.toString());
    if (today.toString() >= "Fri Nov 24 2023 18:00:00 GMT+0700") {
      console.log("lewat mase");
      // router.push("/ticket-himalaya");
      setTutup(true);
    }
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Semua Pembelian Tiket setelah jam 18.00 dilakukan pada Q BIG
              Convention Hall
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
        position={"relative"}
        minH={"100vh"}
        alignItems={"center"}
        justify="center"
        color="white">
        <Img
          zIndex={"1"}
          width={"30%"}
          position={"absolute"}
          top="0px"
          right={"0px"}
          maxW="20rem"
          src="/Assets/TiketHimalaya/bunga.png"
        />
        <Img
          zIndex={"1"}
          width={"40%"}
          maxW="40rem"
          position={"absolute"}
          bottom="0px"
          left={"0px"}
          src="/Assets/TiketHimalaya/wayang.png"
        />
        <Img
          zIndex={10}
          w={"4rem"}
          position={"absolute"}
          bottom={"60px"}
          left={"50%"}
          transform="translate(-50%)"
          src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
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
              Tanggal: ̌<b>{TIKET.tanggal}</b>
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

          <Text fontWeight={"bold"} color={"#FCD741"}>
            Semua Pembelian Tiket setelah jam 18.00 dilakukan pada Q BIG
            Convention Hall
          </Text>

          <Text fontSize={"0.8rem"} mt={"2rem"}>
            *Jika email tiket tidak terkirim dalam waktu 1 hari silahkan isi
            form ini
          </Text>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSedPpIfUO3BUyl6p7Cn-CzQqyBzqrSDnfpSbLhzl2HPrN4OaQ/viewform?usp=sf_link">
            <Text fontWeight={"bold"} color={"#FCD741"}>
              Formulir Pengajuan Kendala
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex
        zIndex={"10"}
        p={"2rem"}
        flexDir={"column"}
        position={"relative"}
        minH={"100vh"}
        alignItems={"center"}
        justify="center"
        color="white">
        <Text fontSize={"1.5rem"} fontWeight={"bold"}>
          Kategori Tiket Himalaya
        </Text>
        {data &&
          data?.map((e: any, index: number) => {
            return (
              <Flex
                key={index}
                mt={"2rem"}
                flexDir={"column"}
                w={{ base: "80vw", md: "50vw" }}
                maxWidth={{ base: "80vw", md: "30rem" }}
                padding={"2rem"}
                boxShadow={"0px 0px 50px 10px #FCD741"}>
                <Text>{e.nama}</Text>
                <HStack>
                  <Img
                    width="2rem"
                    height={"2rem"}
                    objectFit="contain"
                    src="/Assets/TiketHimalaya/icon-price.png"
                  />
                  <Text>
                    Harga Tiket:{" "}
                    <b>
                      Rp.{" "}
                      {e.id == "Couple"
                        ? (e?.harga * 2).toLocaleString()
                        : e?.harga?.toLocaleString()}
                    </b>
                  </Text>
                </HStack>
                <Box
                  mt="2rem"
                  cursor={"pointer"}
                  onClick={() =>
                    e.reserved !== e.quota && tutup
                      ? onOpen()
                      : router.push(
                          "/ticket-himalaya/check-out?ticket_type=" + e.id
                        )
                  }
                  w={"fit-content"}
                  alignSelf="end"
                  justifySelf="end"
                  textAlign={"center"}
                  padding={"0.5rem"}
                  fontSize="1rem"
                  fontWeight={"Bold"}
                  color={e.reserved === e.quota ? "white" : "black"}
                  bg={e.reserved === e.quota ? "#c20000" : "#FCD741"}>
                  {e.reserved === e.quota ? "Sold Out" : "Beli Tiket"}
                </Box>
              </Flex>
            );
          })}
      </Flex>
    </>
  );
};

export default TiketHimalaya;
