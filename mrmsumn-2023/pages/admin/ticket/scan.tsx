import { useRouter } from "next/router";
import {
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { getCookies } from "cookies-next";
import { useState, useEffect, useRef } from "react";
// import { useDisclosure } from "@chakra-ui/react";

const ScanModal = ({
  isOpen,
  onOpen,
  onClose,
  cameraError,
  modalData,
}: any) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {cameraError ? "Camera Error" : modalData && modalData?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cameraError ? cameraError : modalData?.message}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function Scan() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [cameraError, setCameraError] = useState<any>(null);

  const [modalData, setModalData] = useState<any>(null);
  const [token, setToken] = useState<any>(null);

  // useEffect(() => {
  //     // if (cameraError){
  //     //     onOpen();
  //     // }
  // }, []);

  const validateQR = async () => {
    // if (modalData) return;

    try {
      const response = await fetch(
        // "https://0fec-111-67-81-50.ngrok-free.app/api/ticket/attendance",
        "https://mrms2023.my.id/api/ticket/attendance",
        {
          headers: {
            Authorization: `Bearer ` + getCookies().token,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ token }),
        }
      );

      const parsedResponse = await response.json();
      if (parsedResponse.code == 200 && token.includes("VIP")) {
        setModalData({
          title: "VIP",
          message: parsedResponse.message,
        });
      } else if (parsedResponse.code == 200) {
        setModalData({
          title: "BERHASIL!",
          message: parsedResponse.message,
        });
      } else if (parsedResponse.code == 404 || parsedResponse.code == 422) {
        setModalData({
          title: "GAGAL",
          message: parsedResponse.message,
        });
      } else {
        setModalData({
          title: "SERVER ERROR",
          message: parsedResponse.message,
        });
      }

      // setModalData(null);
      setToken(null);
    } catch (err: any) {
      console.error(err);
      setModalData({
        title: "SERVER ERROR",
        message: err.message,
      });
    }
  };

  useEffect(() => {
    if (cameraError || modalData) {
      onOpen();
    }
  }, [cameraError, modalData]);

  useEffect(() => {
    console.log(token);
    if (!token) return;

    validateQR();
  }, [token]);

  return (
    <>
      <Box
        w="100%"
        h="100vh"
        p="2rem"
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}>
        <Text
          textAlign={"center"}
          mb="3rem"
          fontSize={"1.8rem"}
          fontWeight={"bold"}
          color="#c28824">
          Scan Tiket Himalaya
        </Text>

        <Box
          w="100%"
          maxW="400px"
          h="400px"
          p="1rem"
          bgColor={"#c28824"}
          boxShadow={"0px 0px 8px 2px gold"}>
          <QrScanner
            scanDelay={2000}
            containerStyle={{
              height: "100%",
              width: "100%",
              border: "1px solid black",
            }}
            onDecode={(result: any) => setToken(result)}
            onError={(error: any) => {
              console.log(error);
              if (error.name === "OverconstrainedError") {
                setCameraError(
                  "Tidak dapat membuka Camera, coba ganti Arah Kamera di settings dan pastikan anda telah memberi akses Kamera di browser."
                );
                return;
              }

              if (error.name === "TypeError" || error instanceof DOMException) {
                setCameraError(
                  "Tidak dapat membuka Camera, pastikan anda telah memberi akses Kamera di browser."
                );
                return;
              }

              setCameraError("Tidak dapat membaca QR.");
            }}
          />
        </Box>

        <Button
          mt="1.5rem"
          bgColor="blue"
          color="gold"
          onClick={() => {
            router.push("/admin");
          }}>
          Kembali
        </Button>
      </Box>

      <ScanModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        cameraError={cameraError}
        modalData={modalData}
      />
    </>
  );
}
