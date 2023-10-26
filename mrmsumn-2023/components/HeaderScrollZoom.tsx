import React, { useState, useRef, useEffect } from "react";
import { HeaderIndraprasthaDesktop } from "./HeaderIndraprasthaDesktop";
import { HeaderIndraprasthaMobile } from "./HeaderIndraprasthaMobile";
import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Gallery } from "./Gallery";

const HeaderScrollZoom = (props: any) => {
  const [desktop] = useMediaQuery("(min-width: 1081px)");
  const [show, setShow] = useState(false);
  const [brightnessMobile, setBrightnessMobile] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [scrollY2, setScrollY2] = useState(0);
  const [shiningShoonOp, setShiningShoonOp] = useState(0);
  const [hastiOp, setHastiOp] = useState(3);
  const [scale, setScale] = useState(3);
  const [scrollY, setScrollY] = useState(0);
  const mainBg = useRef<HTMLDivElement>(null);
  const [orientation, setOrientation] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(orientation: portrait)")) {
      setOrientation(true);
    } else {
      setOrientation(false);
    }

    window
      .matchMedia("(orientation: portrait)")
      .addEventListener("change", (e) => {
        const portrait = e.matches;

        if (portrait) {
          setOrientation(true);
        } else {
          setOrientation(false);
        }
      });
  }, []);

  const handleScroll = () => {
    // console.log(window.scrollY);
    window.pageYOffset;
    let scroll = window.pageYOffset / 5;
    setScrollY(scroll * 2.2);

    setScrollY2(scroll);

    // console.log("mainBg: " + mainBg.current.offsetHeight);
    // console.log("window: " + window.innerHeight);
    const scroll2 = scroll * 2.2;
    let ctrl = 10;
    let ctrlmb = 10;

    if (scroll2 < 379) {
      ctrlmb = 10;
    } else if (scroll2 >= 379 && scroll2 < 420) {
      ctrlmb = 5;
    } else if (scroll2 >= 420 && scroll2 < 500) {
      ctrlmb = 3;
    } else if (scroll2 >= 500 && scroll2 < 550) {
      ctrlmb = 2;
    } else if (scroll2 >= 550 && scroll2 < 600) {
      ctrlmb = 1.5;
    } else {
      ctrlmb = 1;
    }

    let brightnessMobile =
      window.pageYOffset /
      (mainBg?.current?.offsetHeight - window.innerHeight) /
      ctrlmb;
    setBrightnessMobile(brightnessMobile);

    if (scroll2 < 900) {
      ctrl = 10;
    } else if (scroll2 >= 900 && scroll2 < 1000) {
      ctrl = 5;
    } else if (scroll2 >= 1000 && scroll2 < 1100) {
      ctrl = 3;
    } else if (scroll2 >= 1100 && scroll2 < 1150) {
      ctrl = 2;
    } else {
      ctrl = 1.5;
    }

    let brightnessDesktop =
      1 -
      window.pageYOffset /
        (mainBg?.current?.offsetHeight - window.innerHeight) /
        ctrl;
    setBrightness(brightnessDesktop);
    // let mainBgBright;
    // if(scrollY <= 920) mainBgBright = 1
    // else mainBgBright = 1 - scrollY/200;
    // console.log(mainBgBright);

    let mainBgScale =
      mainBg?.current?.offsetHeight &&
      mainBg?.current?.offsetHeight - window.innerHeight >
        window.pageYOffset - 1
        ? 3 -
          window.pageYOffset /
            (mainBg?.current?.offsetHeight - window.innerHeight * 2.005)
        : 1;

    setScale(mainBgScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("scrollY " + scrollY + " scrollY2 " + scrollY2);
  }, [scrollY, scrollY2]);

  useEffect(() => {
    console.log("brightness " + brightness);
    console.log("brightnessMobile: " + brightnessMobile);
  }, [brightness, brightnessMobile]);

  return (
    <Box
      ref={mainBg}
      id="bg-main"
      minH={"300vh"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Box
        opacity={brightness * 100 + "%"}
        top={"0px"}
        padding={"0px"}
        transformOrigin={{
          base: "50% 60%",
          md: desktop ? "50% 35%" : orientation ? "50% 95%" : "50% 50%%",
        }}
        transform={"scale(" + scale + ")"}
        // transform={desktop ? "scale(" + scale + ")" : "scale(" + scale*2 +")"}
        // position={
        //   mainBg?.current?.offsetHeight
        //     ? window.pageYOffset <=
        //       mainBg?.current?.offsetHeight - window.innerHeight
        //       ? "fixed"
        //       : "relative"
        //     : "fixed"
        // }
        position={"fixed"}
        display={brightness > 0 ? "block" : "none"}
        minH="100%"
        w="100%"
      >
        {desktop ? (
          <HeaderIndraprasthaDesktop show={true} />
        ) : (
          <Box maxW={"100%"} maxH={"100%"}>
            <HeaderIndraprasthaMobile
              show={true}
              brightness={brightnessMobile}
              orientation={orientation}
            />
          </Box>
        )}
      </Box>
      <Image
        zIndex={10}
        opacity={scrollY <= 150 ? 1 : -scrollY / 230 + 1}
        w={"4rem"}
        position={"fixed"}
        bottom={"60px"}
        left={"50%"}
        transform="translate(-50%)"
        src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
      />
    </Box>
  );
};

export { HeaderScrollZoom as HeaderScrollZoom };
