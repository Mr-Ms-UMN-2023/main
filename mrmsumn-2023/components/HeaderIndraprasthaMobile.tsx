import { Flex, Box, Image, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";

const HeaderIndraprasthaMobile = (props: any) => {
  return (
    <Box
      display={props.show ? "block" : "none"}
      minH="100vh"
      w="100wh"
      maxW="1366px"
      mx="auto"
      position="relative"
    >
        <Flex
            justifyContent={"between"}
            alignItems={"center"}
            textAlign={"center"}
            position={"relative"}
            mt={props.orientation ? "17.3vh" : "15vh"}
            >
            <Image
                src="https://cdn.discordapp.com/attachments/1125453534062719016/1167201480877559878/IndraprasthaMobile.png?ex=654d4416&is=653acf16&hm=9520b909927c843b000bd2423812281302bf275f71fc504e62a11901e5e80ac6&"
                // display={{ base: "block", md: props.orientation ? "block" : "none" }}
                position={"absolute"}
                top={"50%"}
                zIndex={1}
                pt={
                    props.orientation
                    ? { base: "10rem", md: "13rem" }
                    : { base: "22rem", lg: "10rem" }
                }
            />
        </Flex>
    </Box>
  );
};

export { HeaderIndraprasthaMobile as HeaderIndraprasthaMobile };
