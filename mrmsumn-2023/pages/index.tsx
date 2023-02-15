import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import {
  Box,
  Img,
  Flex,
  Grid,
  Text,
  AspectRatio,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Loading, Navbar, DivisionCard } from "@/components";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home(props: any) {
  const router = useRouter();

  const [scrollY, setScrollY] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [scrollY2, setScrollY2] = useState(0);
  const [shiningShoonOp, setShiningShoonOp] = useState(0);

  const [loading, setLoading] = useState(false);
  const [loadingOpacity, setLoadingOpacity] = useState(1);
  const [preloadImage, setPreloadImage] = useState(true);
  const [autoPlayFlag, setAutoPlayFlag] = useState(false);
  const [show, setShow] = useState("none");

  const [divisions, setDivisions] = useState([
    "ANGGADA.png",
    "ANGGAJALI.png",
    "ARJUNA.png",
    "ASWIN.png",
    "BIMA.jpg",
    "BRATALARAS.jpg",
    "HANOMAN.png",
    "KRESNA.jpg",
    "NARADA.jpg",
    "SRIKANDI.png",
    "VYASA.jpg",
    "WISANGGENI.png",
    "WISNU.png",
  ]);

  const [teaser, setTeaser] = useState("");

  const mainBg = useRef<HTMLDivElement>(null);

  const content = useRef<HTMLDivElement>(null);

  const youtube = useRef<HTMLDivElement[]>([]);

  const texts = useRef<HTMLDivElement[]>([]);

  const handleScroll = () => {
    window.pageYOffset;
    let scroll = window.pageYOffset / 5;
    let oprec = document.getElementById("oprec")
      ? document.getElementById("oprec")?.offsetTop
      : 0;
    if (oprec && window.pageYOffset > oprec - 100) {
      document.getElementById("oprec")?.classList.add(styles.show);
    }
    setScrollY(scroll * 2.2);

    setScrollY2(scroll);

    let mainBgBright =
      mainBg?.current?.offsetHeight &&
      mainBg?.current?.offsetHeight - window.innerHeight > window.pageYOffset
        ? 1 -
          window.pageYOffset /
            (mainBg?.current?.offsetHeight - window.innerHeight)
        : 0;

    setBrightness(mainBgBright);

    if (mainBg?.current?.offsetHeight && 1 - mainBgBright < 0.45) {
      setShiningShoonOp(0);
    } else if (mainBg?.current?.offsetHeight && 1 - mainBgBright >= 0.8) {
      setShiningShoonOp(
        1 -
          (window.pageYOffset - mainBg?.current?.offsetHeight * 0.4) /
            (mainBg?.current?.offsetHeight * 0.3)
      );
    } else {
      mainBg?.current?.offsetHeight &&
        setShiningShoonOp(
          (window.pageYOffset - mainBg?.current?.offsetHeight * 0.1) /
            (mainBg?.current?.offsetHeight * 0.4)
        );
    }
  };

  const endVideo = () => {
    setLoadingOpacity(0);

    setTimeout(() => {
      setLoading(false);
      setShow("flex");
    }, 1100);
  };

  useEffect(() => {
    // Check for browser
    let userAgent = navigator.userAgent;

    if (userAgent.match(/firefox|fxios/i)) {
      setTeaser("https://www.youtube.com/embed/Wk-TvlzGrkQ?");
    } else {
      setTeaser("https://www.youtube.com/embed/Wk-TvlzGrkQ?mute=1");
    }

    setLoading(true);
    setPreloadImage(false);

    window.scrollTo(0, 0);

    window.addEventListener("scroll", handleScroll);

    // Set loading opacity timer

    // Set timer for loading

    // Fade in out animation

    // const observer = new IntersectionObserver((entries) => {
    //   const [entry] = entries;
    //   if (entry.isIntersecting) {
    //     entry.target.classList.add(styles.show);
    //   } else {
    //     entry.target.classList.remove(styles.show);
    //   }
    // });

    // if (texts.current) {
    //   const targets = texts.current;
    //   targets.forEach((el) => {
    //     observer.observe(el);
    //   });
    // }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // if (texts.current) {
      //   observer.disconnect();
      // }
    };
  }, []);

  useEffect(() => {
    if (scrollY >= 300 && !autoPlayFlag) {
      setAutoPlayFlag(true);
      setTeaser((teaser) => teaser + "&autoplay=1");
    }
  }, [scrollY]);

  return (
    <div>
      <Head>
        <title>Mr. & Ms. UMN 2023</title>
        <meta name="description" content="Website Mr. & Ms. UMN 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Assets/Logo/LogoMrMsUMN2023.png" />
      </Head>

      {loading ? (
        <Loading loadingOpacity={loadingOpacity} onEnded={endVideo} />
      ) : (
        <>
          {preloadImage && (
            <Flex
              h="100vh"
              w="100vw"
              position={"absolute"}
              bg="black"
              zIndex={20}></Flex>
          )}
          <Navbar />

          <Flex
            alignItems={"flex-end"}
            justifyContent={"center"}
            ref={mainBg}
            id="bg-main"
            minH={"260vh"}
            position={"relative"}>
            <Box
              top={"0px"}
              padding={"0px"}
              position={
                mainBg?.current?.offsetHeight
                  ? window.pageYOffset <=
                    mainBg?.current?.offsetHeight - window.innerHeight
                    ? "fixed"
                    : "relative"
                  : "fixed"
              }
              h="100vh"
              w="100vw">
              <Flex id="storyLine" position={"relative"} minH="100vh">
                <Flex
                  className={styles.bg_shining}
                  maxH="100vh"
                  overflow="hidden">
                  <Flex
                    zIndex="-1"
                    justifyContent={"center"}
                    display={"flex"}
                    position={"relative"}
                    maxW="100vw">
                    <AspectRatio
                      opacity={brightness}
                      position={"relative"}
                      minH="100vh"
                      minW={{
                        base: "calc(100vw + 1" + scrollY + "px )",
                        lg: "calc(100vw + " + scrollY + "px)",
                      }}
                      maxW="200vw"
                      overflow={"hidden"}
                      ratio={16 / 9}>
                      <Img
                        loading="eager"
                        minW={"100%"}
                        minH={"100%"}
                        src="/Assets/ShiningSoon/hasti.png"
                        alt="shining-soon bg 1"
                      />
                    </AspectRatio>
                  </Flex>

                  <AspectRatio
                    filter={"brightness(" + brightness + ")"}
                    ratio={1}
                    zIndex="1"
                    top="0px"
                    left={"0px"}
                    transform={"translate(-" + scrollY2 + "px,0px)"}
                    position={"absolute"}
                    minW={{
                      base: "70vw",
                      md: "20rem",
                      lg: "30rem",
                      xl: "50rem",
                    }}
                    minH={"100vh"}>
                    <Image
                      className={styles.leaf_left}
                      fill
                      alt="leaf"
                      src="/Assets/ShiningSoon/leaf-left.png"
                    />
                  </AspectRatio>
                  <AspectRatio
                    filter={"brightness(" + brightness + ")"}
                    ratio={12 / 16}
                    zIndex="1"
                    top="0px"
                    right={"0px"}
                    position={"absolute"}
                    transform={"translate(" + scrollY2 + "px,0px)"}
                    minW={{
                      base: "70vw",
                      md: "20rem",
                      lg: "30rem",
                      xl: "50rem",
                    }}
                    minH={"100vh"}>
                    <Image
                      className={styles.leaf_right}
                      fill
                      alt="leaf"
                      src="/Assets/ShiningSoon/leaf-right.png"
                    />
                  </AspectRatio>
                  <Img
                    zIndex={10}
                    opacity={scrollY <= 150 ? 1 : -scrollY / 230 + 1}
                    w={"4rem"}
                    position={"fixed"}
                    bottom={"60px"}
                    left={"50%"}
                    transform="translate(-50%)"
                    src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d00043816a6c695bcf1581a_scroll.gif"
                  />
                </Flex>
              </Flex>
            </Box>
            <Flex
              opacity={shiningShoonOp}
              zIndex={2}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%, calc(-50%))"}
              position={
                mainBg?.current?.offsetHeight &&
                window.pageYOffset <=
                  mainBg?.current?.offsetHeight - window.innerHeight * 0.5
                  ? "fixed"
                  : "relative"
              }
              minW={"fit-content"}
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}>
              <AspectRatio zIndex="100" w="20rem" ratio={1}>
                <Image
                  fill
                  src="/Assets/ShiningSoon/logomrmsfit.png"
                  alt="Logo Mr. & Ms. UMN"
                />
              </AspectRatio>
              <AspectRatio
                zIndex="100"
                w={{ base: "80vw", md: "40vw", xl: "20vw" }}
                ratio={20 / 9}>
                <Image
                  fill
                  src="/Assets/ShiningSoon/shinningsoon.png"
                  alt="text Shining Soon"
                />
              </AspectRatio>
            </Flex>
          </Flex>

          <Flex
            minH={"100vh"}
            minW={"100vw"}
            px="5vw"
            ref={content}
            justifyContent={"center"}
            alignItems="center"
            padding={"0px"}
            position={"relative"}>
            <AspectRatio
              ref={(el: HTMLDivElement) => youtube.current.push(el!)}
              transform={
                "scale(" +
                (content?.current?.offsetTop &&
                window.pageYOffset < content?.current?.offsetTop
                  ? window.pageYOffset / content?.current?.offsetTop
                  : 1) +
                ")"
              }
              opacity={
                content?.current?.offsetTop &&
                window.pageYOffset / content?.current?.offsetTop
              }
              minW={"90vw"}
              minH={"90vh"}
              ratio={{ base: 9 / 16, md: 16 / 9 }}>
              <iframe
                width="560"
                height="315"
                src={teaser}
                title="YouTube video player"
                allow="accelerometer; autoplay; unmute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; no user gesture is required"
                allowFullScreen></iframe>
            </AspectRatio>
          </Flex>
        </>
      )}

      <Flex
        id="aboutUs"
        className={styles.show}
        display={show}
        h="100vh"
        w="70%"
        maxW="1366px"
        mx="auto"
        my="auto"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mb="20px"
          fontSize={{ base: "2rem", md: "60px", lg: "5rem" }}
          textAlign="center">
          Mr. & Ms. UMN 2023
        </Heading>

        <Text
          fontSize={{ base: "auto", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
          Mr. & Ms. UMN merupakan salah satu kegiatan mahasiswa yang dinaungi
          oleh Badan Eksekutif Mahasiswa (BEM) Universitas Multimedia Nusantara
          sebagai ajang pencarian duta kampus UMN yang memiliki peranan untuk
          mewujudkan generasi penerus bangsa yang ekspresif, inovatif, kreatif,
          dan adaptif, serta memaksimalisasikan potensi yang dimiliki oleh para
          mahasiswa/i UMN guna mewujudkan dampak positif bagi civitas akademika
          UMN serta lingkungan sekitar.
        </Text>
      </Flex>

      <Flex
        className={styles.show}
        display={show}
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
          textAlign="center">
          Konsep Kegiatan <br /> Mr. & Ms. UMN 2023
        </Heading>
        <Heading
          mb="20px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
          color="#c28824">
          Wiracarita Pagelaran Wayang
        </Heading>

        <Text
          fontSize={{ base: "auto", lg: "1.5rem" }}
          mb="20px"
          textAlign={"justify"}
          color="#c28824">
          Wiracarita Pagelaran Wayang Wiracarita Pagelaran Wayang atau Dongeng
          Pertunjukan Wayang mengajarkan nilai - nilai baik yang berkaitan
          dengan kehidupan yang dicerminkan melalui karakter tokoh, cerita, dan
          unsur lainnya.
        </Text>
        <Text
          fontSize={{ base: "auto", lg: "1.5rem" }}
          mb="20px"
          textAlign={"justify"}
          color="#c28824">
          Pewayangan Bharatayudha yang menceritakan tentang kisah Pandawa dan
          Kurawa dalam memperebutkan takhta Hastinapura. Dalam perebutan
          tersebut Pandawa dan Kurawa melewati banyak sayembara, peperangan, dan
          rintangan.
        </Text>
        <Text
          fontSize={{ base: "auto", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
          Pewayangan Bharatayudha mengajarkan pendengar dan penonton untuk tidak
          melawan saudara, teman-teman, serta orang yang disayangi. Dengan
          Wiracarita Bharatayudha diharapkan para peserta dan internal Mr. & Ms.
          UMN 2023 mampu memiliki semangat dan daya juang untuk mengejar hal
          yang ia perjuangkan layaknya Pandawa saat melewati rintangan untuk
          memperebutkan takhta.
        </Text>
      </Flex>

      <Flex
        className={`${styles.show}`}
        display={show}
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
          textAlign="center">
          Tema Mr. & Ms. UMN 2023
        </Heading>

        <Heading
          fontSize={{ base: "1.5rem", md: "2rem" }}
          mb="20px"
          textAlign={"center"}
          color="#c28824">
          Arunika
        </Heading>

        <Text
          fontSize={{ base: "auto", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
          Arunika diambil dari bahasa Sansekerta dengan arti cahaya matahari
          yang terbit. Seperti cahaya matahari yang terbit, Mr. & Ms. UMN 2023
          mengangkat tema Arunika dengan harapan peserta Mr. & Ms. UMN 2023
          mampu menemukan cahaya baru dalam dirinya, berkembang menjadi pribadi
          yang lebih bersinar, dan dapat menjadi cahaya bagi orang lain dan
          sekitar. Tema Mr. & Ms. UMN 2023 ini melanjutkan tema sebelumnya yaitu
          Muruhita yang berarti Berguru dan Mengabdi. Dengan pembelajaran dan
          bekal yang telah didapat, diharapkan tidak berhenti sebatas berguru
          dan mengabdi saja, tetapi dapat disebarluaskan layaknya Arunika yang
          memberi dampak luas ke lingkungan sekitar.
        </Text>
      </Flex>
      <Flex
        className={styles.show}
        display={show}
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
          textAlign="center">
          Tagline <br />
          Mr. & Ms. UMN 2023
        </Heading>
        <Heading
          mb="20px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
          color="#c28824">
          {'"Shine To Create History"'}
        </Heading>
        <Text
          fontSize={{ base: "auto", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
          Sebuah pertunjukan wayang tidak akan berjalan tanpa adanya cahaya
          latar Blencong. Wayang berwarna emas akan lebih bersinar dan hidup
          jika terkena cahayanya. Melalui tagline ini, semua pihak Mr. & Ms. UMN
          2023 diharapkan dapat mengembangkan karakteristik ekspresif, inovatif,
          kreatif, dan adaptif lewat cahaya arunika sehingga mampu bersinar dan
          membangun sejarah yang abadi.
        </Text>
      </Flex>

      <Flex
        id="oprec"
        className={styles.show}
        display={show}
        h={{ sm: "auto", md: "200vh" }}
        w="70%"
        maxW="1366px"
        mx="auto"
        my="auto"
        mb="100px"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        mt="100px"
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mb="20px"
          fontSize={{ base: "1rem", md: "25px", lg: "3rem" }}
          textAlign="center">
          Open <br />
          Recruitment
        </Heading>        
        <Flex     
          height="auto"
          width="100%"
          position="relative"
          gap={"5px"}
          placeItems={"center"}
          alignItems="center"
          justifyContent={"center"}
          justifyItems={"center"}
          flexWrap="wrap"
          // templateRows='1fr 1fr'
          // templateColumns={{
          //     base : 'repeat(1, 1fr)',
          //     sm : 'repeat(2, 1fr)', 
          //     md : 'repeat(3, 1fr)',
          //     lg : 'repeat(4, 1fr)',
          //     xl : 'repeat(5, 1fr)'                                                       
          // }}
        >

            {divisions.map((logo) => <DivisionCard key={logo} logo={logo}/>)}

        </Flex>

        <Button className={styles.oprecButton} colorScheme={'none'} mt='30px' border={'1px solid white'} borderRadius={'2px'}           
                color="white" 
                h="auto" 
                px="10px"
                py="15px"
                onClick={() => router.push("https://bit.ly/DaftarMahesa")}
                _hover={{
                  transform : "scale(1.1)",
                  transition : "all .5s ease-in-out"              
                }}                
                >
            <Heading fontSize={{md : "1rem"}} mx={{base : '0', md : '30px'}}>
                Foresee Your Destiny
            </Heading>
        </Button>
      </Flex>
    </div>
  );
}
