import { Box, GridItem, Img, Text, Heading, Flex } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const DivisionDetail = (data: any, ref: any) => {
  const detail = data.data;

  return (
    <Flex
      h={{ base: "80vh", lg: "60vh" }}
      w={{ base: "80vw", lg: "50vw" }}
      borderRadius={{ base: "0.5rem", md: "1rem" }}
      zIndex={100}
      bg="white"
      position="fixed"
      mx="auto"
      my="auto"
      left={"50%"}
      top={"50%"}
      transform={"translate(-50%, -50%)"}
      backgroundColor="rgb(194, 136, 36)"
      overflow="hidden"
      //  ref={ref}
    >
      <Flex
        className={styles.customScroll}
        p="2rem"
        flexDir={"column"}
        alignItems="center"
        overflowY={"scroll"}>
        <Img
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
  );
};

export { DivisionDetail as DivisionDetail };
