import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Box, Img, Flex, Text, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home(props: any) {
  // const { message } = props;

  // console.log(message);
  const [scrollY, setScrollY] = useState(0);
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset;
      let scroll = window.pageYOffset / 5;
      setScrollY(scroll);
      console.log(scroll);

      let light = scroll <= 0 ? 1 : -scroll / 100 + 1.4;
      if (light <= 0.4) {
        setBrightness(0.4);
      } else if (light >= 1) {
        setBrightness(1);
      } else setBrightness(light);

      console.log(light);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Mr. & Ms. UMN 2023</title>
        <meta name="description" content="Website Mr. & Ms. UMN 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box position={"relative"} h="200vh" w="100vw">
        <Box>
          <Flex className={styles.bg_shining} maxH="100vh" overflow="hidden">
            <AspectRatio
              filter={"brightness(" + brightness + ")"}
              zIndex="-1"
              position={"relative"}
              minH="100vh"
              minW={{
                base: "calc(100vw + 1" + scrollY + "px )",
                lg: "calc(100vw + " + scrollY + "px)",
              }}
              maxW="200vw"
              ratio={16 / 9}>
              <Img
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
            minW={{ base: "18rem", md: "20rem", lg: "30rem", xl: "50rem" }}
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
            minW={{ base: "18rem", md: "20rem", lg: "30rem", xl: "50rem" }}
            minH={"100vh"}>
            <Image
              className={styles.leaf_right}
              fill
              alt="leaf"
              src="/Assets/ShiningSoon/leaf-right.png"
            />
          </AspectRatio>
          <Img
            opacity={scrollY <= 50 ? 1 : -scrollY / 100 + 1}
            w={"4rem"}
            position={"fixed"}
            bottom={"40px"}
            left={"50%"}
            transform="translate(-50%)"
            src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
          />
        </Box>

        <AspectRatio
          opacity={scrollY <= 130 ? 0 : scrollY / 100 - 0.7}
          transform={
            "translate(-50%, calc(-50% - " +
            (scrollY <= 50 ? 0 : scrollY - 70) +
            "px))"
          }
          left={"50vw"}
          top={"50vh"}
          zIndex="100"
          position={"fixed"}
          w="20rem"
          ratio={1}>
          <Image
            fill
            src="/Assets/ShiningSoon/logomrms.png"
            alt="Logo Mr. & Ms. UMN"
          />
        </AspectRatio>
        <AspectRatio
          opacity={scrollY <= 130 ? 0 : scrollY / 100 - 0.55}
          transform={
            "translate(-50%, calc(-50% - " +
            (scrollY <= 50 ? 0 : scrollY - 240) +
            "px))"
          }
          left={"50vw"}
          top={"50vh"}
          zIndex="100"
          position={"fixed"}
          w={{ base: "80vw", md: "40vw", lg: "20vw" }}
          ratio={20 / 9}>
          <Image
            fill
            src="/Assets/ShiningSoon/shinningsoon.png"
            alt="text Shining Soon"
          />
        </AspectRatio>
      </Box>
    </div>
  );
}
