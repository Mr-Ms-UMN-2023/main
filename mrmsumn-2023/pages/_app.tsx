import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "@/contexts/UserContext";

export default function App({ Component, pageProps }: AppProps) {

  const { user, setUser } = useContext(UserContext);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>      
    </UserContext.Provider>

  );
}
