import {
    Box,
    Flex,
    Img,
    Text,
    Heading,
    Grid,
    GridItem,
    Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";


const BoxVote = (props) => {
    const [vote, setVote] = useState(0);
    const [voted, setVoted] = useState(false);

    const HandleVote = () => {
        if(!voted) {
            setVote(vote + 1);
            setVoted(true);
        }
    }

    useEffect(() => {
        console.log(vote);
    }, [vote]);

    return(
        <Flex
            w="20vw"
            h="75vh"
            mx="auto"
            my="5vw"
            flexDirection={"column"}
            bgColor={"transparant"}
            border="1px"
            borderColor="#c28824"
            borderRadius="20px"
            >
            <Text
                color="#c28824"
                my="1vw"
                mx="auto"
                fontSize="1.5vw"
            >Pasangan {props.pasangan}</Text>
            <Img
                src="/Assets/finalist22/54768.jpg"
                maxH={{ base: "80vh", md: "60vh" }}
                maxW={{ base: "70vw", md: "15vw" }}
                mx="auto"
                my="1vh"
                border="1px"
                borderColor="#c28824"
                borderRadius="20px"
            />

            <Flex
                mt="1vw"
                mx="auto"
            >
                <Text 
                    mr="1vw"
                    fontSize="1vw"
                    color="#c28824"
                >Nama Pasangan</Text>
                <Text 
                    fontSize="1vw"
                    color="#c28824"
                >Nama Pasangan</Text>
            </Flex>

            <Button
                w="70%"
                mx="auto"
                my="auto"
                bgColor={"#c28824"}
                onClick={HandleVote}
            >Vote</Button>
        </Flex>
    );
};

export { BoxVote as BoxVote };