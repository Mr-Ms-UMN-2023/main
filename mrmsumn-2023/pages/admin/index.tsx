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
import { useState, useEffect, useRef } from "react";

export default function Test() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="lg" color="white">
          Admin Dashboard
        </Heading>
        <Flex gap="1rem">
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
            Media Partner
          </Button>
          <Button
            mt={4}
            bg="#c28824"
            onClick={() => {
              router.push("/admin/transaction");
            }}>
            Transaksi
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}

const AdminNav = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="lg" color="white">
          Admin Dashboard
        </Heading>
        <Flex gap="1rem">
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
        </Flex>
      </Box>
    </Container>
  );
};

export { AdminNav };
