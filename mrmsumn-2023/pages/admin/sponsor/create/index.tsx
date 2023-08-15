import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import { Text, Box, Container, Heading, Button, Flex, FormControl, FormLabel, Input, VStack, Checkbox } from '@chakra-ui/react';
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";



export default function Test(){

    const {user, setUser} = useContext(UserContext);

    const [isChecked, setIsChecked] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
          setSelectedImage(file);
    
          const reader = new FileReader();
          reader.onload = () => {
            setPreviewImage(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setSelectedImage(null);
          setPreviewImage(null);
        }
    }

    return (
        <Container maxW="container.lg" mt={8}>
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="lg" color="white">Create New Sponsor</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="start">
                <FormControl>
                    <Input type="text" placeholder="Nama Sponsor" mb='1rem' required/>
                    <Input type="text" placeholder="Tautan" mb='1rem' />
                    {previewImage && (
                        <Box maxW="300px">
                            <img src={previewImage} alt="Preview" style={{ maxWidth: "100%" }} />
                        </Box>
                    )}                    
                    <Button as="label" htmlFor="fileInput" colorScheme="blue">
                        Tambahkan Foto
                    </Button>
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                    <Flex>
                        <FormLabel color='grey'>Tambahkan latar putih</FormLabel> 
                        <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />                    
                    </Flex>
                </FormControl>
                <Button type="submit" colorScheme="blue">
                    Simpan
                </Button>
            </VStack>
        </form>
        </Box>
      </Container>
    );
}