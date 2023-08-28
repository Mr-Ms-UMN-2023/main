import {
  Flex,
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Link,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

const ListSponsor = ({ list } : any) => {

  // const list = [
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/LOGO_KAY_COLLECTION.png",
  //     nama: "Kay Collection",
  //     url: "https://www.kaycollection.com/",
  //     bg: true,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/Logo_PUYO_DEFAULT.png",
  //     nama: "PUYO Desserts",
  //     url: "https://www.puyodesserts.com/",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/LOGO_MASAMI.png",
  //     nama: "Masami",
  //     url: "http://www.masamishouko.com/",
  //     bg: true,
  //   },

  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/LOGO_REVO_PRINT_SHOP.png",
  //     nama: "Revo Print Shop",
  //     url: "https://www.revoprintshop.com/",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/LOGO_CJ.png",
  //     nama: "Christoper John",
  //     url: "https://www.instagram.com/christjhn",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/Logo Myca Tulisan Putih.png",
  //     nama: "Myca",
  //     url: "https://www.instagram.com/mycaflorist/",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/Logo Libreath.png",
  //     nama: "Libreath",
  //     url: "https://www.instagram.com/libreath.florist",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/Logo Dennis Catering.jpg",
  //     nama: "Catering",
  //     url: "https://www.instagram.com/denniscatering_",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/Logo Mile.jpg",
  //     nama: "Miliè",
  //     url: "https://www.instagram.com/milieofficial",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/LOGO_implora.jpg",
  //     nama: "Implora",
  //     url: "",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/LOGO_chi.jpg",
  //     nama: "Chi Forest",
  //     url: "https://chiforest.com",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "Assets/Sponsor/LOGO_msp.jpg",
  //     nama: "MSP Film Equipment",
  //     url: "https://msprental.com/",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "https://cdn.discordapp.com/attachments/1125453534062719016/1141058868353445918/Logo_Roti_Bakar_88.png",
  //     nama: "Rotbak 88",
  //     url: "https://rotibakar88.id",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "https://cdn.discordapp.com/attachments/1125453534062719016/1141058868105969745/logo-tiketbox.png",
  //     nama: "Tiketbox",
  //     url: "https://tiketbox.com",
  //     bg: false,
  //   },
  //   {
  //     jenis: "sponsor",
  //     src: "https://cdn.discordapp.com/attachments/1125453534062719016/1141058867829166170/Logo_MuA_Gareulis_copy.png",
  //     nama: "Gareulis",
  //     url: "https://www.instagram.com/mua.gareulis",
  //     bg: false,
  //   },
  // ];

  const texts = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    console.log(list)
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

  useEffect(() => {
    console.log(sponsorArr.length);
  }, [sponsorArr]);

  list.forEach((list) => {
    const item = (
      <GridItem
        display={list.nama == "" ? { base: "none", lg: "block" } : "block"}
        w={{ base: "15rem", md: "15rem", lg: "15rem", xl: "17rem" }}
        _hover={{
          transform: "scale(1.1)",
          transition: "all .4s ease-in-out",
          zIndex: "100",
        }}
        m="auto">
        <Link
          href={list.url}
          target="_blank"
          display={list.nama == "" ? "none" : "block"}>
          <Image
            objectFit={"contain"}
            background={list.bg ? "white" : "transparent"}
            borderRadius={list.bg ? "14px" : "0"}
            p="2"
            src={list.src}
            alt={list.nama}
          />
        </Link>
      </GridItem>
    );

    list.type == 1 ? sponsorArr.push(item) : medparArr.push(item);
  });

  return (
    <Box>
      <Flex
        id="sponsors"
        className={styles.hidden}
        py={{ base: "10rem", md: "auto" }}
        h="auto"
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
          mt={{ base: "0", xl: "2rem" }}
          mb={{ base: "5rem", xl: "3rem" }}
          fontSize={{ base: "3rem", md: "5rem", lg: "5rem" }}
          textAlign="center"
          filter={"drop-shadow(0 0 10px #c28824)"}>
          SPONSOR
        </Heading>

        {sponsorArr.length % 3 == 0 ? (
          <Grid
            // bg='yellow'
            id="gridSponsor"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
            columnGap="5rem"
            rowGap={{ base: "4rem", lg: "1rem" }}
            height="max-content"
            justifyContent="center"
            alignItems="center"
            position="relative">
            {sponsorArr}
          </Grid>
        ) : (
          <Flex
            m="0 auto"
            w="85%"
            // bg='red'
            height="max-content"
            position="relative"
            placeItems={"center"}
            alignItems="center"
            justifyContent={"center"}
            justifyItems={"center"}
            columnGap={{ base: "2rem", lg: "4rem" }}
            rowGap={{ base: "4rem", lg: "1rem" }}
            flexWrap="wrap">
            {sponsorArr}
          </Flex>
        )}
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


