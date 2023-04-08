import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  const { user, setUser } = useContext(UserContext);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <ChakraProvider>
      <Head>
        <title>Mr. & Ms. UMN 2023</title>
        <meta name="description" content="Website Mr. & Ms. UMN 2023" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Assets/Logo/LogoMrMsUMN2023.png" />
      </Head>
        <Component {...pageProps} />
      </ChakraProvider>      
    </UserContext.Provider>

  );
}
