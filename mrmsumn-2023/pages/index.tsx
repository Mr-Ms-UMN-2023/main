import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import {
  Loading,
  Navbar,
  DivisionCard,
  DivisionDetail,
  ShiningSoon,
  MrMsDetail,
  Dedikasi,
  ButtonDedikasi,
} from "@/components";

import { useState, useEffect, useRef } from "react";
import { division } from "@/data/divisions";

export default function Home(props: any) {
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState(0);
  const [tutup, setTutup] = useState(false);
  const [dedikasi, setDedikasi] = useState(false);

  const router = useRouter();

  const [divisions, setDivisionData] = useState(division);

  const [popup, setPopup] = useState<object>();

  // const [show, setShow] = useState("none");

  const texts = useRef<HTMLDivElement[]>([]);

  const handleClick = (e: any) => {
    if (
      e.target.classList.contains(styles.popup) ||
      e.target.classList.contains(styles.card)
    ) {
      document.querySelector("html")!.style.overflowY = "hidden";
      return;
    }

    document.querySelector("html")!.style.overflowY = "scroll";
    setPopup(undefined);
  };

  const showDivisionDetail = (data: object) => {
    if (popup) {
      setPopup(undefined);
    } else {
      setPopup(data);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener("click", handleClick);

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.show);
      } else {
        entry.target.classList.remove(styles.show);
      }
    });

    if (texts.current) {
      const targets = texts.current;
      targets.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      window.removeEventListener("click", handleClick);
      if (texts.current) {
        observer.disconnect();
      }
    };
  }, []);

  const time = () => {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();

    let date: string = String(year) + String(month) + String(day);
    // console.log(date);

    setTanggal(date);
    setJam(hour);
  };

  useEffect(() => {
    let nowTime = setInterval(() => time(), 1000);

    return () => clearInterval(nowTime);
  }, []);

  useEffect(() => {
    // console.log("tanggal", tanggal);
    // console.log("jam", jam);

    console.log(tanggal);
    if (tanggal > "2023219" && jam >= 0) {
      console.log("tutup");

      setTutup(true);
    }
  }, [tanggal, jam]);

  return (
    <>
      {dedikasi && <Dedikasi Dedikasi={setDedikasi} />}
      <ButtonDedikasi Dedikasi={setDedikasi} />
      <Loading />

      <ShiningSoon />

      <Navbar />

      <MrMsDetail />

      {/* DISINI BUAT POPUPNYA */}
      {popup && <DivisionDetail data={popup} />}

      <Flex
        id="oprec"
        className={styles.hidden}
        h={{ sm: "auto", md: "200vh" }}
        w="70%"
        maxW="1366px"
        mx="auto"
        my="auto"
        mb="100px"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        mt="100px"
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mb="20px"
          fontSize={{ base: "2rem", md: "60px", lg: "5rem" }}
          textAlign="center">
          Open <br />
          Recruitment
        </Heading>
        <Flex
          height="max-content"
          width="100%"
          position="relative"
          gap={"5px"}
          placeItems={"center"}
          alignItems="center"
          justifyContent={"center"}
          justifyItems={"center"}
          flexWrap="wrap">
          {divisions.map((data: any) => (
            <DivisionCard
              key={data.name}
              data={data}
              onClick={() => showDivisionDetail(data)}
            />
          ))}
        </Flex>
        {tutup ? (
          ""
        ) : (
          <Button
            className={styles.oprecButton}
            colorScheme={"none"}
            mt="30px"
            border={"1px solid white"}
            borderRadius={"2px"}
            color="white"
            h="auto"
            px="10px"
            py="15px"
            onClick={() => router.push("https://bit.ly/DaftarMahesa")}
            _hover={{
              transform: "scale(1.1)",
              transition: "all .5s ease-in-out",
            }}>
            <Heading fontSize={{ md: "1rem" }} mx={{ base: "0", md: "30px" }}>
              Foresee Your Destiny
            </Heading>
          </Button>
        )}
      </Flex>
    </>
  );
}
