import {
  Navbar,
  CandidatesDesktop,
  CandidatesMobile,
  ShiningSoon,
  CandidatesIntro,
} from "@/components";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Candidates = () => {
  const [desktop] = useMediaQuery("(min-width: 1081px)");

  return (
    <Box
    minH={'100vh'}
    minW={'100vW'}>
      <Navbar />
      {/* <CandidatesIntro desktop={desktop}/> */} {/* nanti mo diganti jd onclick */}
      {desktop ? <CandidatesDesktop /> : <CandidatesMobile/>}
    </Box>
  );
};

export default Candidates;
