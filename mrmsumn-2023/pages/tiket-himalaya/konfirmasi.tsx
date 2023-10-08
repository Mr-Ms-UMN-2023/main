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
import { ErrorMessage } from "@hookform/error-message";
import { type } from "os";
import { useForm } from "react-hook-form";

const HimalayaKonfirm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm({});

  const formObject = [
    {
      name: "name",
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
            /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
          message: "Email tidak valid",
        },
      },
    },
    {
      name: "konfirm-email",
      label: "Konfirmasi Email",
      type: "",
      validation: {
        required: { value: true, message: "Nama wajib diisi" },
        validate: (value: any) =>
          value === watch("email") || "Email harus sama",
      },
    },
    {
      name: "noTelp",
      label: "No. Telp",
      type: "number",
      validation: {
        required: { value: true, message: "Nomor Telephone wajib diisi" },
        valueAsNumber: { value: true, message: "Masukkan angka" },
        min: { value: 9, message: "Minimal 9-12 angka" },
      },
    },
    {
      name: "tiketAmount",
      label: "Jumlah Tiket",
      type: "number",
      validation: {
        required: { value: true, message: "Jumlah tiket wajib diisi" },
        valueAsNumber: { value: true, message: "Masukkan angka" },
        min: { value: 1, message: "Minimal membeli 1 tiket" },
      },
    },
  ];

  const onSubmit = (e: any) => {
    console.log("value", e.value);
  };

  return (
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
  );
};

export default HimalayaKonfirm;
