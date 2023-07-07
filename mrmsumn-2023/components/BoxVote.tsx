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


const BoxVote = () => {
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
            w="18vw"
            h="60vh"
            mx="auto"
            my="5vw"
            flexDirection={"column"}
            bgColor={"white"}
            >

            <Img
                src="/Assets/finalist22/54768.jpg"
                maxH={{ base: "80vh", md: "60vh" }}
                maxW={{ base: "70vw", md: "15vw" }}
                mx="auto"
                my="1vh"
            />

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