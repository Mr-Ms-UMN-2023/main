import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import {
  Box,
  Img,
  Flex,
  Grid,
  Text,
  AspectRatio,
  Heading,
  Button,
} from "@chakra-ui/react";
import {
  Loading,
  Navbar,
  DivisionCard,
  DivisionDetail,
  ShiningSoon,
  MrMsDetail,
} from "@/components";
import Image from "next/image";
import { useState, useEffect, useRef, createElement } from "react";
import { division } from "@/data/divisions";

export default function Home(props: any) {
  const router = useRouter();

  const [scrollY, setScrollY] = useState(0);

  const [loading, setLoading] = useState(false);
  const [loadingOpacity, setLoadingOpacity] = useState(1);
  const [preloadImage, setPreloadImage] = useState(true);

  const [popup, setPopup] = useState<object>();
  const [popupData, setPopupData] = useState({});
  const [show, setShow] = useState("none");

  const [divisions, setDivisions] = useState(division);

  const texts = useRef<HTMLDivElement[]>([]);

  const popupRef = useRef<any>(null);

  const handleClick = (e: any) => {
    if (
      e.target.classList.contains(styles.popup) ||
      e.target.classList.contains(styles.card)
    )
      return;
    setPopup(undefined);
  };

  const showDivisionDetail = (data: object) => {
    if (popup) {
      setPopup(undefined);
    } else {
      setPopup(data);
    }
  };

  const endVideo = () => {
    setLoadingOpacity(0);

    setTimeout(() => {
      setLoading(false);
      setShow("flex");
    }, 1100);
  };

  useEffect(() => {
    setLoading(true);
    setPreloadImage(false);

    window.scrollTo(0, 0);

    window.addEventListener("click", handleClick);

    // Set loading opacity timer

    // Set timer for loading

    // Fade in out animation

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

  return (
    <div>
      <Head>
        <title>Mr. & Ms. UMN 2023</title>
        <meta name="description" content="Website Mr. & Ms. UMN 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Assets/Logo/LogoMrMsUMN2023.png" />
      </Head>

      {loading ? (
        <Loading loadingOpacity={loadingOpacity} onEnded={endVideo} />
      ) : (
        <>
          {preloadImage && (
            <Flex
              h="100vh"
              w="100vw"
              position={"absolute"}
              bg="black"
              zIndex={20}></Flex>
          )}
          <Navbar />
          <ShiningSoon />
        </>
      )}

      <MrMsDetail onShow={show} />

      {/* DISINI BUAT POPUPNYA */}
      {popup && <DivisionDetail data={popup} />}

      <Flex
        id="oprec"
        className={styles.hidden}
        display={show}
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
          fontSize={{ base: "1rem", md: "25px", lg: "3rem" }}
          textAlign="center">
          Open <br />
          Recruitment
        </Heading>
        <Flex
          height="auto"
          width="100%"
          position="relative"
          gap={"5px"}
          placeItems={"center"}
          alignItems="center"
          justifyContent={"center"}
          justifyItems={"center"}
          flexWrap="wrap"
          // templateRows='1fr 1fr'
          // templateColumns={{
          //     base : 'repeat(1, 1fr)',
          //     sm : 'repeat(2, 1fr)',
          //     md : 'repeat(3, 1fr)',
          //     lg : 'repeat(4, 1fr)',
          //     xl : 'repeat(5, 1fr)'
          // }}
        >
          {divisions.map((data) => (
            <DivisionCard
              key={data.name}
              data={data}
              onClick={() => showDivisionDetail(data)}
            />
          ))}
        </Flex>

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
      </Flex>
    </div>
  );
}
