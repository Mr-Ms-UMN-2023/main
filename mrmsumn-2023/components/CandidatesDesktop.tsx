import {
  Image,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const CandidatesDesktop = (props: any) => {
  return (
    <>
      <Box
        display={props.show ? "block" : "none"}
        position={"absolute"}
        h={"100vh"}
        w={"100vw"}
        overflow={"hidden"}
      >
        <Box id="frameAtas">
          <Image
            src="Assets/Candidate/frameAtas.png"
            position={"absolute"}
            top={-20}
            transform="scaleY{0.5)"
            transformOrigin={"bottom"}
            zIndex={5}
          />
        </Box>

        <Box id="frameKanan">
          <Image
            src={"Assets/Candidate/landscape/frameKanan.png"}
            position={"absolute"}
            zIndex={2}
            right={0}
            transform={"scale(0.3)"}
            transformOrigin={"top right"}
          />
          <Image
            src="Assets/Candidate/bunga2.png"
            position={"absolute"}
            right="0"
            top={"20%"}
            transform={"scale(0.35)"}
            transformOrigin={"top right"}
            zIndex={5}
          />

          <Image
            src={"Assets/Candidate/landscape/frameKanan.png"}
            position={"absolute"}
            zIndex={2}
            right={0}
            bottom={-20}
            transform={"scale(0.3)"}
            transformOrigin={"bottom right"}
          />
        </Box>

        <Box id="frameKiri">
          <Image
            src={"Assets/Candidate/landscape/frameKiri.png"}
            position={"absolute"}
            zIndex={2}
            left={0}
            top={2}
            transform={"scale(0.3)"}
            transformOrigin={"top left"}
          />

          <Image
            src="Assets/Candidate/bunga1.png"
            position={"absolute"}
            left="0"
            top={"20%"}
            transform={"scale(0.35)"}
            transformOrigin={"top left"}
            zIndex={5}
          />

          <Image
            src={"Assets/Candidate/landscape/frameKiri.png"}
            position={"absolute"}
            zIndex={2}
            left={0}
            bottom={-20}
            transform={"scale(0.3)"}
            transformOrigin={"bottom left"}
          />
        </Box>

        <Box id="frameBawah">
          <Image
            src={"Assets/Candidate/bunga1.png"}
            position="absolute"
            left={"15%"}
            top={-10}
            transform={"scale(0.3) rotate(270deg)"}
            transformOrigin={"left"}
            zIndex={55}
          />

          <Image
            src={"Assets/Candidate/bunga1_edited.png"}
            position="absolute"
            left={"85%"}
            top={-10}
            transform={"scale(0.3) rotate(270deg)"}
            transformOrigin={"left"}
            zIndex={55}
          />

          {/* <Image
            src={"Assets/Candidate/fadeBawah.png"}
            position="absolute"
            mx={"auto"}
            zIndex={99}
            width={"100%"}
            top={"80%"}
            objectFit={"fill"}
          /> */}
        </Box>

        <Box id="tengah">
          <Image
            src={"Assets/Candidate/bgAwan.png"}
            position={"absolute"}
            zIndex={-1}
            w={"100%"}
            h={"100%"}
            top={"13%"}
            objectFit={"cover"}
          />

          <Image
            src={"Assets/Candidate/landscape/garis_lengkung_FULL.png"}
            top={-20}
            position={"absolute"}
            zIndex={1}
          />

          <Image
            src={"Assets/Candidate/cahayaIlahi.png"}
            mx={"auto"}
            my={"auto"}
            top={"-50%"}
            position={"absolute"}
            zIndex={0}
          />
          <Image
            src="Assets/Candidate/pintuTangga_edited.png"
            position={"absolute"}
            mx={"auto"}
            my={"auto"}
            top={"-50%"}
            transform={"scale(0.8)"}
            zIndex={2}
          />

          <Image
            src="Assets/Candidate/meet_our_candidates.png"
            position={"absolute"}
            mx={"auto"}
            my={"auto"}
            top={"-50%"}
            transform={"scale(0.5)"}
            zIndex={2}
          />

          <Image
            src="Assets/Candidate/pilar.png"
            position={"absolute"}
            mx={"auto"}
            top={"-55%"}
            transform={"scale(0.8)"}
            zIndex={2}
          />
        </Box>

        <Box id="candidates">
          <Box>
            <Image
              src="Assets/Candidate/landscape/candidates01.png"
              zIndex={50}
              transform={"scale(0.3)"}
              top={7}
              left={10}
              transformOrigin={"top left"}
              position={"absolute"}
            />
            <Image
              src="Assets/Candidate/kabutKandidat2.png"
              zIndex={50}
              transform={"scale(0.3)"}
              top={7}
              left={10}
              transformOrigin={"top left"}
              position={"absolute"}
            />
          </Box>

          <Box>
            <Image
              src="Assets/Candidate/landscape/candidates03.png"
              zIndex={50}
              transform={"scale(0.3)"}
              top={"42%"}
              left={7}
              transformOrigin={"top left"}
              position={"absolute"}
            />
            <Image
              src="Assets/Candidate/kabutKandidat2.png"
              zIndex={60}
              transform={"scale(0.3)"}
              top={"45%"}
              left={7}
              transformOrigin={"top left  "}
              position={"absolute"}
            />
          </Box>

          <Box>
            <Image
              src="Assets/Candidate/landscape/candidates02.png"
              zIndex={50}
              transform={"scale(0.3)"}
              top={7}
              right={10}
              transformOrigin={"top right"}
              position={"absolute"}
            />
            <Image
              src="Assets/Candidate/kabutKandidat.png"
              zIndex={50}
              transform={"scale(0.3)"}
              top={7}
              right={10}
              transformOrigin={"top right"}
              position={"absolute"}
            />
          </Box>

          <Box>
            <Image
              src="Assets/Candidate/landscape/candidates04.png"
              zIndex={50}
              transform={"scale(0.3)"}
              top={"42%"}
              right={5}
              transformOrigin={"top right"}
              position={"absolute"}
            />

            <Image
              src="Assets/Candidate/kabutKandidat2.png"
              zIndex={60}
              transform={"scale(0.3)"}
              top={"42%"}
              right={5}
              transformOrigin={"top right"}
              position={"absolute"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { CandidatesDesktop as CandidatesDesktop };
