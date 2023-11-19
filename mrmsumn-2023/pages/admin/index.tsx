import { useContext } from "react";
import { useRouter } from "next/router";
import UserContext from "@/contexts/UserContext";
import {
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { getCookies } from "cookies-next";
import { useState, useEffect, useRef } from "react";

export default function Test() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  return (
    <AdminNav/>
  );
}

const AdminNav = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log(user);
  const router = useRouter();

  const [ role, setRole ] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://mrms2023.my.id/api/self",
        {
          headers: {
            Authorization: `Bearer ` + getCookies().token,
          },
        }
      );

      const parsedResponse = await response.json();

      if (parsedResponse.code == 200) {
          const data = parsedResponse.data;
          console.log(data);
          setRole(data?.role)
      }
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchData();
  },[]);
  
  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="lg" color="white">
          Admin Dashboard
        </Heading>
        <Flex gap="1rem">

          {
            role == "bima" ?
              <>
              <Button
                mt={4}
                bg="#c28824"
                onClick={() => {
                  router.push("/admin/vote");
                }}>
                Voting
              </Button>
              </>

              : 

              (
                role == "wisanggeni" 
                  ? 
                  <>
                  <Button
                    mt={4}
                    bg="#c28824"
                    onClick={() => {
                      router.push("/admin/ticket/scan");
                    }}>
                    Scan Tiket Himalaya
                  </Button>
                  <Button
                    mt={4}
                    bg="#c28824"
                    onClick={() => {
                      router.push("/admin/ticket");
                    }}>
                    Presensi Tiket
                  </Button>                  
                  </>

                  :
                  <>
                  <Button
                  mt={4}
                  bg="#c28824"
                  onClick={() => {
                    router.push("/admin/sponsor");
                  }}>
                  Sponsor
                </Button>
                <Button
                  mt={4}
                  bg="#c28824"
                  onClick={() => {
                    router.push("/admin/medpar");
                  }}>
                  MedPar
                </Button>
                <Button
                  mt={4}
                  bg="#c28824"
                  onClick={() => {
                    router.push("/admin/transaction");
                  }}>
                  Transaksi
                </Button>
                <Button
                  mt={4}
                  bg="#c28824"
                  onClick={() => {
                    router.push("/admin/vote");
                  }}>
                  Voting
                </Button>  
                <Button
                    mt={4}
                    bg="#c28824"
                    onClick={() => {
                      router.push("/admin/ticket/scan");
                    }}>
                    Scan Tiket Himalaya
                  </Button>
                  <Button
                    mt={4}
                    bg="#c28824"
                    onClick={() => {
                      router.push("/admin/ticket");
                    }}>
                    Presensi Tiket
                  </Button>                                 
                  </>                  
              )
          }

        </Flex>
      </Box>
    </Container>
  );
};

export { AdminNav };
