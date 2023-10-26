import {
  Navbar,
  // CandidatesDesktop,
  // CandidatesMobile,
  CandidatesIntro,
  CandidatesWrapper,
  Gallery,
} from "@/components";
import { Box, Flex, Spacer, useMediaQuery, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { sources } from "@/data/sampleImageSource";
import styles from "@/styles/Home.module.css";

const Pancala = (props: any) => {
  const [desktop] = useMediaQuery("(min-width: 1081px)");
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar />
      <CandidatesWrapper />
      <Flex flexDirection={"column"} alignItems={"center"} mx="5vw" my="20vw">
        <Text color="#FFFFFF" fontSize="2vw" my="2vw">
          Pancala
        </Text>
        <Text color="#FFFFFF" fontSize="1.5vw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid.
        </Text>
      </Flex>
      <Box my={"200vh"}>
        <Gallery source={sources} />
      </Box>
    </>
  );
};

export default Pancala;
