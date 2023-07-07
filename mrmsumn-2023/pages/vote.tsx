import { Flex } from "@chakra-ui/react";
import { Loading, Navbar, FormRecruit, BoxVote } from "@/components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Vote = () => {
    return (
        <>
            <Navbar />
            <Flex
            
            >
                <BoxVote />
                <BoxVote />
            </Flex>
        </>
    );
};

export default Vote;