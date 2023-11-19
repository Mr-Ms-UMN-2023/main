import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import {
  Image,
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Grid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AdminNav } from "..";


export default function Sponsor() {
    const router = useRouter();
    const [data, setData] = useState<any>([]);

    const fetchData = async () => {
        const response = await fetch(`https://mrms2023.my.id/api/vote/statistic`);
        const parsedResponse = await response.json();
        if (parsedResponse.code == 200) {
          const list = parsedResponse.data;
          setData(list);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);    


    return (
        <Container maxW="container.lg" mt={8}>
            <AdminNav />
            <Button
                mt={"2rem"}
                onClick={() => {
                router.push("/admin");
                }}>
                Kembali
            </Button>            

            {/* <Grid mt={"2rem"} overflow={"scroll"} templateColumns="repeat(6, 1fr)">
                <GridItem p="1rem" border={"solid white 1px"}>
                Nama Kandidat
                </GridItem>
                <GridItem p="1rem" border={"solid white 1px"}>
                Jumlah Suara
                </GridItem>

                    {data.map((item: any) => {
                    return (
                        <>
                            <GridItem p="1rem" border={"solid white 1px"} key={item.id}>
                                {item.name}
                            </GridItem>
                            <GridItem p="1rem" border={"solid white 1px"}>
                                {item.total_vote}
                            </GridItem>
                        </>
                    );
                    })}
        </Grid> */}

            <Table>
                <Tbody>
                    <Tr>
                        <Td fontWeight={"bold"} color="white">Nama Kandidat</Td>
                        <Td fontWeight={"bold"} color="white">Jumlah Suara</Td>
                    </Tr>

                    {
                        data.map((item : any) => {
                            return (
                                <>
                                    <Tr key={item.id}>
                                        <Td color="gold">{item.name}</Td>
                                        <Td color="gold">{item.total_vote}</Td>
                                    </Tr>                                
                                </>
                            )
                        })
                    }


                </Tbody>
            </Table>

        </Container>        
    )
}