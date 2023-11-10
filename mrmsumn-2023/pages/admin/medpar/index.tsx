import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import {
  Image,
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
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AdminNav } from "..";

export default function Sponsor() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [serverSync, setServerSync] = useState(false);
  const [data, setData] = useState<any>([]);

  const deleteSponsor = async (e: any, id: any) => {
    if (!id || id == "") return;
    e.preventDefault();
    const response = await fetch(`/api/sponsor_medpar?id=${id}`, {
      method: "DELETE",
    });

    const parsedResponse = await response.json();
    if (parsedResponse?.status == 200) {
      router.push("/admin/medpar");
    }
  };

  const fetchData = async () => {
    const response = await fetch(`/api/sponsor_medpar?type=medpar`);
    const parsedResponse = await response.json();
    if (parsedResponse.status == 200) {
      const list = parsedResponse.data;
      setData(list);
    }
  };

  useEffect(() => {
    fetchData();

    if (typeof window != undefined) {
      setServerSync(true);
    }
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
      <Box
        mt={"2rem"}
        overflow={"scroll"}
        p={6}
        shadow="md"
        borderWidth="1px"
        borderRadius="md">
        <Heading size="lg" color="white">
          Daftar Media Partner
        </Heading>
        <Button
          onClick={() => {
            router.push("/admin/medpar/create");
          }}>
          Tambah Media Partner Baru
        </Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nama</Th>
              <Th>Foto</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {serverSync &&
              data.map((item: any) => (
                <Tr key={item.Sponsor_MedparID}>
                  <Td>{item.nama}</Td>
                  <Td>
                    <Image h="150px" w="150px" src={item.src} />
                  </Td>

                  <Td>
                    <Button
                      _hover={{ bg: "#1be614" }}
                      onClick={() => {
                        router.push(
                          `/admin/medpar/edit/${item?.Sponsor_MedparID}`
                        );
                      }}
                      bg="green"
                      color="white">
                      Edit
                    </Button>
                    <Button
                      _hover={{ bg: "#fe5858" }}
                      onClick={(e) => {
                        deleteSponsor(e, item?.Sponsor_MedparID);
                      }}
                      bg="red"
                      color="white">
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
}

// export async function getServerSideProps(context : any){
//     const { req, res, params } = context;
//     const APP_URL = process.env.APP_URL;

//     try {

//         const response = await fetch(APP_URL + `/api/sponsor_medpar?type=medpar`);

//         const parsedResponse = await response.json();
//         if (parsedResponse.status == 200){
//             const data = parsedResponse.data;
//             return {props : {data}}
//         }

//         return {
//             props : {
//                 fail : true
//             }
//         }

//     } catch (err) {
//         return {
//             props : {
//                 fail : true,
//                 err
//             }
//         }
//     }

//   }
