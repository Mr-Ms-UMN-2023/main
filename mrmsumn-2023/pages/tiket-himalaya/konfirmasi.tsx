import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import Head from 'next/head';
import { useState, useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { type } from "os";
import { useForm } from "react-hook-form";

const HimalayaKonfirm = () => {

  const [snapToken, setSnapToken] = useState<any>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm({});
  

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
          value:
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,   
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
          value:
          /^\d{9,12}$/,
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
      },
    },
  ];

  useEffect(() => {
    console.log(process.env);
    if (snapToken && typeof window !== undefined){
      window.snap.pay(snapToken, {
        onSuccess : async (res : any) => {
          await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/ticket/payment/notification", 
            {
              method : "POST", 
              body : JSON.stringify(res)
            }
          );
          console.log("berhasil");
        }, 
        onPending : async (res : any) => {
          console.log("pending");
        },
        onError : async (err : any) => {
          console.log("Error");
        }
      });
    }
  }, [snapToken]);

  const onSubmit = async (e: any) => {

    console.log(e);
    if (e?.email != e?.konfirm_email){
      // popup validasi / lgsung inline
      return;
    }

    const formData = new FormData();
    formData.append("nama", e.nama);
    formData.append("email", e.email);
    formData.append("whatsapp", e.whatsapp);
    formData.append("jumlah", e.jumlah);

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/ticket/register", {
      method: "POST",
      body: formData
    });

    const parsedResponse = await response.json();     
    const token = parsedResponse.data?.token!;
    setSnapToken(token);
  };

  return (
    <>
          <Head>
            <script
              src={process.env.NEXT_PUBLIC_MIDTRANS_INTERFACE_URL}
              type="text/javascript"
              data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
              token={snapToken}
              async
            />
          </Head>                

          <Flex
      position={"relative"}
      minW="100vw"
      minH={"100vh"}
      justify={"center"}
      alignItems="center">
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
      <Box w="50%">
        <form onSubmit={handleSubmit(onSubmit)}>
          {formObject.map((e: any, index: number) => {
            return (
              <FormControl
                mb="1rem"
                isInvalid={errors[e.name] as any}
                key={"himalayaInput" + index}>
                <FormLabel color={"white"}>{e.label}</FormLabel>
                <Input
                  type={e.type}
                  bg="white"
                  {...register(e.name, e.validation)}></Input>
                {errors[e.name] && (
                  <FormErrorMessage fontWeight={"bold"} color={"red"}>
                    {errors[e.name].message?.toString() || ""}
                  </FormErrorMessage>
                )}
              </FormControl>
            );
          })}

          <Box fontSize={"1.2rem"} my="2rem" color={"white"}>
            <Text>
              Tanggal Acara: <b>11 November 2023</b>
            </Text>
            <Text>
              Jam: <b>16.00 WIB</b>
            </Text>
            <Text>
              Lokasi: <b>Q BIG Convention</b>
            </Text>
            <Text>
              Harga Total Tiket: <b>{getValues("tiketAmount") * 20000 || ""}</b>
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
