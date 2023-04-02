import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

const Faq = (props: any) => {
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
    <Box mb={{base : '3rem', md : 'none'}}>
      <Flex
        id="aboutUs"
        className={styles.hidden}
        display={props.onShow}        
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
          mb="20px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
          color="#c28824"
          filter={'drop-shadow(0 0 10px #c28824)'}          
          >
            Apa saja tugas dari Mr. & Ms. UMN?
        </Heading>

        <Text
          fontSize={{ base: "1.2rem", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
            Sebagai role model dan citra diri civitas akademika Universitas Multimedia Nusantara 
            dengan menerapkan manner, mindful, dan masculine bagi laki-laki dan behaviour, 
            brain, dan beauty bagi perempuan yang siap untuk mengabdi serta memberikan dampak baik, 
            tidak hanya bagi lingkungan di dalam kampus, melainkan juga di luar kampus.
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
          mb="20px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
          color="#c28824"
          filter={'drop-shadow(0 0 10px #c28824)'}          
          >
            Untuk mendaftar sebagai calon Mr. & Ms. UMN, 
            apakah kita mendaftar secara individu atau berpasangan?
        </Heading>
        <Text
          fontSize={{ base: "1.2rem", lg: "1.5rem" }}
          mb="20px"
          textAlign={"justify"}
          color="#c28824">
            Untuk mendaftar sebagai calon Mr. & Ms. UMN, diharuskan mendaftar secara individu. 
            Kandidat akan dipasangkan setelah berpartisipasi dan melalui beberapa kegiatan.
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
          mb="20px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
          color="#c28824"
          filter={'drop-shadow(0 0 10px #c28824)'}          
          >
            Pakaian seperti apa yang harus dikenakan oleh Mr. & Ms. UMN di lingkungan kampus?
        </Heading>
        <Text
          fontSize={{ base: "1.2rem", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
            Grooming tubuh yang baik, potongan rambut yang bersih, dan pakaian yang rapi serta 
            sopan sesuai ketentuan yang telah ditetapkan oleh kampus.
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
          mb="20px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
          color="#c28824"
          filter={'drop-shadow(0 0 10px #c28824)'}          
          >
            Apa saja kualitas yang diperlukan untuk menjadi kandidat Mr. & Ms. UMN?
        </Heading>
        <Text
          fontSize={{ base: "1.2rem", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
            Para mahasiswa/i UMN yang memiliki tekad untuk mengembangkan potensinya, 
            berani melangkah, dan siap dibentuk serta percaya bahwa nilai dirinya
            dapat berdampak baik bagi almamater, persada, dan sesama.
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
          mb="20px"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          textAlign={"center"}
          color="#c28824"
          filter={'drop-shadow(0 0 10px #c28824)'}          
          >
            Kapan periode pendaftaran dibuka untuk individu yang tertarik menjadi kandidat Mr. & Ms. UMN?
        </Heading>
        <Text
          fontSize={{ base: "1.2rem", lg: "1.5rem" }}
          textAlign={"justify"}
          color="#c28824">
            Pendaftaran untuk Mr. & Ms. UMN 2023 akan secara resmi dibuka pada Grand Opening: Hastinapura.
        </Text>
      </Flex>

    </Box>
  );
};

export { Faq as Faq };
