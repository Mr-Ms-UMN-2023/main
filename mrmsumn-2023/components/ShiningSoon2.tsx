import { Flex, Box, AspectRatio, Img, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import { set } from "react-hook-form";
import Link from "next/link";

const ShiningSoon2 = () => {
  const [brightness, setBrightness] = useState(1);
  const [scrollY2, setScrollY2] = useState(0);
  const [shiningShoonOp, setShiningShoonOp] = useState(0);
  const [hastiOp, setHastiOp] = useState(0);
  const [indraOp, setIndraOp] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const mainBg = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // console.log(window.scrollY);
    window.pageYOffset;
    let scroll = window.pageYOffset / 8;
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
    // console.log(mainBgBright);

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
        position={"relative"}
        >
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
                    src="/Assets/ShiningSoon/home-bg-2.png"
                    alt="shining-soon bg 1"
                  />
                </AspectRatio>
              </Flex>

              <AspectRatio
                filter={"brightness(" + brightness + ")"}
                ratio={1}
                zIndex="1"
                top={"30%"}
                left={"-10%"}
                transform={"translate(-" + scrollY2 + "px,0px)"}
                position={"absolute"}
                minW={{
                  base: "70vw",
                  md: "20rem",
                  lg: "40rem",
                  xl: "50rem",
                }}
                minH={{
                  base: "100vh",
                  md: "20rem",
                  lg: "40rem",
                  xl: "60rem",
                }}>
                <Image
                  loading="eager"
                  className={styles.leaf_left}
                  fill
                  alt="leaf"
                  src="/Assets/ShiningSoon/wayang-kiri.png"
                />
              </AspectRatio>
              <AspectRatio
                filter={"brightness(" + brightness + ")"}
                ratio={12 / 16}
                zIndex="1"
                top={"30%"}
                right={"-10%"}
                position={"absolute"}
                transform={"translate(" + scrollY2 + "px,0px)"}
                minW={{
                  base: "70vw",
                  md: "20rem",
                  lg: "40rem",
                  xl: "50rem",
                }}
                minH={{
                  base: "100vh",
                  md: "20rem",
                  lg: "40rem",
                  xl: "60rem",
                }}>
                <Image
                  loading="eager"
                  className={styles.leaf_right}
                  fill
                  alt="leaf"
                  src="/Assets/ShiningSoon/wayang-kanan.png"
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
        {/* Logo */}
        
        <Flex
          opacity={shiningShoonOp}
          zIndex={2}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, calc(-50%))"}
          position={
            mainBg?.current?.offsetHeight &&
            window.pageYOffset <= mainBg?.current?.offsetHeight / 3
              ? "fixed"
              : "relative"
          }
          // minW={"fit-content"}
          flexDir={"column"}
          minW={{ base: "80vw", md: "60vw", sm: "50vw" }}
          alignItems={"center"}
          justifyContent={"center"}>
          <AspectRatio zIndex="100" w={{base: "80vw", md: "10 rem", sm: "10 rem"}} h={{base: "5vh", md: "10rem", sm: "5rem"}}>
            {/* logo mrms */}
            <Image
              fill
              src="/Assets/Hastinapura/logo.png"
              alt="Logo Mr. & Ms. UMN"
            />
          </AspectRatio>
        </Flex>        
        
      </Flex>
      <Flex
      direction={"column"}
      position={"relative"}>
        {/* Hastinapura */}
        <Link href="/hastinapura">
          
          <Flex
          zIndex={2}
          left={"40%"}
          transform={"translate(-50%, calc(-50%))"}
          position={"relative"}
          minW={{ base: "80vw", md: "fit-content" }}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Img
            w={{ base: "80rem" }}
            src="/Assets/Hastinapura/hasti_1.png"
          />
          <Flex
          w={"fit-content"}
          h={"fit-content"}
          position={"absolute"}
          top={"40%"}
          left={"80%"}
          >
          
          <Text
            fontSize={{ md: "2.5rem", sm: "2rem",lg:"3rem"}}
            className="Cinzel-Decorative"
            textShadow={"0 0 40px #ffe49d"}
            textAlign={"center"}
            justifyContent={"center"}
            color="#efd094">
            Hastinapura
          </Text>
          </Flex>
        </Flex>
          
        </Link>
          
        <Link href={"/indraprastha"}>
          {/* Indraprastha */}
        <Flex
          // zIndex={2}
          left={"60%"}
          transform={"translate(-50%, calc(-50%))"}
          position={"relative"}
          minW={{ base: "80vw", md: "fit-content" }}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}>
            <Flex
            w={"fit-content"}
            h={"fit-content"}
            position={"absolute"}
            top={"45%"}
            left={"0%"}
            >
            <Text
              fontSize={{ md: "3rem", sm: "2rem",lg:"2.5rem" }}
              style={{fontFamily: "Cinzel-Decorative"}}
              fontFamily={"Cinzel-Decorative"}
              textShadow={"0 0 40px #ffe49d"}
              textAlign={"center"}
              color="#efd094">
              Indraprastha
            </Text>

            </Flex>
          <Img
            w={{ base: "80rem" }}
            src="/Assets/Hastinapura/hasti_2.png"
          />
        </Flex>
        </Link>
        
      </Flex>
    </>
  );
};

export { ShiningSoon2 as ShiningSoon2 };
