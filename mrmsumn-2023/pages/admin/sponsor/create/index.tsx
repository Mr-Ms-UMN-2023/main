import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import {
  Text,
  Img,
  Box,
  Container,
  Heading,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { parse } from "path";

export default function Create() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    const req = {
      type: Number(data.type),
      img: data.src,
      nama: data.nama,
      url: data.url,
      bg: data.bg,
    };
    const response = await fetch(
      "http://localhost:8000/api/sponsor_medpar/put",
      {
        body: JSON.stringify(req),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const parsedResponse = await response.json();
    console.log(parsedResponse);
    if (parsedResponse?.code == 201) {
      router.push("/admin/sponsor");
    }
  };

  type Inputs = {
    type: string;
    src: string;
    nama: string;
    url: string;
    bg: string;
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ criteriaMode: "all" });

  return (
    <Container maxW="container.lg" mt={8}>
      <Button
        onClick={() => {
          router.push("/admin/sponsor");
        }}>
        Kembali
      </Button>
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="lg" color="white">
          Create New Sponsor
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="start">
            <FormControl>
              <Input type="text" {...register("type")} value={1} hidden />
              <Input
                bg="white"
                type="text"
                {...register("nama")}
                placeholder="Nama Sponsor"
                mb="1rem"
                required
              />
              <Input
                bg="white"
                type="text"
                {...register("url")}
                placeholder="Tautan"
                mb="1rem"
              />
              <Input
                bg="white"
                type="text"
                {...register("src")}
                placeholder="Link Image"
                mb="1rem"
              />

              {watch("src") && (
                <Box bg={isChecked ? "white" : ""} maxW="300px">
                  <Img
                    src={watch("src")}
                    alt="Preview"
                    style={{ maxWidth: "100%" }}
                  />
                </Box>
              )}
              {/* <Button as="label" htmlFor="fileInput" colorScheme="blue">
                Tambahkan Foto
              </Button> */}
              {/* <input
                id="fileInput"
                type="file"
                accept="image/*"
                {...register("src")}
                style={{ display: "none" }}
              /> */}
              <Flex>
                <FormLabel color="grey">Tambahkan latar putih</FormLabel>
                <Checkbox
                  isChecked={isChecked}
                  {...register("bg")}
                  onChange={handleCheckboxChange}
                />
              </Flex>
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Simpan
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
}
