import { Flex, Box, Grid, GridItem, Image, Heading, Link, Skeleton } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import React, { useState, Suspense, useEffect, useRef } from "react";
import { ImageLoader } from './ImageLoader';
import { SkeletonTheme } from "react-loading-skeleton";

const ListSponsor = (props: any) => {
  const [loaded, setLoaded] = useState(false); 

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
    {
      jenis: "sponsor",
      src: "Assets/Sponsor/LOGO_REVO_PRINT_SHOP.png",
      nama: "Revo Print Shop",
      url: "https://www.revoprintshop.com/",
      bg: false,
    },
    {
      jenis: "sponsor",
      src: "Assets/Sponsor/LOGO_CJ.png",
      nama: "Christoper John",
      url: "",
      bg: false,
    }
  ];

  const sponsorArr: any = [];
  const medparArr: any = [];

  const skeletonArr:any = [];
  for(let i:number = 0; i < list.length; i++){
    const item = (
      // <ImageLoader width={'15rem'} height={'15rem'}/>
      <Skeleton width={'15rem'} height={'15rem'}></Skeleton>
    )

    skeletonArr.push(item);
}

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

  useEffect(() => {
    if(sponsorArr.length + medparArr.length === list.length){
      setLoaded(true);
    }

    console.log(sponsorArr.length);
    console.log(medparArr.length);
    console.log(loaded);
  }, [sponsorArr,  medparArr]);

  list.forEach((list) => {
    const item = (
      <GridItem
        display="block"
        w={{ base: "15rem", md: "15rem", lg: "15rem", xl: "17rem" }}
        _hover={{
          transform: "scale(1.1)",
          transition: "all .4s ease-in-out",
          zIndex: "100",
        }}
        m="auto">
        <Link href={list.url} target="_blank"
        display={list.nama == "" ? "none" : "block"}
        >
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

    list.jenis === "sponsor" ? sponsorArr.push(item) : medparArr.push(item);
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
          mt={{base: "0", xl: "2rem"}}
          mb={{base: "5rem", xl: "3rem"}}
          fontSize={{ base: "3rem", md: "5rem", lg: "5rem" }}
          textAlign="center"
          filter={"drop-shadow(0 0 10px #c28824)"}>
          SPONSOR
        </Heading>
            <Flex 
                m='0 auto'
                w='85%'
                // bg='red'
                height="max-content"  
                position="relative" 
                placeItems={"center"}
                alignItems="center"
                justifyContent={"center"}
                justifyItems={"center"} 
                columnGap={{base : '2rem', lg : '4rem'}}
                rowGap={{base:"4rem", lg:"1rem"}}                                                        
                flexWrap="wrap"                
              >
                {/* <Suspense fallback={<SkeletonLoader/>}> */}
                {/* <Suspense fallback={<Skeleton width={'15rem'} height={'15rem'}/>}> */}
                  {/* {!loaded &&           
                  <SkeletonTheme baseColor="#313131" highlightColor="#525252">
              <Skeleton width={'15rem'} height={'15rem'}></Skeleton>
          </SkeletonTheme>} */}
                  {!loaded && skeletonArr}
                  {/* {loaded && sponsorArr}   */}
                  {loaded && sponsorArr}
                {/* </Suspense> */}
              </Flex>                      
         {/* } */}


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
