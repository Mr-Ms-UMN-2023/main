import { Flex, Img, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ConfirmRegis = () => {
  const [display, setDisplay] = useState("flex");
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setDisplay("none");
      router.push('/');
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
        Pendaftaran Berhasil
      </Text>
    </Flex>
  );
};

export { ConfirmRegis as ConfirmRegis };
