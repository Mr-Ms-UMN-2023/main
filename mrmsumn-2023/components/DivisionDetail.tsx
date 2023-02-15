import { Box, GridItem, Image } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const DivisionDetail = () => {
    return (
        <Box h='90vh' w='80vh' 
             zIndex={10}
             maxW='1000px'
             maxH='750px'
             bg='white' 
             position='fixed'
             mx='auto'
             my='auto'
             left={'50%'}
             top={'50%'}
             transform={'translate(-50%, -50%)'}
             >
            
        </Box>
    )
}

export {DivisionDetail as DivisionDetail}