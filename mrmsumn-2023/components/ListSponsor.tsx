import { Flex, Box, Grid, GridItem, Image, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";

const ListSponsor = (props: any) => {
  const list = [
    {
      jenis: "sponsor",
      src: "Assets/Sponsor/LOGO_KAY_COLLECTION.png",
      nama: "Kay Collection",
      url: "https://www.kaycollection.com/",
      bg: true,
    },
    {
      jenis: "sponsor",
      src: "Assets/Sponsor/Logo_PUYO_DEFAULT.png",
      nama: "PUYO Desserts",
      url: "https://www.puyodesserts.com/",
      bg: false,
    },
    {
      jenis: "sponsor",
      src: "Assets/Sponsor/LOGO_MASAMI.png",
      nama: "Masami",
      url: "http://www.masamishouko.com/",
      bg: true,
    },
  ];

  const texts = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.show);
      } else {
        entry.target.classList.remove(styles.show);
      }
    });

    if (texts.current) {
      const targets = texts.current;
      targets.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (texts.current) {
        observer.disconnect();
      }
    };
  }, []);

  const sponsorArr: any = [];
  const medparArr: any = [];

  list.forEach((list) => {
    const item = (
      <GridItem
        w={{ base: "15rem", md: "15rem", lg: "15rem", xl: "17rem" }}
        _hover={{
          transform: "scale(1.1)",
          transition: "all .4s ease-in-out",
          zIndex: "100",
        }}
        my="auto">
        <a href={list.url}>
          <Image
            objectFit={"contain"}
            background={list.bg ? "white" : "transparent"}
            borderRadius={list.bg ? "14px" : "0"}
            p="2"
            src={list.src}
            alt={list.nama}
          />
        </a>
      </GridItem>
    );

    list.jenis === "sponsor" ? sponsorArr.push(item) : medparArr.push(item);
  });

  return (
    <Box>
      <Flex
        id="sponsors"
        className={styles.hidden}
        py={{ base: "10rem", md: "auto" }}
        h="100vh"
        w="100%"
        maxW="1366px"
        mx="auto"
        my="auto"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mb="5rem"
          fontSize={{ base: "3rem", md: "5rem", lg: "5rem" }}
          textAlign="center"
          filter={"drop-shadow(0 0 10px #c28824)"}>
          SPONSOR
        </Heading>
        <Grid
          id="gridSponsor"
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: "4rem", lg: "7rem" }}
          height="max-content"
          position="relative">
          {sponsorArr}
        </Grid>
      </Flex>
      {/* <Flex
        className={styles.hidden}
        display={props.onShow}
        h={{ sm: "auto", md: "100vh" }}
        w="70%"
        maxW="1366px"
        mx="auto"
        my="auto"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        mt="100px"
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mb="20px"
          fontSize={{ base: "2rem", md: "60px", lg: "5rem" }}
          textAlign="center"
          filter={"drop-shadow(0 0 10px #c28824)"}>
          MEDIA PARTNER
        </Heading>
        <Grid
          id="gridMedpar"
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: "4rem", lg: "7rem" }}
          height="max-content"
          position="relative">
          {medparArr}
        </Grid>
      </Flex> */}
    </Box>
  );
};

export { ListSponsor as ListSponsor };
