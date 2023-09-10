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
        position={"relative"}
        h={"100vh"}
        w={"100vw"}
        overflow={"hidden"}
      >
        <Box id="frameAtas">
          <Image
            src="Assets/Candidate/compressed/hd+/frameAtas.png"
            position={"absolute"}
            my={"-5%"}
            width={"100%"}
            objectFit={"contain"}
            zIndex={2}
          />
        </Box>

        <Box id="frameKanan">
          <Image
            src={"Assets/Candidate/compressed/hd+/frameKanan.png"}
            position={"absolute"}
            zIndex={2}
            right={0}
            height={"70%"}
            objectFit={"contain"}
          />
          <Image
            src="Assets/Candidate/compressed/hd+/bunga2_edited.png"
            position={"absolute"}
            right="0"
            top={"20%"}
            height={"70%"}
            objectFit={"contain"}
            zIndex={2}
          />

          <Image
            src={"Assets/Candidate/compressed/hd+/frameKanan.png"}
            position={"absolute"}
            zIndex={2}
            right={0}
            bottom={"-12%"}            
            height={"70%"}
            objectFit={"contain"}
          />
        </Box>

        <Box id="frameKiri">
          <Image
            src={"Assets/Candidate/compressed/hd+/frameKiri.png"}
            position={"absolute"}
            zIndex={2}
            left={0}
            height={"70%"}
            objectFit={"contain"}
          />

          <Image
            src="Assets/Candidate/compressed/hd+/bunga1.png"
            position={"absolute"}
            left="0"
            top={"20%"}
            height={"70%"}
            objectFit={"contain"}
            zIndex={5}
          />

          <Image
            src={"Assets/Candidate/compressed/hd+/frameKiri.png"}
            position={"absolute"}
            zIndex={2}
            left={0}            
            bottom={"-12%"}
            height={"70%"}
            objectFit={"contain"}
          />
        </Box>

        <Box id="frameBawah">
          <Image
            src={"Assets/Candidate/compressed/hd+/bunga1_edited.png"}
            position="absolute"
            left={"15%"}
            top={"65%"}
            height={"70%"}
            objectFit={"contain"}
            transform={"rotate(270deg)"}
            transformOrigin={"left"}
            zIndex={6}
          />

          <Image
            src={"Assets/Candidate/compressed/hd+/bunga1_edited.png"}
            position="absolute"
            left={"85%"}
            top={"65%"}
            height={"70%"}
            objectFit={"contain"}
            transform={"rotate(270deg)"}
            transformOrigin={"left"}
            zIndex={6}
          />
        </Box>

        <Box id="tengah">
          <Image
            src={"Assets/Candidate/compressed/fhd/bgAwan.png"}
            position={"absolute"}
            zIndex={0}
            w={"100%"}
            h={"100%"}
            my={"6%"}
            objectFit={"cover"}
          />

          <Image
            src={"Assets/Candidate/compressed/hd+/garis_lengkung_FULL.png"}
            top={-20}
            bottom={-20}
            margin={"auto"}
            w={"100%"}
            objectFit={"contain"}
            position={"absolute"}
            zIndex={0}
          />

          <Image
            src={"Assets/Candidate/compressed/hd+/cahayaIlahi.png"}
            mx={"15%"}
            my={"-10%"}
            position={"absolute"}
            w={"70%"}
            objectFit={"contain"}
            zIndex={0}
          />
          <Image
            src="https://cdn.discordapp.com/attachments/1125453534062719016/1148827877840781363/pintuTangga_edited.png"
            position={"absolute"}
            my={"-20%"}
            mx={"7.5%"}
            w={"85%"}
            objectFit={"contain"}
            zIndex={1}
          />

          <Image
            src="https://cdn.discordapp.com/attachments/1125453534062719016/1148827878411218994/meet_our_candidates.png"
            position={"absolute"}            
            top={{base:"10%", xl:"0"}}
            my={"0%"}
            mx={"28%"}
            w={"45%"}
            objectFit={"contain"}
            zIndex={2}
          />

          <Image
            src="https://cdn.discordapp.com/attachments/1125453534062719016/1148827877257793616/pilar.png"
            position={"absolute"}
            my={"-19%"}
            mx={"7.5%"}
            w={"84%"}
            objectFit={"contain"}
            zIndex={1}
          />
        </Box>

        <Box id="candidates">
          <Box>
            <Image
              src="https://cdn.discordapp.com/attachments/1125453534062719016/1148822782524797000/candidates01.png"
              zIndex={3}
              left={"1%"}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />
            <Image
              src="Assets/Candidate/compressed/hd+/kabutKandidat2.png"
              zIndex={4}
              left={"1%"}
              top={"-3%"}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />
          </Box>

          <Box>
            <Image
              src="https://cdn.discordapp.com/attachments/1125453534062719016/1148822781547528294/candidates03.png"
              zIndex={5}
              top={"37%"}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />
            <Image
              src="Assets/Candidate/compressed/hd+/kabutKandidat2.png"
              zIndex={6}
              top={"34%"}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />
          </Box>

          <Box>
            <Image
              src="https://cdn.discordapp.com/attachments/1125453534062719016/1148822782965202996/candidates02.png"
              zIndex={3}
              right={"1%"}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />
            <Image
              src="Assets/Candidate/compressed/hd+/kabutKandidat.png"
              zIndex={4}
              right={"1%"}
              top={"-1%"}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />
          </Box>

          <Box>
            <Image
              src="https://cdn.discordapp.com/attachments/1125453534062719016/1148822782130528296/candidates04.png"
              zIndex={5}
              top={"37%"}
              right={0}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />

            <Image
              src="Assets/Candidate/compressed/hd+/kabutKandidat.png"
              zIndex={6}
              top={"35%"}
              right={0}
              w={"34%"}
              objectFit={"contain"}
              position={"absolute"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { CandidatesDesktop as CandidatesDesktop };
