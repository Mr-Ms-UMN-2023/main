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
import styles from "@/styles/Home.module.css";

const HeaderZoom = ({img}: {img: string}) => {
    return (
        <img
            src={img}
            className={styles.zoomAnimation}
        />
    )
};

export { HeaderZoom as HeaderZoom};