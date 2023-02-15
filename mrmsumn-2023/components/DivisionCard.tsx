import { AspectRatio, Box, GridItem, Image } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";


const DivisionCard = ({data, onClick} : {data : any, onClick : any}) => {
    return (
        <AspectRatio h='280px' w='280px' 
                className={styles.cards}
                position={'relative'} 
                _hover={{
                    transform : 'scale(1.1)',
                    transition : 'all .5s ease-in-out'
                }}
                onClick={onClick}
                ratio={1 / 1}    
                bg='none'            
                >
            <Image bg='none'  w='100%' h='100%' src={`/Assets/Division/${data.logo}`} alt='#' className={styles.card}
                // _hover={{
                //     filter : 'drop-shadow(0 0 0.75rem crimson)',
                //     transition : 'all .5s ease-in-out'
                // }}
            />
        </AspectRatio>
    )
}

export { DivisionCard as DivisionCard };