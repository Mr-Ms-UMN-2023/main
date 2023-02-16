import { Box, GridItem, Image, Text, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const DivisionDetail = (data : any, ref : any) => {

    const detail = data.data;

    return (
        <Box h='82vh' w='80vh' 
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
             backgroundColor="#c28824"
             borderRadius={'5px'}
            //  ref={ref}
             >
            
            <Heading>{detail.name}</Heading>
            <Text fontWeight={'bold'}>{detail.jobdesk}</Text>        
            <Text>{detail.description}</Text>
        </Box>
    )
}

export {DivisionDetail as DivisionDetail}