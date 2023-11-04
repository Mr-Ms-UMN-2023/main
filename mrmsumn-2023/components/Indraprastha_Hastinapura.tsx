import { Flex, Box, AspectRatio, Img, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Home.module.css";

const Indraprastha_Hastinapura = () => {
    const [brightness, setBrightness] = useState<number>(1);
  const [scrollY2, setScrollY2] = useState<number>(0);
  const [shiningShoonOp, setShiningShoonOp] = useState<number>(0);
  const [hastiOp, setHastiOp] = useState<number>(0);

  const [scrollY, setScrollY] = useState<number>(0);
  const mainBg = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // console.log(window.scrollY);
    window.pageYOffset;
    let scroll: number = window.pageYOffset / 5;
    let oprec: HTMLElement | null = document.getElementById("oprec");
    if (oprec && window.pageYOffset > oprec.offsetTop - 100) {
      oprec.classList.add(styles.show);
    }
    setScrollY(scroll * 2.2);

    setScrollY2(scroll);

    let mainBgBright: number =
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
            (mainBg?.current?.offsetHeight * 0.3) as number
      );
    } else {
      setShiningShoonOp(0);
    }

    if (
      mainBg?.current?.offsetHeight &&
      mainBgBright > 0.2 &&
      mainBgBright <= 0.5
    ) {
      setHastiOp(
        (window.pageYOffset - mainBg?.current?.offsetHeight * 0.2) /
          (mainBg?.current?.offsetHeight * 0.3) as number
      );
    } else {
      setHastiOp(0);
    }

    if (mainBg?.current?.offsetHeight && mainBgBright <= 0.2) {
      setHastiOp(
        1 -
          (window.pageYOffset - mainBg?.current?.offsetHeight * 0.3) /
            (mainBg?.current?.offsetHeight * 0.4) as number
      );
    }
  };

  useEffect(() => {
    // Check for browser

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    
    useEffect(() => {
        // Check for browser
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      return (
        <>
         {/* Hastinapura */}
         <Flex
          transform={"translate(-50%, calc(-50%))"}
          minW={{ base: "80vw", md: "fit-content" }}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Img
            w={{ base: "60rem" }}
            src="/Assets/Hastinapura/hasti_1.png"
          />
          <Text
            fontSize={{ base: "1.2rem", md: "1.8rem" }}
            textShadow={"0 0 40px #ffe49d"}
            textAlign={"center"}
            color="#efd094">
            Hastinapura
          </Text>
        </Flex>
        {/* Indraprastha */}
        <Flex
          zIndex={2}
          left={"60%"}
          transform={"translate(-50%, calc(-50%))"}
          minW={{ base: "80vw", md: "fit-content" }}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}>
          <Text
            fontSize={{ base: "1.2rem", md: "1.8rem" }}
            textShadow={"0 0 40px #ffe49d"}
            textAlign={"center"}
            color="#efd094">
            Indraprastha
          </Text>
          <Img
            w={{ base: "80rem" }}
            src="/Assets/Hastinapura/hasti_2.png"
          />
        </Flex>
        </>
      )
};

export {Indraprastha_Hastinapura as Indraprastha_Hastinapura};