import { Flex, Box, Grid, GridItem, Image, Heading, Link } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";

const ListMedpar = ({list} : any) => {

  const texts = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    console.log(list);
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

  useEffect(() => {console.log(sponsorArr.length)}, [sponsorArr])

  list.forEach((data : any) => {
    const item = (
      <GridItem
        display={data.nama == "" ? {base: "none", lg: "block"} : "block"}
        w={{ base: "15rem", md: "15rem", lg: "15rem", xl: "17rem" }}
        _hover={{
          transform: "scale(1.1)",
          transition: "all .4s ease-in-out",
          zIndex: "100",
        }}
        m="auto">
        <Link href={data.url} target="_blank"
        display={data.nama == "" ? "none" : "block"}
        >
        <Image
            objectFit={"contain"}
            background={data.bg ? "white" : "transparent"}
            borderRadius={data.bg ? "14px" : "0"}
            p="2"
            margin="0 auto"
            src={data.src}
            alt={data.nama}
        />
        </Link>        
      </GridItem>
    );

    // list.type === 2 ? sponsorArr.push(item) : medparArr.push(item);
	  sponsorArr.push(item)
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
          MEDIA PARTNER
        </Heading>

        {sponsorArr.length % 3 == 0
        
            ?
              <Grid
                  // bg='yellow'
                  id="gridSponsor"
                  templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
                  columnGap="5rem"
                  rowGap={{base:"4rem", lg:"1rem"}}
                  height="max-content"
                  justifyContent='center'
                  alignItems='center'
                  position="relative">
                  {sponsorArr}
              </Grid>

            : <Flex 
                m='0 auto'
                w='85%'
                // bg='red'
                height="max-content"  
                position="relative" 
                placeItems={"center"}
                alignItems="center"
                justifyContent={"center"}
                justifyItems={"center"} 
                columnGap={{base : '2rem', lg : '3.5rem'}}
                rowGap={{base:"4rem", lg:"2.5rem"}}                                                        
                flexWrap="wrap"                
              >
                {sponsorArr}
              </Flex>
        }


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

export { ListMedpar as ListMedpar };