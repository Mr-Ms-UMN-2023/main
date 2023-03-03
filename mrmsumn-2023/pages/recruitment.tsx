import { useEffect, useState, useRef } from "react";
import { DivisionDetail, DivisionCard, Navbar, Loading } from "@/components";
import { Flex, Button, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { division } from "@/data/divisions";
import { useRouter } from "next/router";

const Divisi = () => {
  const [popup, setPopup] = useState<object>();
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState(0);
  const [divisions, setDivisionData] = useState(division);
  const [tutup, setTutup] = useState(false);
  const router = useRouter();
  const texts = useRef<HTMLDivElement[]>([]);

  const showDivisionDetail = (data: object) => {
    if (popup) {
      setPopup(undefined);
    } else {
      setPopup(data);
    }
  };

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

  useEffect(() => {
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
      targets.forEach((el: any) => {
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
    console.log("tanggal", tanggal);
    console.log("jam", jam);

    console.log(tanggal);
    if (tanggal > "202333") {
      console.log("tutup");

      setTutup(true);
    } else if (tanggal == "202333" && jam >= 20) {
      console.log("tutup");

      setTutup(true);
    }
  }, [tanggal, jam]);

  return (
    <>
      <Loading />
      <Navbar />
      {popup && <DivisionDetail data={popup} />}

      <Flex
        py={{ base: "10rem", md: "auto" }}
        id="oprec"
        className={`${styles.hidden} ${styles.oprec_list}`}
        minH="100vh"
        maxH={{ md: "100vh " }}
        w="100%"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mb="20px"
          fontSize={{ base: "2rem", md: "60px", lg: "5rem" }}
          filter={"drop-shadow(0 0 10px #c28824)"}
          textAlign="center">
          Open <br />
          Recruitment
        </Heading>
        <Flex
          height="max-content"
          width="85vw"
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
            mb="100px"
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
};

export default Divisi;
