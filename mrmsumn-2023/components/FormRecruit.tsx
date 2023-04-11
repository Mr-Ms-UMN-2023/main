import {
  Flex,
  Input,
  Img,
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { catatan, kriteria } from "../data/catatanDanKriteria";
import {
  LoadingView,
  ConfirmRegis,
  ListItems,
  PopUp,
} from "./FromRecrutmentElement";

// import * as yup from "yup";

type Inputs = {
  nama: string;
  notelp: number;
  tempatlahir: string;
  tanggallahir: string;
  foto: string;
  porto: string;
};

const onPause = () => {
  document.querySelector("html")!.style.overflowY = "hidden";
};

const onPlay = () => {
  document.querySelector("html")!.style.overflowY = "scroll";
};

const FormRecruit = () => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [checkCatatan, setCatatan] = useState<boolean>(false);
  const [checkCatatan2, setCatatan2] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [pop, setPop] = useState<any>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ criteriaMode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    console.log(data);
    setLoading(true);

    const entries = Object.entries(data);

    const formData = new FormData();

    entries.map((item: any) => {
      if (typeof item[1] != "object") {
        formData.append(item[0], item[1]);
      } else {
        formData.append(item[0], item[1][0]);
      }
    });

    const response = await fetch("/api/mahesa-registration", {
      method: "POST",
      body: formData,
    });

    const fetchData = await response.json();

    if (fetchData.code == 200) {
      let resData = {
        NIM: "000000" + fetchData.data.nim,
        "Nama Lengkap": fetchData.data.name,
        "Email Student": fetchData.data.email_student,
        "Tempat Lahir": fetchData.data.birth_place,
        "Tanggal Lahir": fetchData.data.birth_date,
        "Jenis Kelamin":
          fetchData.data.gender == "m" ? "Laki - Laki" : "Perempuan",
        Alamat: fetchData.data.address,
        "Nomor Telepon": fetchData.data.phone_number,
        "ID Line": fetchData.data.line_id,
        Instagram: fetchData.data.instagram_username,
        "Tik Tok": fetchData.data.tiktok_username,
        Jurusan: fetchData.data.major,
        Angkatan: fetchData.data.year,
        IPK: fetchData.data.gpa,
        "Tinggi Badan": fetchData.data.height,
        "Berat Badan": fetchData.data.weight,
        "Ukuran Baju": fetchData.data.clothes_size,
        "Ukuran Sepatu": fetchData.data.shoe_size,
        "Ukuran Celana": fetchData.data.pants_size,
        "Tentang Saya ": fetchData.data.about_me,
        "Motivasi mencalonkan diri sebagai Mr. & Ms. UMN 2023":
          fetchData.data.motivation,
        "Personality Type": fetchData.data.personality,
        "Talenta yang dimiliki": fetchData.data.talents,
        "Prestasi yang dimiliki": fetchData.data.achievements,
        Foto: fetchData.data.picture,
        "Screenshot Personality Test": fetchData.data.personality_screenshot,
        "Screenshot Grades": fetchData.data.grades_screenshot,
        "Fotokopi Kartu Mahasiswa": fetchData.data.student_card_screenshot,
      };

      const entries2 = Object.entries(resData);
      const formData2 = new FormData();
      entries2.map((item: any) => {
        formData2.append(item[0], item[1]);
      });

      await fetch(
        //masih yg beta
        "https://script.google.com/macros/s/AKfycbyGm-RXxs32V_J_7QXEoLPEkknh0CjnzaBkXCacyiDSxr3fxbp3zNas9pmFAobQZJok/exec",
        {
          method: "POST",
          body: formData2,
        }
      );

      setLoading(false);
      <ConfirmRegis />;
    } else {
      console.log(fetchData);
      return;
    }
  };

  useEffect(() => {
    loading ? onPause() : onPlay();
  }, [loading]);

  useEffect(() => {
    checkCatatan2 ? setDisable(false) : setDisable(true);
  }, [checkCatatan2]);

  function buttonHover(e: any) {
    e.target.style.boxShadow = "inset 0 0 0 2em #c28824";
    e.target.style.color = "black";
  }

  function buttonOut(e: any) {
    e.target.style.boxShadow = "none";
    e.target.style.color = "#c28824";
  }

  return (
    <Flex
      id="formRecruit"
      w={{ base: "90vw", md: "70vw" }}
      maxW="1366px"
      mx="auto"
      my="5vw"
      flexDirection={"column"}
      justifyContent="center">
      <Heading
        fontSize={{ base: "1.5rem", md: "2.5rem" }}
        my="5rem"
        textAlign={"center"}
        color="#c28824">
        Candidate Registration
      </Heading>

      {loading && <LoadingView />}
      {pop != null && <PopUp data={pop} setPop={setPop} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "2px solid #c28824",
          borderRadius: "15px",
          padding: "3vw 0",
        }}>
        <Flex mx="5vw" my="1rem" gap="1rem" justifyContent={"end"}>
          <Button
            onClick={() => setPop(catatan)}
            fontWeight={"bold"}
            color="black"
            bg="#c28824">
            Catatan
          </Button>
          <Button
            onClick={() => setPop(kriteria)}
            fontWeight={"bold"}
            color="black"
            bg="#c28824">
            Kriteria
          </Button>
        </Flex>
        <ListItems register={register} errors={errors} />

        <Flex gap={"1rem"} mx="5vw" mt="2rem" justify={"start"}>
          <Checkbox
            iconSize={"4rem"}
            color={"#c28824"}
            width="100%"
            type="checkbox"
            id="demoCheckbox"
            name="checkbox"
            onChange={() => setCatatan2((prev) => !prev)}>
            <Text color="#c28824">
            Saya telah membaca <b>catatan</b> dan <b>kriteria</b> calon Mr. & Ms. UMN dengan baik dan benar
            </Text>
          </Checkbox>
        </Flex>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            placeholder='Daftar'
            value={'Daftar'}
            disabled={disable}
            my={{ base: "2rem" }}
            type="submit"
            mx={"5vw"}
            height={{ base: "4rem" }}
            onMouseOver={buttonHover}
            onMouseOut={buttonOut}
            style={{
              fontSize: "16px",
              fontFamily: "TrajanPro-Bold",
              color: "#c28824",
              backgroundColor: "black",
              border: "2px solid #c28824",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        </div>
      </form>
    </Flex>
  );
};

export { FormRecruit as FormRecruit };
