import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Img, Flex, Text, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect, useRef, HtmlHTMLAttributes } from "react";

export default function Home(props: any) {
  const [scrollY, setScrollY] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [scrollY2, setScrollY2] = useState(0);
  const [shiningShoonOp, setShiningShoonOp] = useState(0);
  const mainBg = useRef<HTMLDivElement>(null);

  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      window.pageYOffset;
      let scroll = window.pageYOffset / 5;
      setScrollY(scroll * 2.2);
      setScrollY2(scroll);

      let mainBgBright =
        mainBg?.current?.offsetHeight &&
        mainBg?.current?.offsetHeight - window.innerHeight > window.pageYOffset
          ? 1 -
            window.pageYOffset /
              (mainBg?.current?.offsetHeight - window.innerHeight)
          : 0;

      setBrightness(mainBgBright);

      if (mainBg?.current?.offsetHeight && 1 - mainBgBright < 0.45) {
        setShiningShoonOp(0);
      } else if (mainBg?.current?.offsetHeight && 1 - mainBgBright >= 0.8) {
        setShiningShoonOp(
          1 -
            (window.pageYOffset - mainBg?.current?.offsetHeight * 0.4) /
              (mainBg?.current?.offsetHeight * 0.3)
        );
      } else {
        mainBg?.current?.offsetHeight &&
          setShiningShoonOp(
            (window.pageYOffset - mainBg?.current?.offsetHeight * 0.1) /
              (mainBg?.current?.offsetHeight * 0.4)
          );
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
      <Flex
        alignItems={"flex-end"}
        justifyContent={"center"}
        ref={mainBg}
        id="bg-main"
        minH={"260vh"}
        position={"relative"}>
        <Box
          top={"0px"}
          padding={"0px"}
          position={
            mainBg?.current?.offsetHeight
              ? window.pageYOffset <=
                mainBg?.current?.offsetHeight - window.innerHeight
                ? "fixed"
                : "relative"
              : "fixed"
          }
          h="100vh"
          w="100vw">
          <Flex position={"relative"} minH="100vh">
            <Flex className={styles.bg_shining} maxH="100vh" overflow="hidden">
              <Flex
                zIndex="-1"
                justifyContent={"center"}
                display={"flex"}
                position={"relative"}
                maxW="100vw">
                <AspectRatio
                  opacity={brightness}
                  position={"relative"}
                  minH="100vh"
                  minW={{
                    base: "calc(100vw + 1" + scrollY + "px )",
                    lg: "calc(100vw + " + scrollY + "px)",
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
                transform={"translate(-" + scrollY2 + "px,0px)"}
                position={"absolute"}
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
                position={"absolute"}
                transform={"translate(" + scrollY2 + "px,0px)"}
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
                opacity={scrollY <= 150 ? 1 : -scrollY / 230 + 1}
                w={"4rem"}
                position={"fixed"}
                bottom={"60px"}
                left={"50%"}
                transform="translate(-50%)"
                src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
              />
            </Flex>
          </Flex>
        </Box>
        <Flex
          opacity={shiningShoonOp}
          zIndex={2}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, calc(-50%))"}
          position={
            mainBg?.current?.offsetHeight &&
            window.pageYOffset <=
              mainBg?.current?.offsetHeight - window.innerHeight * 0.5
              ? "fixed"
              : "relative"
          }
          minW={"fit-content"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}>
          <AspectRatio zIndex="100" w="20rem" ratio={1}>
            <Image
              fill
              src="/Assets/ShiningSoon/logomrmsfit.png"
              alt="Logo Mr. & Ms. UMN"
            />
          </AspectRatio>
          <AspectRatio
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

      <Flex
        minH={"100vh"}
        minW={"100vw"}
        px="5vw"
        ref={content}
        justifyContent={"center"}
        alignItems="center"
        padding={"0px"}
        position={"relative"}>
        <AspectRatio
          transform={
            "scale(" +
            (content?.current?.offsetTop &&
            window.pageYOffset < content?.current?.offsetTop
              ? window.pageYOffset / content?.current?.offsetTop
              : 1) +
            ")"
          }
          opacity={
            content?.current?.offsetTop &&
            window.pageYOffset / content?.current?.offsetTop
          }
          minW={"90vw"}
          minH={"90vh"}
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