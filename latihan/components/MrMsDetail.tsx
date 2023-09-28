import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

const MrMsDetail = (props: any) => {
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

  return (
    <Box>
      <Flex
        id="aboutUs"
        className={styles.hidden}
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
          textAlign="center"
          filter={'drop-shadow(0 0 10px #c28824)'}
          >
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
          filter={'drop-shadow(0 0 10px #c28824)'}          
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
          Wiracarita Pagelaran Wayang atau Dongeng Pertunjukan Wayang
          mengajarkan nilai - nilai baik yang berkaitan dengan kehidupan yang
          dicerminkan melalui karakter tokoh, cerita, dan unsur lainnya.
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
        className={`${styles.hidden}`}
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
          filter={'drop-shadow(0 0 10px #c28824)'}          
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
        className={styles.hidden}
        display={props.onShow}
        h={{ sm: "max-content", md: "100vh" }}
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
          filter={'drop-shadow(0 0 10px #c28824)'}          
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
    </Box>
  );
};

export { MrMsDetail as MrMsDetail };
