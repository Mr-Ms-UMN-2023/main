import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TIKET } from ".";
import { useRouter } from "next/navigation";

const HARGA: any = {
  Earlybird: 85000,
  Presale: 100000,
  Sale: 115000,
};

declare global {
  interface Window {
    // ⚠️ notice that "Window" is capitalized here
    snap: any;
  }
}

const HimalayaKonfirm = () => {
  const [snapToken, setSnapToken] = useState<any>(null);
  const [errSnapToken, setErrSnapToken] = useState<any>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm({});
  const [load, setLoad] = useState<any>();
  const [typeID, setTypeID] = useState<any>("Earlybird");

  const router = useRouter();

  useEffect(() => {
    let today = new Date();
    console.log("today", today.toString());
    if (today.toString() >= "Fri Nov 24 2023 18:00:00 GMT+0700") {
      console.log("lewat mase");
      router.push("/ticket-himalaya");
    }
    // let now = Date(Date.now());
    // console.log("Now", now);
    const pattern = /ticket_type=([a-zA-Z0-9-]+)/;
    const match = window.location.href.toString().match(pattern);
    match[1] == "Couple" && setValue("jumlah", 2);
    console.log(match[1]);
    setTypeID(match[1]);
  }, []);

  const formObject = [
    {
      name: "nama",
      label: "Nama",
      type: "",
      validation: { required: { value: true, message: "Nama wajib diisi" } },
    },
    {
      name: "email",
      label: "Email",
      type: "",
      validation: {
        required: { value: true, message: "email wajib diisi" },
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Email tidak valid",
        },
      },
    },
    {
      name: "konfirm_email",
      label: "Konfirmasi Email",
      type: "",
      validation: {
        required: { value: true, message: "Nama wajib diisi" },
        validate: (value: any) =>
          value === watch("email") || "Email harus sama",
      },
    },
    {
      name: "whatsapp",
      label: "No. Telp",
      type: "",
      validation: {
        required: { value: true, message: "Nomor Telephone wajib diisi" },
        pattern: {
          value: /^\d{9,12}$/,
          message: "Nomor telephone harus berjumlah 9 - 12 angka.",
        },
      },
    },
    {
      name: "jumlah",
      label: "Jumlah Tiket",
      type: "number",
      validation: {
        required: { value: true, message: "Jumlah tiket wajib diisi" },
        valueAsNumber: { value: true, message: "Masukkan angka" },
        min: { value: 1, message: "Minimal membeli 1 tiket" },
        max: {
          value: 4,
          message:
            "Jumlah pembelian maksimal untuk satu sesi pembayaran adalah 4 tiket",
        },
      },
      fixValue: typeID == "Couple" && 2,
    },
  ];

  useEffect(() => {
    console.log(process.env);
    if (snapToken && typeof window !== undefined) {
      window.snap.pay(snapToken, {
        onSuccess: async (res: any) => {
          await fetch(
            process.env.NEXT_PUBLIC_API_URL +
              "/api/ticket/payment/notification",
            {
              method: "POST",
              body: JSON.stringify(res),
            }
          );
          console.log("berhasil");
        },
        onPending: async (res: any) => {
          console.log("pending");
        },
        onError: async (err: any) => {
          console.log("Error");
        },
      });
    }
  }, [snapToken]);

  const onSubmit = async (e: any) => {
    setLoad(true);
    console.log(e);
    if (e?.email != e?.konfirm_email) {
      // popup validasi / lgsung inline
      return;
    }

    const formData = new FormData();

    formData.append("nama", e.nama);
    formData.append("email", e.email);
    formData.append("whatsapp", e.whatsapp);
    formData.append("jumlah", e.jumlah);
    formData.append("item_id", typeID);

    const response = await fetch("https://mrms2023.my.id/api/ticket/register", {
      method: "POST",
      body: formData,
    });

    const parsedResponse = await response.json();
    const token = parsedResponse.data?.token!;
    setSnapToken(token);
    setLoad(false);

    if (
      parsedResponse.code != 200 &&
      parsedResponse.message == "PRODUCT_UNAVAILABLE"
    ) {
      onOpen();
      setErrSnapToken(
        parsedResponse(
          "Kuota pembelian Earlybird telah habis, anda dapat kembali lagi sesaat jika adanya pembatalan pembelian"
        )
      );
    } else if (
      parsedResponse.code != 200 &&
      parsedResponse.message == "LIMITED_PURCHASE"
    ) {
      onOpen();
      setErrSnapToken(
        parsedResponse("Maximal 4 tiket yang dapat dibeli dalam 1 transaksi")
      );
    }
  };

  useEffect(() => {
    const midtransUrl = process.env.NEXT_PUBLIC_MIDTRANS_INTERFACE_URL;

    let scriptTag = document.createElement("script");

    midtransUrl && (scriptTag.src = midtransUrl);

    const midtransCLientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;
    midtransCLientKey &&
      scriptTag.setAttribute("data-client-key", midtransCLientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return (
    <>
      {/* <Head>
        {snapToken && (
          <script
            src={process.env.NEXT_PUBLIC_MIDTRANS_INTERFACE_URL}
            type="text/javascript"
            data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
            token={snapToken}
            async
          />
        )}
      </Head> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error Pembelian</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Text>{errSnapToken && errSnapToken}</Text>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        position={"relative"}
        minW="100vw"
        minH={"100vh"}
        justify={"center"}
        alignItems="center">
        {load && (
          <Box
            bg={"rgba(0,0,0,0.5)"}
            h={"100vh"}
            w="100vw"
            zIndex={"1"}
            position={"fixed"}
            top="50%"
            left={"50%"}
            transform={"translate(-50%, -50%)"}>
            <Img
              zIndex={"10"}
              position={"fixed"}
              top="50%"
              left={"50%"}
              transform={"translate(-50%, -50%)"}
              src="/Assets/TiketHimalaya/load.svg"
            />
          </Box>
        )}

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
          zIndex={"-1"}
          top={"50%"}
          left="50%"
          transform={"translate(-50%, -50%)"}
          position={"fixed"}
          minWidth={{ base: "200vw", md: "100vw" }}
          src="/Assets/TiketHimalaya/bg.png"
        />
        <Box
          p={"2rem 2rem 10rem 2rem"}
          zIndex={"0"}
          w={{ base: "80%", md: "50%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {formObject.map((e: any, index: number) => {
              return (
                <FormControl
                  mb="1rem"
                  isInvalid={errors[e.name] as any}
                  key={"himalayaInput" + index}>
                  <FormLabel color={"white"}>{e.label}</FormLabel>
                  <Input
                    disabled={e.fixValue ? true : false}
                    type={e.type}
                    bg="white"
                    {...register(e.name, !e.fixValue && e.validation)}></Input>
                  {errors[e.name] && (
                    <FormErrorMessage fontWeight={"bold"} color={"red"}>
                      {errors[e.name]?.message?.toString() || ""}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );
            })}

            <Box fontSize={"1rem"} my="2rem" color={"white"}>
              <Text>
                Tanggal Acara: <b>{TIKET.tanggal}</b>
              </Text>
              <Text>
                Open Gate: <b>{TIKET.jam} WIB</b>
              </Text>
              <Text>
                Lokasi: <b>{TIKET.tempat}</b>
              </Text>
              <Text>
                Harga Total Tiket:{" "}
                <b>
                  Rp. {typeID == "Couple" && (170000).toLocaleString()}
                  {typeID !== "Couple" && watch("jumlah")
                    ? (
                        watch("jumlah") * Number(HARGA[`${typeID}`])
                      ).toLocaleString()
                    : "-"}
                </b>
              </Text>
            </Box>

            <Button type="submit">Bayar Tiket</Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default HimalayaKonfirm;
