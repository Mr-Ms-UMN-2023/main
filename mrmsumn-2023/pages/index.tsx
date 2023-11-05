import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { Box, Flex, Heading, Button, useMediaQuery } from "@chakra-ui/react";
import {
  Loading,
  Navbar,
  DivisionCard,
  DivisionDetail,
  ShiningSoon,
  MrMsDetail,
  Dedikasi,
  ButtonDedikasi,
  Teaser,
  CandidatesDesktop,
  CandidatesMobile,
  Footer,
  ShiningSoon2,
  Indraprastha_Hastinapura
} from "@/components";

import { useState, useEffect, useRef } from "react";
import { division } from "@/data/divisions";

export default function Home(props: any) {
  // const [dedikasi, setDedikasi] = useState(false);

  const router = useRouter();

  const [divisions, setDivisionData] = useState(division);

  const [popup, setPopup] = useState<object>();

  const [desktop] = useMediaQuery("(min-width: 1081px)");

  // const [show, setShow] = useState("none");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ShiningSoon2 />
        {desktop ? <CandidatesDesktop show={true} /> : <CandidatesMobile show={true} />}
      {/* <Indraprastha_Hastinapura/> */}
      <Dedikasi />
      <Teaser />
      {/* {dedikasi && <Dedikasi Dedikasi={setDedikasi} />}
      <ButtonDedikasi Dedikasi={setDedikasi} />
      
      <ShiningSoon />
      
      <Navbar />
      
    <MrMsDetail /> */}

      {/* DISINI BUAT POPUPNYA */}
    <Footer />
    </>
  );
}
