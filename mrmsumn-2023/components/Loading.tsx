import { Box, AspectRatio, Image, Text, position } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

const Loading = ({loadingOpacity} : {loadingOpacity : number}) => {
    return (
       <Box 
       className={styles.loading_box}
       h='100vh' 
       w='100vw'  
       maxW='100%' 
       maxH='100%'
       position='fixed'
       display='flex' 
       alignItems='center' 
       justifyContent={'center'}
       opacity={loadingOpacity}
       transition={'opacity 1s ease-in-out'}
       top='0' 
       left='0'
       >
            <video src={'/Assets/Video/intro.mp4'}
            className={styles.loading_video}
            autoPlay
            muted controls disablePictureInPicture 
            width={'100%'}
            height={'100%'}
            style={{
                pointerEvents : 'none',
                touchAction : 'none',
                objectFit : 'cover',
                maxWidth : '100%',
                imageRendering : 'pixelated',
                imageResolution : 'inherit'
            }}
            ></video>
       </Box>
    )

}

export default Loading;

// src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'