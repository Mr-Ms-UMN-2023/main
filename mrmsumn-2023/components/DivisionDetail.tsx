import {
  Box,
  GridItem,
  Image,
  Text,
  Heading,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const DivisionDetail = (data: any) => {
  const detail = data.data;
  const [isMobile] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      position="fixed"
      top="0px"
      left="0px"
      minWidth={"100vw"}
      minHeight="100vh"
      zIndex={"100"}
      bgColor={"rgba(0, 0, 0, 0.8)"}>
      <Flex
        boxShadow={"0px 0px 30px 4px #e8d27d"}
        color="#c28824"
        h={{ base: "80vh", lg: "60vh" }}
        w={{ base: "80vw", lg: "50vw" }}
        borderRadius={{ base: "0.5rem", md: "1rem" }}
        zIndex={100}
        position="relative"
        bg="white"
        mx="auto"
        my="auto"
        bgSize="cover"
        bgPosition={"center"}
        background={{ base: "url('/Assets/Division/PopUp/website-02.png')" }}
        overflow="hidden">
        {/* frame */}
        <Image
          left="0px"
          top={"0px"}
          height="100%"
          width={"100%"}
          position={"absolute"}
          alt="Divisi Panitia Mr. & Ms UMN"
          src={
            isMobile
              ? "/Assets/Division/PopUp/website asse-01.png"
              : "/Assets/Division/PopUp/website asse-02.png"
          }
        />
        <Flex
          zIndex={"2"}
          className={styles.customScroll}
          m={{ base: "1rem", md: "5rem" }}
          my={"3rem"}
          p={{ base: "1.5rem" }}
          textAlign={"center"}
          flexDir={"column"}
          alignItems="center"
          overflowY={"scroll"}>
          <Image
            mb="2rem"
            borderRadius={"50%"}
            width={"10rem"}
            src={"/Assets/Division/" + detail.Logo}
          />

          <Heading fontWeight={"bold"}>{detail.name}</Heading>

          <Text mb="2rem" fontWeight={"bold"}>
            {detail.jobdesk}
          </Text>
          <Text mb="2rem" fontWeight={"bold"}>
            {detail.description[0]}
          </Text>
          <Text fontWeight={"bold"}>{detail.description[1]}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { DivisionDetail as DivisionDetail };
