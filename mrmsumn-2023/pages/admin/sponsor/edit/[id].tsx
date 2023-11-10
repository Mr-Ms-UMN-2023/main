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
  color,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

export default function Edit({ params }: { params: any }) {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<any>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<any>(null);
  const [data, setData] = useState<any>({});

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:8000/api/sponsor_medpar/get/${params.id}`
    );

    const parsedResponse = await response.json();
    console.log(parsedResponse);
    if (parsedResponse.code == 201) {
      const list = parsedResponse.data;
      setPreviewImage(list.src);
      setIsChecked(list.bg);
      setData(list);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data: Inputs) => {
    const req = {
      id: data.id,
      type: Number(data.type),
      img: data.src,
      nama: data.nama,
      url: data.url,
      bg: data.bg,
    };

    console.log(req);

    const response = await fetch(
      "http://localhost:8000/api/sponsor_medpar/edit",
      {
        body: JSON.stringify(req),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const parsedResponse = await response.json();
    if (parsedResponse?.status == 200) {
      router.push("/admin/sponsor");
    }
  };

  type Inputs = {
    id: string;
    type: string;
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
          router.push("/admin/sponsor");
        }}>
        Kembali
      </Button>
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="lg" color="white">
          Edit Sponsor
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="start">
            <FormControl>
              <Input
                type="text"
                {...register("type", { value: data?.type })}
                hidden
              />
              <Input
                type="text"
                {...register("id", { value: data?.Sponsor_MedparID })}
                hidden
              />
              <Input
                bg={"white"}
                type="text"
                {...register("nama")}
                placeholder="Nama Sponsor"
                mb="1rem"
                defaultValue={data?.nama}
                required
              />
              <Input
                bg={"white"}
                type="text"
                {...register("url")}
                placeholder="Tautan"
                mb="1rem"
                defaultValue={data?.url}
              />
              <Input
                bg={"white"}
                type="text"
                {...register("src", { value: data?.src })}
                placeholder="Link Image"
                mb="1rem"
                defaultValue={data?.src}
              />
              {watch("src") && (
                <Box bg={watch("bg") ? "white" : ""} maxW="300px">
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

export async function getServerSideProps(context: any) {
  const { req, res, params } = context;
  const APP_URL = process.env.APP_URL;

  try {
    return {
      props: {
        params,
      },
    };
  } catch (err) {
    return {
      props: {
        fail: true,
        params,
        err,
      },
    };
  }
}
