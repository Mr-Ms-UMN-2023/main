import {
  Navbar,
  CandidatesDesktop,
  CandidatesMobile,
  CandidatesIntro,
} from "@/components";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

const Candidates = () => {
  const [desktop] = useMediaQuery("(min-width: 1081px)");
  const [show, setShow] = useState(false);

  return (
    <Box minH={"100vh"} minW={"100vW"}>
      <Navbar />
      {/* <CandidatesIntro desktop={desktop} setShow={setShow}/> */}
      {desktop ? (
        <CandidatesDesktop show={true} />
      ) : (
        <CandidatesMobile show={true} />
      )}
    </Box>
  );
};

export default Candidates;
