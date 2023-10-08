import { useContext } from "react";
import UserContext from "@/contexts/UserContext";
import { Text, Box, Container, Heading, Button, Flex, FormControl, FormLabel, Input, VStack, Checkbox } from '@chakra-ui/react';
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";


export default function Create(){

  const router = useRouter();
    const {user, setUser} = useContext(UserContext);

    const [isChecked, setIsChecked] = useState(false);
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<any>(null);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };


    const onSubmit = async (data : Inputs) => {
      const formData = new FormData();

      console.log(data?.bg);

      formData.append("type", data?.type.toString());
      formData.append("src", selectedImage ? selectedImage : "");
      formData.append("nama", data?.nama);
      formData.append("url", data?.url);
      formData.append("bg", data?.bg);

      console.log(formData);


      const response = await fetch("/api/sponsor_medpar", {
        method: "POST",
        body: formData
      });

      const parsedResponse = await response.json(); 
      if (parsedResponse?.status == 201){
        router.push('/admin/medpar');
      }
  }
  

    const handleImageChange = (e : any) => {
      const file = e.target.files[0];

      if (file) {
        const imageURL = URL.createObjectURL(file);        
        setSelectedImage(file);
        setPreviewImage(imageURL);		  
 //       setSelectedImage(file);

   //     const reader = new FileReader();
    //    reader.onload = () => {
	//	const data = reader?.result ? reader?.result : null
      //    setPreviewImage(data);
       // };
        //reader.readAsDataURL(file);
      } else {
        setSelectedImage(null);
        setPreviewImage(null);
      }
  }
   

    type Inputs = {
      type : number, 
      src : FileList | null, 
      nama : string,
      url : string, 
      bg : string,
    };
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>({ criteriaMode: "all" }); 

    return (
        <Container maxW="container.lg" mt={8}>
                  <Button onClick={()=>{router.push('/admin/medpar')}}>Kembali</Button>
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="lg" color="white">Create New Media Partner</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="start">
                <FormControl>
                    <Input type="text" {...register('type')} value={2} hidden/>
                    <Input type="text"  {...register('nama')} placeholder="Nama Media Partner" mb='1rem' required/>
                    <Input type="text"  {...register('url')} placeholder="Tautan" mb='1rem' />
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