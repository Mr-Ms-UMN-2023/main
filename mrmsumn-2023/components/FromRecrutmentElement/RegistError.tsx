import { Flex, Img, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const RegistError = () => {
  const [display, setDisplay] = useState("flex");

  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
    }, 4000);
  }, []);
  return (
    <Flex
      display={display}
      flexDir={"column"}
      zIndex={"10"}
      left={"0px"}
      top={"0px"}
      w="100vw"
      h="100vh"
      alignItems={"center"}
      justifyContent={"center"}
      background={"blackAlpha.800"}
      position={"fixed"}>
      <Img
        w={{ base: "40%", md: "20%" }}
        src="/Assets/Hastinapura/hastinapura.png"
      />
      <Text
        fontWeight="bold"
        color="#c28824"
        fontFamily="TrajanPro-Bold"
        fontSize={{ base: "1.8rem", md: "2rem" }}>
        Gagal melakukan pendaftaran
      </Text>
    </Flex>
  );
};

export { RegistError as RegistError };
