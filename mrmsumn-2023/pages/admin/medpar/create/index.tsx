import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import {
  Text,
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
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const [isChecked, setIsChecked] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<any>(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = async (data: Inputs) => {
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

  // const handleImageChange = (e: any) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const imageURL = URL.createObjectURL(file);
  //     setSelectedImage(file);
  //     setPreviewImage(imageURL);
  //     //       setSelectedImage(file);

  //     //     const reader = new FileReader();
  //     //    reader.onload = () => {
  //     //	const data = reader?.result ? reader?.result : null
  //     //    setPreviewImage(data);
  //     // };
  //     //reader.readAsDataURL(file);
  //   } else {
  //     setSelectedImage(null);
  //     setPreviewImage(null);
  //   }
  // };

  type Inputs = {
    type: number;
    src: FileList | null;
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
          router.push("/admin/medpar");
        }}>
        Kembali
      </Button>
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="lg" color="white">
          Create New Media Partner
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="start">
            <FormControl>
              <Input type="text" {...register("type")} value={2} hidden />
              <Input
                bg="white"
                type="text"
                {...register("nama")}
                placeholder="Nama Media Partner"
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
                <Box maxW="300px">
                  <img
                    src={watch("src")}
                    alt="Preview"
                    style={{ maxWidth: "100%" }}
                  />
                </Box>
              )}
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
