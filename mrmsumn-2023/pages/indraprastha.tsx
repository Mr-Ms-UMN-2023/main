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
import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components"
import styles from "@/styles/Home.module.css";

import { HeaderZoom } from "@/components/HeaderZoom";

const indraprastha = () => {
    return (
        <>
            <Navbar />
            <HeaderZoom img="https://cdn.discordapp.com/attachments/1125453534062719016/1166796862079123486/Indraprasta.png?ex=654bcb41&is=65395641&hm=797215ae41b98ca16dbfd0f0438829b4cdad4e03b0cdb08536db514cc3cc7d70&" />
            <Flex
                flexDirection={"column"}
                alignItems={"center"}
                mx="5vw"
                my="5vw"
            >
                <img
                    src="https://cdn.discordapp.com/attachments/1125453534062719016/1166815509271040141/Indraprastha.png?ex=654bdc9f&is=6539679f&hm=84d44b775ca6b0c0d50d2aee43c0283f1dd9c8a5aa04d842cdd934ff0f4bcda5&"
                    width="30%"
                />
                <Text
                    color="#FFFFFF"
                    fontSize="2vw"
                    my="2vw"
                >
                    Indraprastha
                </Text>
                <Text
                    color="#FFFFFF"
                    fontSize="1.5vw"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
                </Text>
            </Flex>
        </>
    )
};

export default indraprastha;