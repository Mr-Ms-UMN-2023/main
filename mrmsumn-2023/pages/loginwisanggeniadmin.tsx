import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { cookies } from 'next/headers';
import { Box, Flex, Text, Heading, Button, FormControl, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import UserContext from "@/contexts/UserContext";
import {setCookie} from "cookies-next";

export default function Login(){

    const router = useRouter();

    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleEmail = (e : any) => setEmail(e.target.value);
    const handlePassword = (e : any) => setPassword(e.target.value);    

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        const response = await fetch('api/auth/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email, password})
        })

        const data = await response.json();
        if (data.code == 200 && data.data.token){
            setCookie('token', data.data.token);
            setUser(data.data.user);
            router.push('/');
            return;
        }
    }

    return (
        <Flex 
            w="100%"
            h="100vh"
            justifyContent='center'
            alignItems={'center'}
        >
            <Flex
                bg="white"
                w="100%"
                maxW="568px"
                h="80%"
                maxH="880px"
                flexDirection={'column'}
                justifyContent='flex-start'
                alignItems={'center'}
                py='2rem'
            >
                <form onSubmit={handleSubmit} style={{width : '90%', maxWidth : '400px'}}>
                    <FormControl>
                        <Text fontWeight={'bold'}>Email Address</Text>
                        <Input type='email' value={email} onChange={handleEmail} name='email' border={`1px solid black`} mb='15px'/>

                        <Text fontWeight={'bold'}>Password</Text>
                        <Input type='password' value={password} onChange={handlePassword} name='password' border={`1px solid black`} mb='20px'/>

                        <Button w='100%' color='black' bg='#c28824' height='2.5rem' type="submit" _hover={{}}>Log In</Button>                   
                    </FormControl>    
                </form>                 

            </Flex>
        </Flex>
    )
}