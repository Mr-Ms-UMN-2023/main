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
  ShiningSoon2
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
      <ShiningSoon2/>
        {desktop ? <CandidatesDesktop show={true} /> : <CandidatesMobile show={true} />}
   
    </>
  );
}
