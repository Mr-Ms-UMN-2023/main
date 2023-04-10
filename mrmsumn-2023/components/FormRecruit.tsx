import {
  Flex,
  Input,
  Img,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { LoadingView, ConfirmRegis, ListItems } from "./FromRecrutmentElement";

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
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ criteriaMode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    console.log(data);
    setLoading(true);

    // const dataSend = {
    //   name: data.name,
    //   email_student: data.email_student,
    //   nim: "000000" + data.nim,
    //   birth_date: data.birth_date,
    //   birth_place: data.birth_place,
    //   gender: data.gender,
    //   address: data.address,
    //   phone_number: data.phone_number,
    //   line_id: data.line_id,
    //   instagram_username: data.instagram_username,
    //   tiktok_username: data.tiktok_username,
    //   major: data.major,
    //   year: data.year,
    //   gpa: data.gpa,
    //   height: data.height,
    //   weight: data.weight,
    //   clothes_size: data.clothes_size,
    //   shoe_size: data.shoe_size,
    //   pants_size: data.pants_size,
    //   about_me: data.about_me,
    //   motivation: data.motivation,
    //   personality: data.personality,
    //   talents: data.talents,
    //   achievements: data.achievements,
    //   picture: data.picture,
    //   personality_screenshot: data.personality_screenshot,
    //   grades_screenshot: data.grades_screenshot,
    //   student_card_screenshot: data.student_card_screenshot,
    // };

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
      console.log("gagal");
      return;
    }
  };

  useEffect(() => {
    loading ? onPause() : onPlay();
  }, [loading]);

  useEffect(() => {
    checkCatatan && checkCatatan2 ? setDisable(false) : setDisable(true);
  }, [checkCatatan, checkCatatan2]);

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
      {loading && <LoadingView />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "2px solid #c28824",
          borderRadius: "15px",
          padding: "3vw 0",
        }}>
        <ListItems register={register} errors={errors} />
        <Flex mx="5vw" mt="2rem" justify={"start"}>
          <input
            style={{ width: "5rem" }}
            type="checkbox"
            id="demoCheckbox"
            name="checkbox"
            onClick={() => setCatatan((prev) => !prev)}></input>
          <Text color="#c28824">
            Pastikan anda telah membaca catatan yang diberikan dengan benar
          </Text>
        </Flex>

        <Flex mx="5vw" mt="2rem" justify={"start"}>
          <input
            style={{ width: "5rem" }}
            type="checkbox"
            id="demoCheckbox"
            name="checkbox"
            onClick={() => setCatatan2((prev) => !prev)}></input>
          <Text color="#c28824">
            Pastikan anda telah membaca Kriteria yang diberikan dengan benar
          </Text>
        </Flex>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
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
