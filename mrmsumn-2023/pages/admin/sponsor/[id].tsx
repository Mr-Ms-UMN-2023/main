import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import { Box, Container, Heading, Button, Flex } from '@chakra-ui/react';
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";



export default function Test(){

    const {user, setUser} = useContext(UserContext);

    return (
        <Container maxW="container.lg" mt={8}>
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="lg" color="white">Sponsor</Heading>
        </Box>
      </Container>
    );
}