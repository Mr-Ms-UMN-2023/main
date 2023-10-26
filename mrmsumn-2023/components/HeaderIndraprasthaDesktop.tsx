import {
  Image,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const HeaderIndraprasthaDesktop = (props: any) => {
  return (
    <>
      <Box
        display={props.show ? "block" : "none"}
        position={"relative"}
        h={"100vh"}
        w={"100vw"}
        overflow={"hidden"}
      >
        <Box id="headerImage">
          <Image
            src="https://cdn.discordapp.com/attachments/1125453534062719016/1166796862079123486/Indraprasta.png?ex=654bcb41&is=65395641&hm=797215ae41b98ca16dbfd0f0438829b4cdad4e03b0cdb08536db514cc3cc7d70&"
            zIndex={3}
            w={"100%"}
            objectFit={"contain"}
            position={"absolute"}
          />
        </Box>
      </Box>
    </>
  );
};

export { HeaderIndraprasthaDesktop as HeaderIndraprasthaDesktop };
