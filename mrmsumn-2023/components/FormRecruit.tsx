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
  RegistError,
} from "./FromRecrutmentElement";
import styles from "@/styles/Home.module.css";

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
  const [feedback, setFeedback] = useState<boolean>(false);
  const [failFeedback, setFailFeedback] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ criteriaMode: "all" });

  const handleClick = (e: any) => {
    if (
      e.target.classList.contains(styles.criteria) &&
      !e.target.classList.contains(styles.catcrit_button)
    ) {
      setPop(null);
      onPlay();
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

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
        IPS: fetchData.data.sub_gpa,
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
        "https://script.google.com/macros/s/AKfycbyYYhZDqvQ40o4-qiGjltWzu72mMuGIQGEEQeWAK2uwkf772WylO6G64F1JBEP9xRlG/exec",
        {
          method: "POST",
          body: formData2,
        }
      );

      setLoading(false);
      setFeedback(true);
    } else {
      setLoading(false);
      setFailFeedback(true);
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
      {feedback && <ConfirmRegis />}
      {failFeedback && <RegistError />}

      <Heading
        fontSize={{ base: "11vw", md: "5rem" }}
        my="5rem"
        textAlign={"center"}
        color="#f2d544"
        textShadow={"0px 0px 10px #ff5b00, 0px 0px 10px #ff5b00"}>
        Candidate
        <br /> Registration
      </Heading>

      {loading && <LoadingView />}
      {pop != null && <PopUp data={pop} setPop={setPop} />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          position: "relative",
          borderRadius: "15px",
          padding: "3vw 0",
        }}>
        <Img
          width={"45%"}
          position={"absolute"}
          left="0px"
          h="0.2rem"
          src="/Assets/Frame_PopUp/ornamen_garis_atas.png"
        />
        <Img
          transform={"translate(-50%)"}
          left={"50%"}
          top={{ base: "-7vw", md: "-2vw" }}
          position={"absolute"}
          width={{ base: "50%", md: "30%" }}
          src="/Assets/Frame_PopUp/ornamen_atas.png"
        />
        <Img
          position={"absolute"}
          right="0px"
          width={"45%"}
          h="0.2rem"
          src="/Assets/Frame_PopUp/ornamen_garis_atas.png"
        />

        <Img
          left={"0px"}
          top={"3vw"}
          position={"absolute"}
          h={{ base: "98%", md: "97%", lg: "95%" }}
          w="4px"
          src="/Assets/Frame_PopUp/ornamen_garis.png"
        />
        <Img
          right={"0px"}
          top={"3vw"}
          position={"absolute"}
          h={{ base: "98%", md: "97%", lg: "95%" }}
          w="4px"
          src="/Assets/Frame_PopUp/ornamen_garis.png"
        />
        <Img
          w={{ base: "40%", md: "20%" }}
          left={"-1vw"}
          bottom="0px"
          position={"absolute"}
          transform="scaleX(-1)"
          src="/Assets/Frame_PopUp/bunga_bawah.png"
        />
        <Img
          w={{ base: "40%", md: "20%" }}
          right={"-1vw"}
          bottom="0px"
          position={"absolute"}
          src="/Assets/Frame_PopUp/bunga_bawah.png"
        />
        <Img
          h="4px"
          w="80%"
          left="50%"
          transform={"translate(-50%)"}
          bottom={{ base: "3vw", md: "1vw" }}
          position={"absolute"}
          src="/Assets/Frame_PopUp/ornamen_garis_bawah.png"
        />

        <Flex
          mx="5vw"
          mt={{ base: "10vw", md: "5vw" }}
          mb="1rem"
          gap="1rem"
          justifyContent={"end"}>
          <Button
            className={styles.catcrit_button}
            onClick={() => setPop(catatan)}
            fontWeight={"bold"}
            color="black"
            bg="#c28824"
            fontFamily="Montserrat">
            Catatan
          </Button>
          <Button
            className={styles.catcrit_button}
            onClick={() => setPop(kriteria)}
            fontWeight={"bold"}
            color="black"
            bg="#c28824"
            fontFamily="Montserrat">
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
              Saya telah membaca <b>catatan</b> dan <b>kriteria</b> calon Mr. &
              Ms. UMN dengan baik dan benar
            </Text>
          </Checkbox>
        </Flex>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            placeholder="Daftar"
            value={"Daftar"}
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
