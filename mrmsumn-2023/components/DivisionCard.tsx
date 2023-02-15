import { Box, GridItem, Image } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";


const DivisionCard = ({logo} : {logo : any}) => {
    return (
        <GridItem h='175px' w='175px' position={'relative'} _hover={{
            transform : 'scale(1.1)',
            transition : 'all .5s ease-in-out'
        }}>
            <Image w='100%' h='100%' src={`/Assets/Division/${logo}`}/>
        </GridItem>
    )
}

export { DivisionCard as DivisionCard };