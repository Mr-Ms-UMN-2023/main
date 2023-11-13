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
} from "@chakra-ui/react";
import { Loading, Navbar, FormRecruit } from "@/components";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

const Vote = () => {
  const modalRef = useRef();
  const [snapToken, setSnapToken] = useState();
  const [onVote, setOnVote] = useState<number>(null);
  const [jmlh, setJmlh] = useState<any>(0);
  const [load, setLoad] = useState<boolean>(false);
  const candidate = [
    {
      id: "2",
      name: "Levita Chen",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173276691569848390/DSCF6422.jpg?ex=65635e11&is=6550e911&hm=07a3adae7376b23d6919493b5b7d7606893dc27082dcd5b0dc2fea821e6edc0a&",
    },
    {
      id: "1",
      name: "Raquel Felicia",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173296667966054441/DSCF6230.jpg?ex=656370ac&is=6550fbac&hm=14ea6aeaca3ea4779ce2e00afde396fdfb99dd40c0adccae0f558be8e118e3c1&",
    },
    {
      id: "6",
      name: "Cathrine Natasya",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173277029811101827/DSCF6258.jpg?ex=65635e62&is=6550e962&hm=9ab606c7455c2b12458775683876d1c38947d9160b5bfc84666ed97f1d3b64a0&",
    },
    {
      id: "5",
      name: "Fielita Maya",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173297322961154208/DSCF6730.png?ex=65637148&is=6550fc48&hm=6cd5e5b1a5a6af6e34fd0f8b247b198e229afde69f0883f0135fa4a94c1985f3&",
    },
    {
      id: "7",
      name: "Alwi Aulia Akbar Tanjung",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173276053859475498/DSCF6592.jpg?ex=65635d79&is=6550e879&hm=27b18e283fa121ef6edfa1c4cfb2ecfa2ca9488417d898e9b8c91c8749510a3c&",
    },
    {
      id: "8",
      name: "Christopher Evan Pangestu",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173276178858115164/DSCF6532.jpg?ex=65635d97&is=6550e897&hm=de3d58ca83bd0b14bfb1de0da0329decc950bfa247e0dd8d37ee2b0736221f78&",
    },
    {
      id: "4",
      name: "Jimmy Filiolus Yonatan",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173276423969062983/DSCF6246.jpg?ex=65635dd1&is=6550e8d1&hm=12436982fe870ca1b0f9cbf72ede15f631e00af3380a2b6cb0830ab966d3e0c5&",
    },
    {
      id: "3",
      name: "Kenneth Welnysun",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1173276615539703838/DSCF6389.jpg?ex=65635dff&is=6550e8ff&hm=8339fc1b18ffb5b46840da455f4f72fd1a87e2712e82509c12621d8ba8a3d49f&",
    },
  ];

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoad(true);
    console.log("masuk", jmlh, onVote);
    try {
      if (jmlh > 0 && onVote !== null) {
        const data = {
          finalis_id: candidate[onVote].id,
          quantity: jmlh,
        };

        const res = await fetch("https://mrms2023.my.id/api/vote/order", {
          body: JSON.stringify(data),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const parsedResponse = await res.json();
        const token = parsedResponse.data?.token!;
        console.log("res", token);
        setSnapToken(token);
        setLoad(false);
      }
    } catch (err) {
      setLoad(false);
    }
  };

  const voteHandle = (e: any) => {
    const { alt } = e.target;
    console.log(alt);
    setOnVote(alt - 1);
  };

  useEffect(() => {
    window.onclick = function (event) {
      if (event.target == modalRef.current) {
        setOnVote(null);
      }
    };
  }, []);

  useEffect(() => {
    const midtransUrl = process.env.NEXT_PUBLIC_MIDTRANS_INTERFACE_URL;

    let scriptTag = document.createElement("script");

    midtransUrl && (scriptTag.src = midtransUrl);

    const midtransCLientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;
    midtransCLientKey &&
      scriptTag.setAttribute("data-client-key", midtransCLientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    console.log(process.env);
    if (snapToken && typeof window !== undefined) {
      window.snap.pay(snapToken, {
        onSuccess: async (res: any) => {
          await fetch(
            process.env.NEXT_PUBLIC_API_URL +
              "/api/ticket/payment/notification",
            {
              method: "POST",
              body: JSON.stringify(res),
            }
          );
          console.log("berhasil");
        },
        onPending: async (res: any) => {
          console.log("pending");
        },
        onError: async (err: any) => {
          console.log("Error");
        },
      });
    }
  }, [snapToken]);

  return (
    <Flex
      flexDir={"column"}
      boxShadow={"0px 0px 5rem 1rem #f6da6c inset"}
      w="100vw"
      minH={"100vh"}
      justify={"center"}
      align="center">
      <Navbar />
      {load && (
        <Box
          bg={"rgba(0,0,0,0.5)"}
          h={"100vh"}
          w="100vw"
          zIndex={"5"}
          position={"fixed"}
          top="50%"
          left={"50%"}
          transform={"translate(-50%, -50%)"}>
          <Img
            zIndex={"10"}
            position={"fixed"}
            top="50%"
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            src="/Assets/TiketHimalaya/load.svg"
          />
        </Box>
      )}
      {typeof onVote == "number" && (
        <Flex
          ref={modalRef}
          top="50%"
          left={"50%"}
          transform="translate(-50%, -50%)"
          position={"fixed"}
          zIndex="1"
          alignItems={"center"}
          justifyContent={"center"}
          w="100vw"
          h="100vh"
          background={"rgba(0,0,0,0.5)"}>
          <Flex
            p="1rem"
            position={"absolute"}
            justifyContent={"start"}
            bg="white"
            zIndex="10"
            w={{ base: "90%", md: "50%" }}
            h={{ base: "auto", lg: "60vh" }}>
            <Box maxW={"40vw"} overflow={"hidden"}>
              <Img
                transition={"0.5s"}
                _hover={{ transform: "scale(3)" }}
                transform={"scale(2)"}
                objectFit={"cover"}
                w="auto"
                h="100%"
                src={candidate[onVote as number].img}
              />
            </Box>

            <Flex p="1rem" w="80%" h="100%" flexDir={"column"}>
              <Box fontSize={"2rem"} fontWeight={"black"}>
                {candidate[onVote].name}
              </Box>
              <Box mt="3rem">Ayo Dukung Kandidat Favorit mu</Box>
              <form onSubmit={onSubmit}>
                <FormControl>
                  <FormLabel>Jumlah Suara</FormLabel>
                  <Input
                    type={"number"}
                    bg="blackAlpha.200"
                    onChange={(e) => setJmlh(e.target.value)}
                  />
                </FormControl>
              </form>
              <Text mt="20%">
                Biaya Admin: {(jmlh * 5000).toLocaleString()}{" "}
              </Text>
              <Button
                onClick={onSubmit}
                fontWeight={"black"}
                p="1rem"
                bg="#f5d564"
                mt="1rem"
                type="submit"
                alignSelf={"end"}>
                Lakukan Vote
              </Button>
            </Flex>
          </Flex>
        </Flex>
      )}

      <Box
        textAlign={"center"}
        mt={{ base: "5rem", lg: "-5rem" }}
        mb="5rem"
        fontSize={"2rem"}
        fontFamily={"Cinzel-Black"}
        fontWeight={"black"}
        color={"#e4ac00"}>
        VOTE YOUR CANDIDATE
      </Box>
      <Grid
        boxShadow={"0px 0px 5rem 1rem #f6da6c, 0px 0px 5rem 1rem #f6da6c inset"}
        w="95vw"
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}>
        <GridItem
          w={{ base: "100vw", lg: "30vw" }}
          gridArea={{ base: "2 ", lg: "1" }}>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            height={{ base: "300vh", lg: "100%" }}
            alignItems="center"
            justify={"space-between"}
            position={"relative"}
            overflow="hidden">
            <Box
              zIndex={"-1"}
              position={"absolute"}
              height={"100%"}
              w={"100%"}
              style={{ backgroundSize: "contain" }}
              backgroundRepeat="repeat-y"
              background={
                "url(https://cdn.discordapp.com/attachments/1164441068788514856/1173275542427013190/megamendung.png?ex=65635cff&is=6550e7ff&hm=bfa6dccb8652d40e1ce4db4551f78aab4545425b9506731709fd705c771b103d&)"
              }
            />
            <ImageFrame
              name="1"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173276691569848390/DSCF6422.jpg?ex=65635e11&is=6550e911&hm=07a3adae7376b23d6919493b5b7d7606893dc27082dcd5b0dc2fea821e6edc0a&"></ImageFrame>

            <ImageFrame
              name="2"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173296667966054441/DSCF6230.jpg?ex=656370ac&is=6550fbac&hm=14ea6aeaca3ea4779ce2e00afde396fdfb99dd40c0adccae0f558be8e118e3c1&"
            />
            <ImageFrame
              name="3"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173277029811101827/DSCF6258.jpg?ex=65635e62&is=6550e962&hm=9ab606c7455c2b12458775683876d1c38947d9160b5bfc84666ed97f1d3b64a0&"
            />
            <ImageFrame
              name="4"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173297322961154208/DSCF6730.png?ex=65637148&is=6550fc48&hm=6cd5e5b1a5a6af6e34fd0f8b247b198e229afde69f0883f0135fa4a94c1985f3&"
            />
          </Flex>
        </GridItem>
        <GridItem
          gridArea={{ base: "1", lg: "1" }}
          w={{ base: "100vw", lg: "35vw" }}>
          <Img
            w="100%"
            height={"auto"}
            src="https://cdn.discordapp.com/attachments/1164441068788514856/1173278848968818688/Screenshot_2023-11-12_221047.png?ex=65636014&is=6550eb14&hm=4d94d1a69a7db1e5a2a1f55c3bd66497d2ca650ce5d25a178f1e3f836262b25b&"
          />
        </GridItem>
        <GridItem
          w={{ base: "100vw", lg: "30vw" }}
          gridArea={{ base: "3 ", lg: "1" }}>
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            height={{ base: "300vh", lg: "100%" }}
            alignItems="center"
            justify={"space-between"}
            position={"relative"}
            overflow="hidden">
            <Box
              zIndex={"-1"}
              position={"absolute"}
              height={"100%"}
              w={"100%"}
              style={{ backgroundSize: "contain" }}
              backgroundRepeat="repeat-y"
              background={
                "url(https://cdn.discordapp.com/attachments/1164441068788514856/1173275542427013190/megamendung.png?ex=65635cff&is=6550e7ff&hm=bfa6dccb8652d40e1ce4db4551f78aab4545425b9506731709fd705c771b103d&)"
              }
            />
            <ImageFrame
              name="5"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173276053859475498/DSCF6592.jpg?ex=65635d79&is=6550e879&hm=27b18e283fa121ef6edfa1c4cfb2ecfa2ca9488417d898e9b8c91c8749510a3c&"></ImageFrame>

            <ImageFrame
              name="6"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173276178858115164/DSCF6532.jpg?ex=65635d97&is=6550e897&hm=de3d58ca83bd0b14bfb1de0da0329decc950bfa247e0dd8d37ee2b0736221f78&"
            />
            <ImageFrame
              name="7"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173276423969062983/DSCF6246.jpg?ex=65635dd1&is=6550e8d1&hm=12436982fe870ca1b0f9cbf72ede15f631e00af3380a2b6cb0830ab966d3e0c5&"
            />
            <ImageFrame
              name="8"
              onClick={voteHandle}
              src="https://cdn.discordapp.com/attachments/1164441068788514856/1173276615539703838/DSCF6389.jpg?ex=65635dff&is=6550e8ff&hm=8339fc1b18ffb5b46840da455f4f72fd1a87e2712e82509c12621d8ba8a3d49f&"
            />
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const ImageFrame = (props: any) => {
  return (
    <Flex
      onClick={props.onClick}
      my={{ base: "3rem", lg: "0" }}
      cursor={"pointer"}
      _hover={{ scale: 2 }}
      objectFit={"cover"}
      overflow={"hidden"}
      justify={"center"}
      align={{ base: "start", lg: "center" }}
      w={{ base: "90vw", lg: "22%" }}
      height={{ base: "100vh", lg: "100%" }}>
      {props.children}
      <Img
        alt={props.name}
        mt={{ base: "calc(-5vh - 3rem)", md: "calc(-5vh - 12rem)", lg: "0" }}
        transform={"scale(1.5)"}
        transition="0.5s"
        _hover={{ transform: "scale(2)" }}
        src={props.src}
        w={{ base: "100vw", lg: "auto" }}
      />
    </Flex>
  );
};

export default Vote;
