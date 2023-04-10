import { Flex, Img } from "@chakra-ui/react";
import styles from "@/styles/element.module.css";

const LoadingView = () => {
  return (
    <Flex
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
        top="50%"
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        position={"fixed"}
        w={{ base: "40%", md: "20%" }}
        src="/Assets/Hastinapura/hastinapura.png"
      />
      <Flex
        border={"16px solid black"}
        borderTop={"16px solid #c28824"}
        width={{ base: "40vw", md: "20vw" }}
        height={{ base: "40vw", md: "20vw" }}
        className={styles.loader}></Flex>
    </Flex>
  );
};

export { LoadingView as LoadingView };
