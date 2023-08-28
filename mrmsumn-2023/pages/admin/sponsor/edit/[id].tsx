import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import { Text, Box, Container, Heading, Button, Flex, FormControl, FormLabel, Input, VStack, Checkbox } from '@chakra-ui/react';
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";



export default function Edit({data} : {data : any}){

    const router = useRouter();
    const {user, setUser} = useContext(UserContext);

    const [isChecked, setIsChecked] = useState(data.bg);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    useEffect(() => console.log(data.Sponsor_MedparID), []);


    const onSubmit = async (data : Inputs) => {
      const formData = new FormData();

      const bg = data?.bg ? true : false;

      formData.append("id", data?.id);
      formData.append("type", data?.type.toString());
      formData.append("src", selectedImage);
      formData.append("nama", data?.nama);
      formData.append("url", data?.url);
      formData.append("bg", new Boolean(data?.bg).toString());

      const response = await fetch("/api/sponsor_medpar", {
        method: "PUT",
        body: formData
      });

      const parsedResponse = await response.json(); 
      if (parsedResponse?.status == 200){
        router.push('/admin/sponsor');
      }
  }
  

    const handleImageChange = (e : any) => {
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
   

    type Inputs = {
      id : string,
      type : string, 
      src : FileList, 
      nama : string,
      url : string, 
      bg : boolean,
    };
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>({ criteriaMode: "all" }); 

    return (
        <Container maxW="container.lg" mt={8}>
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="lg" color="white">Edit Sponsor</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="start">
                <FormControl>
                    <Input type="text" {...register('type')} defaultValue={data?.type} hidden/>
                    <Input type="text" {...register('id')} defaultValue={data?.Sponsor_MedparID} hidden/>
                    <Input type="text"  {...register('nama')} defaultValue={data?.nama} placeholder="Nama Sponsor" mb='1rem' required/>
                    <Input type="text"  {...register('url')} defaultValue={data?.url} placeholder="Tautan" mb='1rem' />
                    {previewImage && (
                        <Box maxW="300px">
                            <img src={previewImage} alt="Preview" style={{ maxWidth: "100%" }} />
                        </Box>
                    )}  
                    {(data.src && !previewImage) && (
                        <Box maxW="300px">
                            <img src={data.src} alt="Preview" style={{ maxWidth: "100%" }} />
                        </Box>
                    )}                                          
                    <Button as="label" htmlFor="fileInput" colorScheme="blue">
                        Tambahkan Foto
                    </Button>
                    <input
                        id="fileInput"
                        type="file" 
                        accept="image/*"
                        {...register("src")}                        
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                    <Flex>
                        <FormLabel color='grey'>Tambahkan latar putih</FormLabel> 
                        <Checkbox isChecked={isChecked} {...register("bg")} onChange={handleCheckboxChange}  />                    
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


export async function getServerSideProps(context : any){
    const { req, res, params } = context;
    const APP_URL = process.env.NODE_ENV == "development" 
    ? "http://localhost:3000" 
    : process.env.APP_URL;

    try {
        
        const response = await fetch(APP_URL + `/api/sponsor_medpar?id=${params.id}`);

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