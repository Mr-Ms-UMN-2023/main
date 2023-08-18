import { useContext } from "react";
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

  return (
    <Container maxW="container.lg" mt={8}>
      <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="lg" color="white">
          Daftar Media Partner
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nama</Th>
              <Th>Foto</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>John Doe</Td>
              <Td>30</Td>
              <Td>
                <Button _hover={{ bg: "#1be614" }} bg="green" color="white">
                  Edit
                </Button>
                <Button _hover={{ bg: "#fe5858" }} bg="red" color="white">
                  Delete
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Jane Smith</Td>
              <Td>25</Td>
              <Td>
                <Button _hover={{ bg: "#1be614" }} bg="green" color="white">
                  Edit
                </Button>
                <Button _hover={{ bg: "#fe5858" }} bg="red" color="white">
                  Delete
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Michael Johnson</Td>
              <Td>40</Td>
              <Td>
                <Button _hover={{ bg: "#1be614" }} bg="green" color="white">
                  Edit
                </Button>
                <Button _hover={{ bg: "#fe5858" }} bg="red" color="white">
                  Delete
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
}
