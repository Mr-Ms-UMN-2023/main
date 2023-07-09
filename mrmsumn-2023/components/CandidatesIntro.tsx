import {
  Flex,
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Link,
  Skeleton,
  AspectRatio,
  Img,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";

const CandidatesIntro = (props: any) => {
  const [brightness, setBrightness] = useState(1);
  const [shiningShoonOp, setShiningShoonOp] = useState(0);

  const [scrollY, setScrollY] = useState(0);
  const [scrollY2, setScrollY2] = useState(0);
  const mainBg = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // console.log(window.scrollY);
    window.pageYOffset;
    let scroll = window.pageYOffset / 5;
    let oprec = document.getElementById("oprec")
      ? document.getElementById("oprec")?.offsetTop
      : 0;
    if (oprec && window.pageYOffset > oprec - 100) {
      document.getElementById("oprec")?.classList.add(styles.show);
    }
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
    console.log(mainBgBright);

    if (
      mainBg?.current?.offsetHeight &&
      mainBgBright > 0.5 &&
      mainBgBright <= 0.8
    ) {
      setShiningShoonOp(
        1 -
          (window.pageYOffset - mainBg?.current?.offsetHeight * 0.2) /
            (mainBg?.current?.offsetHeight * 0.3)
      );
    } else {
      setShiningShoonOp(0);
    }
  };
  
  useEffect(() => {
    // Check for browser

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Flex
        alignItems={"flex-end"}
        justifyContent={"center"}
        ref={mainBg}
        id="bg-main"
        minH={"300vh"}
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
          <Flex id="storyLine" position={"relative"} minH="100vh">
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
                  overflow={"hidden"}
                  ratio={16 / 9}>
                  <Img
                    loading="eager"
                    minW={"100%"}
                    minH={"100%"}
                    src={props.desktop ? "/Assets/Candidate/pintuLengkap.png" : "/Assets/Candidate/potrait/BG_candidate_potrait_edited.png"}
                  />
                </AspectRatio>
              </Flex>

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
      </Flex>
    </>
  );
};

export { CandidatesIntro as CandidatesIntro };
