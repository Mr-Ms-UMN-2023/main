import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const DivisionDetail = (data : any, ref : any) => {

    const detail = data.data;

    return (
        <Box h='90vh' w='80vh' 
             className={styles.popup}
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
            //  ref={ref}
             >
            
        <Text>wkwkwk {detail.name}</Text>

        </Box>
    )
}

export {DivisionDetail as DivisionDetail}