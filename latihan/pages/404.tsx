import Head from "next/head";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return (
    <>
      <Head>
        <title>Mr. & Ms. UMN 2023</title>
        <meta name="description" content="Website Mr. & Ms. UMN 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Assets/Logo/LogoMrMsUMN2023.png" />
      </Head>
      <Flex bg={"black"} justifyContent="center" alignItems="center" >
        <img
          width={"60%"}
          src="/Assets/Logo/LogoMrMsUMN2023.png"
        />
      </Flex>
    </>
  );
}
