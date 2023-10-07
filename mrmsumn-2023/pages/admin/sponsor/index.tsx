import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import { Image, Box, Container, Heading, Button, Flex, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Sponsor(){

    const router = useRouter();
    const {user, setUser} = useContext(UserContext);
    const [serverSync, setServerSync] = useState(false);
    const [data, setData] = useState<any>([]);

    const deleteSponsor = async (e : any, id : any) => {
        if (!id || id == "") return;
        e.preventDefault();
        const response = await fetch( `/api/sponsor_medpar?id=${id}`, {
            method : "DELETE"
        });

        const parsedResponse = await response.json();
        if (parsedResponse?.status == 200){
            router.push('/admin/sponsor');
        }
    }

    

    const fetchData = async () => {
        const response = await fetch(`/api/sponsor_medpar?type=sponsor`);
        const parsedResponse = await response.json();      

        if (parsedResponse.status == 200){
            const list = parsedResponse.data;
            setData(list);
        }     
    }


    useEffect(()=>{

        fetchData();

        if (typeof window != undefined){
            setServerSync(true);
        }
    }, []);

    return (
        <Container maxW="container.lg" mt={8}>
        <Button onClick={()=>{router.push('/admin')}}>Kembali</Button>
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="lg" color="white">Daftar Sponsor</Heading>
          <Button onClick={()=>{router.push('/admin/sponsor/create')}}>Tambah Sponsor Baru</Button>
          <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Nama</Th>
                    <Th>Foto</Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                {serverSync && data.map((item : any) => 
                    <Tr key={item.Sponsor_MedparID}>
                        <Td>{item.nama}</Td>
                        <Image h="150px" w="150px" src={item.src}/>
                        <Td>
                            <Button _hover={{bg : '#1be614'}} onClick={()=>{router.push(`/admin/sponsor/edit/${item?.Sponsor_MedparID}`)}} bg='green' color='white'>Edit</Button>
                            <Button _hover={{bg : '#fe5858'}} onClick={(e)=>{deleteSponsor(e, item?.Sponsor_MedparID)}} bg='red' color='white'>Delete</Button>
                        </Td>
                    </Tr>                    
                )}
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