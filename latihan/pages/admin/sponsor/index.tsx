import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import { Image, Box, Container, Heading, Button, Flex, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

export default function Sponsor({data, fail = false, err = null}){

    const {user, setUser} = useContext(UserContext);
    useEffect(()=>console.log(data), []);

    return (
        <Container maxW="container.lg" mt={8}>
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="lg" color="white">Daftar Sponsor</Heading>
          <Button>Tambah Sponsor Baru</Button>
          <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Nama</Th>
                    <Th>Foto</Th>
                    <Th>Action</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map(item => 
                    <Tr>
                        <Td>{item.nama}}</Td>
                        <Image h="150px" w="150px" src={item.src}/>
                        <Td>
                            <Button _hover={{bg : '#1be614'}} bg='green' color='white'>Edit</Button>
                            <Button _hover={{bg : '#fe5858'}} bg='red' color='white'>Delete</Button>
                        </Td>
                    </Tr>                    
                )}
            </Tbody>
            </Table>
        </Box>
      </Container>
    );

}


export async function getServerSideProps(context){
    const { req, res, params } = context;
    const APP_URL = process.env.NODE_ENV == "development" 
    ? "http://localhost:3000" 
    : process.env.APP_URL;

    try {
        
        const response = await fetch(APP_URL + `/api/sponsor_medpar`);

        const parsedResponse = await response.json();      
        if (parsedResponse.status == 200){
            const data = parsedResponse.data;
            return {props : {data}}          
        }      
        
        return {
            props : {
                fail : true
            }
        }
  
  
    } catch (err) {
        return {
            props : {
                fail : true, 
                err
            }
        }
    }
  
  }