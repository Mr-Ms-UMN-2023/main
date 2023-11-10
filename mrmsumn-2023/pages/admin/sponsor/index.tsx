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
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { AdminNav } from "..";

export default function Sponsor() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [serverSync, setServerSync] = useState(true);
  const [data, setData] = useState<any>([]);

  const deleteSponsor = async (e: any, id: any) => {
    if (!id || id == "") return;
    e.preventDefault();
    const response = await fetch(
      `https://mrms2023.my.id/api/sponsor_medpar/get/sponsors`,
      {
        method: "DELETE",
      }
    );

    const parsedResponse = await response.json();
    if (parsedResponse?.status == 200) {
      router.push("/admin/sponsor");
    }
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://mrms2023.my.id/api/sponsor_medpar/get/sponsors`
    );
    const parsedResponse = await response.json();

    if (parsedResponse.code == 201) {
      const list = parsedResponse.data;
      console.log(list);
      setData(list);
    }
  };

  useEffect(() => {
    fetchData();

    // if (typeof window != undefined) {
    //   setServerSync(true);
    // }
  }, []);

  return (
    <Container maxW="container.lg" mt={8}>
      <AdminNav />
      <Button
        mt="2rem"
        onClick={() => {
          router.push("/admin");
        }}>
        Kembali
      </Button>
      <Box
        mt="2rem"
        overflow={"scroll"}
        p={6}
        shadow="md"
        borderWidth="1px"
        borderRadius="md">
        <Heading size="lg" color="white">
          Daftar Sponsor
        </Heading>
        <Button
          onClick={() => {
            router.push("/admin/sponsor/create");
          }}>
          Tambah Sponsor Baru
        </Button>
        <Table color={"white"} variant="simple">
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
                          `/admin/sponsor/edit/${item?.Sponsor_MedparID}`
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

//         const response = await fetch(APP_URL + `/api/sponsor_medpar?type=sponsor`);

//         const parsedResponse = await response.json();
//         console.log(parsedResponse)
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
