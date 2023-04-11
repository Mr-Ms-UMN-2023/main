import { Box, Flex, Img, Button, Text, Heading } from "@chakra-ui/react";
import { onPause, onPlay } from "@/GeneralFunction";
import styles from "@/styles/Home.module.css";

const PopUp = ({ data, setPop }: any) => {
  onPause();

  const exit = () => {
    setPop(null);
    onPlay();
  };
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
      className={styles.criteria}
      bgColor={"rgba(0, 0, 0, 0.8)"}>
      <Flex
        flexDir={"column"}
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
        <Button
          right={"1rem"}
          top="1rem"
          position={"absolute"}
          bg="transparent"
          border="1px solid #c28824"
          color="#c28824"
          onClick={() => exit()}>
          X
        </Button>
        <Heading
          fontSize={{ base: "1.5rem", md: "2rem" }}
          mt="3rem"
          textAlign={"center"}
          color="#c28824">
          {data[0].Judul}
        </Heading>

        <Flex
          zIndex={"2"}
          className={styles.customScroll}
          m="1rem"
          px={{ base: "1.5rem", md: "4rem" }}
          textAlign={"justify"}
          flexDir={"column"}
          alignItems="center"
          overflowY={"scroll"}>
          {" "}
          <ol type="1">
            {data[0].Isi.map((e: any, index: number) => {
              if (index == 1 && data[0].Judul == "Catatan") {
                return (
                  <li style={{ margin: "0.5rem 0" }} key={index}>
                    Semua informasi <b>WAJIB</b> diisi kecuali bagian prestasi
                    yang bersifat optional.{" "}
                  </li>
                );
              } else if (index == 2 && data[0].Judul == "Catatan") {
                return (
                  <li style={{ margin: "0.5rem 0" }} key={index}>
                    Foto yang dilampirkan <b>WAJIB</b> ukuran 3x4 cm, foto
                    berwarna dan terbaru (maksimal 1 bulan).
                  </li>
                );
              } else if (index == 9 && data[0].Judul == "Catatan") {
                return (
                  <li style={{ margin: "0.5rem 0" }} key={index}>
                    Peserta yang lolos <b>WAJIB</b> mengikuti tahap seleksi pada
                    hari Senin, 15 Mei 2023.
                  </li>
                );
              } else if (index == 10 && data[0].Judul == "Catatan") {
                return (
                  <li key={index}>
                    {e}
                    <ul style={{ margin: "0.5rem 0" }}>
                      <li>Blouse/kemeja putih sopan</li>
                      <li>Jeans berwarna gelap sopan</li>
                      <li>Pantofel/Sneakers (laki-laki)</li>
                      <li>Heels tertutup min. 5 cm (perempuan)</li>
                      <li>Make Up natural</li>
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li style={{ margin: "0.5rem 0" }} key={index}>
                    {e}
                  </li>
                );
              }
            })}
          </ol>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { PopUp as PopUp };
