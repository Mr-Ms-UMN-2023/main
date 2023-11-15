import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Img,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Navbar, Dedikasi, Teaser, Voting } from "@/components";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { onPause } from "@/GeneralFunction";

const Vote = () => {
  return (
    <>
      <Navbar />
      <Voting />
      <Dedikasi />
      <Teaser />
    </>
  );
};

export default Vote;
