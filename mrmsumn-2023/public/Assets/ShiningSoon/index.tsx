import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Img, Flex, Text, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect, useRef, HtmlHTMLAttributes } from "react";

export default function Home(props: any) {
  const [scrollY, setScrollY] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [shiningShoonOp, setShiningShoonOp] = useState(0);
  const mainBg = useRef<HTMLDivElement>(null);
  const shiningShoon = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset;
      let scroll = window.pageYOffset / 5;
      setScrollY(scroll);
      // console.log(window.pageYOffset);

      let light = scroll <= 0 ? 1 : -scroll / 100 + 1.4;
      if (light <= 0.4) {
        setBrightness(0.4);
      } else if (light >= 1) {
        setBrightness(1);
      } else setBrightness(light);

      // console.log(light);

      let mainHeight = mainBg?.current?.offsetHeight;
      // console.log(mainHeight);
      // console.log("shining ", shiningShoon?.current?.offsetTop);
      if (
        shiningShoon != null &&
        shiningShoon.current != null &&
        window.pageYOffset > 900 &&
        window.pageYOffset < shiningShoon?.current?.offsetTop
      ) {
        setShiningShoonOp(
          window.pageYOffset / shiningShoon?.current?.offsetTop / 2
        );
      } else if (
        shiningShoon != null &&
        shiningShoon.current != null &&
        window.pageYOffset > shiningShoon?.current?.offsetTop
      ) {
        setShiningShoonOp(1);
      } else {
        setShiningShoonOp(0);
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Mr. & Ms. UMN 2023</title>
        <meta name="description" content="Website Mr. & Ms. UMN 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Assets/Logo/LogoMrMsUMN2023.png" />
      </Head>
      <Box
        opacity={
          mainBg?.current?.offsetHeight &&
          window.pageYOffset >= mainBg?.current?.offsetHeight - 550
            ? 1 - window.pageYOffset / (mainBg?.current?.offsetHeight + 100)
            : 1
        }
        padding={"0px"}
        ref={mainBg}
        mb="20vh"
        position={"relative"}
        h="200vh"
        w="100vw">
        <Box position={"relative"} minH="100vh">
          <Flex className={styles.bg_shining} maxH="100vh" overflow="hidden">
            <AspectRatio
              filter={"brightness(" + brightness + ")"}
              zIndex="-1"
              position={"relative"}
              minH="100vh"
              minW={{
                base: "calc(100vw + 1" + (scrollY + 10) + "px )",
                lg: "calc(100vw + " + (scrollY + 100) + "px)",
              }}
              maxW="200vw"
              ratio={16 / 9}>
              <Img
                loading="eager"
                minW={"100%"}
                minH={"100%"}
                src="/Assets/ShiningSoon/hasti.png"
                alt="shining-soon bg 1"
              />
            </AspectRatio>
          </Flex>
          <AspectRatio
            filter={"brightness(" + brightness + ")"}
            ratio={1}
            zIndex="1"
            top="0px"
            left={"0px"}
            transform={"translate(-" + scrollY + "px,0px)"}
            position={"fixed"}
            minW={{ base: "70vw", md: "20rem", lg: "30rem", xl: "50rem" }}
            minH={"100vh"}>
            <Image
              className={styles.leaf_left}
              fill
              alt="leaf"
              src="/Assets/ShiningSoon/leaf-left.png"
            />
          </AspectRatio>
          <AspectRatio
            filter={"brightness(" + brightness + ")"}
            ratio={12 / 16}
            zIndex="1"
            top="0px"
            right={"0px"}
            position={"fixed"}
            transform={"translate(" + scrollY + "px,0px)"}
            minW={{ base: "70vw", md: "20rem", lg: "30rem", xl: "50rem" }}
            minH={"100vh"}>
            <Image
              className={styles.leaf_right}
              fill
              alt="leaf"
              src="/Assets/ShiningSoon/leaf-right.png"
            />
          </AspectRatio>
          <Img
            zIndex={10}
            opacity={scrollY <= 50 ? 1 : -scrollY / 100 + 1}
            w={"4rem"}
            position={"fixed"}
            bottom={"40px"}
            left={"50%"}
            transform="translate(-50%)"
            src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
          />
        </Box>
        <Flex
          transform={
            "scale(" +
            (shiningShoon?.current?.offsetTop &&
            window.pageYOffset < shiningShoon?.current?.offsetTop
              ? window.pageYOffset / shiningShoon?.current?.offsetTop
              : 1) +
            ") " +
            (shiningShoonOp == 1 && "translate(-50%, -50%)")
          }
          top={shiningShoonOp == 1 ? "50%" : "0%"}
          left={shiningShoonOp == 1 ? "50%" : "0%"}
          justifyContent={"center"}
          alignItems={"center"}
          minH={"100vh"}
          ref={shiningShoon}
          position={shiningShoonOp == 1 ? "fixed" : "relative"}>
          <Flex
            minW={"fit-content"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}>
            <AspectRatio
              opacity={shiningShoonOp}
              zIndex="100"
              w="20rem"
              ratio={1}>
              <Image
                fill
                src="/Assets/ShiningSoon/logomrmsfit.png"
                alt="Logo Mr. & Ms. UMN"
              />
            </AspectRatio>
            <AspectRatio
              opacity={shiningShoonOp}
              zIndex="100"
              w={{ base: "80vw", md: "40vw", xl: "20vw" }}
              ratio={20 / 9}>
              <Image
                fill
                src="/Assets/ShiningSoon/shinningsoon.png"
                alt="text Shining Soon"
              />
            </AspectRatio>
          </Flex>
        </Flex>
      </Box>
      <Flex
        mx="5vw"
        transform={
          "scale(" +
          (mainBg?.current?.offsetHeight &&
          window.pageYOffset < mainBg?.current?.offsetHeight
            ? window.pageYOffset / mainBg?.current?.offsetHeight
            : 1) +
          ")"
        }
        opacity={
          mainBg?.current?.offsetHeight &&
          window.pageYOffset / mainBg?.current?.offsetHeight
        }
        ref={content}
        justifyContent={"center"}
        alignItems="center"
        padding={"0px"}
        position={"relative"}
        minH="100vh">
        <AspectRatio
          minW={{ base: "80vw", md: "80vw", lg: "80vw" }}
          minH={{ base: "80vh", md: "80vh", lg: "80vh" }}
          ratio={{ base: 9 / 16, md: 16 / 9 }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Wk-TvlzGrkQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </AspectRatio>
      </Flex>
    </div>
  );
}
