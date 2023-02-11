import { Box, AspectRatio, Image, Text, position } from "@chakra-ui/react";


const Loading = () => {
    return (
       <Box 
       h='100vh' 
       w='100%'  
       maxW='100%' 
       position='fixed'
       display='flex' 
       alignItems='center' 
       justifyContent={'center'}
        top='0' 
        left='0'
       >
            <video src={'/Assets/Video/intro.mp4'}
            autoPlay
            muted controls disablePictureInPicture
            width={'100%'}
            height={'100%'}
            style={{
                objectFit : 'cover',
                maxWidth : '100%',
                minHeight : '100vh'
            }}
            ></video>
       </Box>
    )

}

export default Loading;

// src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'