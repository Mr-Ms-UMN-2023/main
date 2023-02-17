import { AspectRatio, Box, GridItem, Image } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const DivisionCard = ({ data, onClick }: { data: any; onClick: any }) => {
  return (
    <AspectRatio
      cursor="pointer"
      minW="20rem"
      minH="16rem"
      overflow={"hidden"}
      borderRadius={"50%"}
      className={styles.cards}
      position={"relative"}
      _hover={{
        transform: "scale(1.1)",
        transition: "all .4s ease-in-out",
        zIndex: "100",
        filter: "drop-shadow(0 0 1rem #fbe58f)",
      }}
      onClick={onClick}
      ratio={1 / 1}
      bg="none">
      <Image
        loading="eager"
        bg="none"
        w="100%"
        h="100%"
        src={"/Assets/Division/Transparant/" + data.LogoTrans}
        alt="#"
        className={styles.card}
      />
    </AspectRatio>
  );
};

export { DivisionCard as DivisionCard };
