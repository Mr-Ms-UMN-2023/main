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
} from "@/components";

import { useState, useEffect, useRef } from "react";
import { division } from "@/data/divisions";
import { useSearchParams } from "next/navigation";

export default function Home(props: any) {
  const searchParams = useSearchParams();
  // const [dedikasi, setDedikasi] = useState(false);

  const router = useRouter();

  const [divisions, setDivisionData] = useState(division);

  const [popup, setPopup] = useState<object>();

  const [desktop] = useMediaQuery("(min-width: 1081px)");

  // const [show, setShow] = useState("none");
  // console.log(searchParams.get("order_id"));

  if (
    searchParams.get("order_id") &&
    searchParams.get("status_code") == "200"
  ) {
    router.push("get-tiket");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ShiningSoon />
        {desktop ? <CandidatesDesktop show={true} /> : <CandidatesMobile show={true} brightness={1}/>}
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
