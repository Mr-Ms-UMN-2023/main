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
import { Navbar, Dedikasi, Teaser } from "@/components";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { onPause } from "@/GeneralFunction";

const Voting = () => {
  const modalRef = useRef(null);
  const [snapToken, setSnapToken] = useState();
  const [onVote, setOnVote] = useState<number | null>(null);
  const [jmlh, setJmlh] = useState<any>(0);
  const [load, setLoad] = useState<boolean>(false);
  const [notMobile] = useMediaQuery("(min-width: 720px)");
  const [onOpen, setOnOpen] = useState<boolean | string>(false);
  const [scrollY, setScrollY] = useState<any>(0);
  const [vote, setVote] = useState([]);
  const [total, setTotal] = useState(0);
  const candidate = [
    {
      id: "8",
      name: "CHRISTOPHER EVAN",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100190186176552/vote-1.jpg?ex=65665d03&is=6553e803&hm=0c24fd0797091332dbff12b60dc70290e08f4b53d8df4c037bd8dbb2251ae86c&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100105557721158/vote-2-expand.png?ex=65665cee&is=6553e7ee&hm=206bb149aeb737518b5b10c69abd0b96ce179eed93fd82d699207dbe70304ccb&",
      desk: [
        `Born on August 17th 2003 in the vibrant city of Jakarta, Mr. Evan embodies the belief that "The will must be stronger than the skill” as his conviction in the importance of determination and hard work is the driving force behind his goals 🎯`,
        "Juggling sports, movies, gym sessions, games, and even a dash of theater in his spare time, his interests are as diverse as his talents 🏀🎬💪🏻🎮🎭",
      ],
    },
    {
      id: "2",
      name: "LEVITA CHEN",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100105226375339/vote-2.jpg?ex=65665cee&is=6553e7ee&hm=f2ec5a436af788f403d1b8d3b6d11234468ccc8d3ac2c7c75815d3b4cfe0122d&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100105851326484/vote-2-small.png?ex=65665cee&is=6553e7ee&hm=3047ce7bcd2907a941a1b608428d0aaf30306f658e346cf7175cb20ab0b06667&",
      desk: [
        `Born on June 5th 2003, in the enchanting city of Pekanbaru, Ms. Levita’s journey is marked by a motto that echoes wisdom and faith "Do your best and let God do the rest!" knowing that beyond her capabilities, there's a divine force shaping the grand tapestry of her life ✨`,
        "Beyond academics, she channels her creativity into the art of makeup, turning it into a canvas for self-expression. She believes in the power of continuous learning and embracing the transformative journey of self-discovery💄📚",
      ],
    },
    {
      id: "4",
      name: "JIMMY FILIOLUS",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100106119757994/vote-3.jpg?ex=65665cef&is=6553e7ef&hm=e059634427fe075dfe5b9bba9b726be83b946a3fb98fec04d5b068eccbc95c11&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100104874037268/vote-3-small.jpg?ex=65665cee&is=6553e7ee&hm=1dfc7684492933d52525471ea4b589497e1556df5f83832be42ad69d505415be&",
      desk: [
        `Born on February 3rd 2003, in the amazing city of Garut, Mr. Jimmy’s life is guided by a profound motto “In the journey of life, seek growth, find joy, and spread kindness”, where growth, joy, and kindness intertwine, creating a narrative of purpose, positivity, and the pursuit of a meaningful life 🌱🌟`,
        `He enjoys discovering new landscapes through traveling, immersing himself in the world of games, and staying active through sports ✈️🎮🏀`,
      ],
    },
    {
      id: "1",
      name: "RAQUEL FELICIA",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100155939684443/vote-4.jpg?ex=65665cfa&is=6553e7fa&hm=f9956654ee367b0829020cc7437e00a7c3affee17e5dea8f0fe533e51489ef57&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100154819817554/vote-4-small.jpg?ex=65665cfa&is=6553e7fa&hm=461cdf3848902aea755997046cb4b6ca93a205f2d8321a715c693181f0b1bf72&",
      desk: [
        `Born on April 4th 2003, in the vibrant city of Tangerang, Ms. Raquel’s embodies the belief to "Stay with the course of kindness and leave proudly." A reminder that, in navigating life's complexities, choosing the route of kindness not only impacts others positively but also contributes to personal growth and fulfillment💫`,
        `In the symphony of dancing, drawing, and acting, her hobbies become not just pastimes but avenues for self-discovery and a purposeful journey guided by kindness 🎨💃🎭`,
      ],
    },
    {
      id: "7",
      name: "ALWI AULIA",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100155113406615/vote-5.jpg?ex=65665cfa&is=6553e7fa&hm=9a11e34b5f107241698cafa975e2ca25ca3ba05cae72d69b04c7d218c49a555b&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100155352502292/vote-5-small.jpg?ex=65665cfa&is=6553e7fa&hm=ab3626eb333271ac6f6b685ef1b7dab3d7e9353b7d5707f7de9bed294ee5fd47&",
      desk: [
        `Born on October 28th 2004, in the enchanting city of Medan. Mr. Alwi’s life is propelled by the Latin adage "Fortis Fortuna Adiuvat", encapsulating the spirit of daring courage. It's a rallying call to embrace challenges, take risks, and step out of one's comfort zone 💪🏻`,
        `In sync with his fearless approach to life, his hobbies reflect a diverse range of interests ranging from Martial Arts, Basketball, and playing the Guitar 🥋🏀🎸`,
      ],
    },
    {
      id: "5",
      name: "FIELITA MAYA",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100155637706772/vote-6.jpg?ex=65665cfa&is=6553e7fa&hm=d2f1eb9d756e12a55d471ef979a2c7822518a22534b7a2f48d2cf167e856b7d7&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100190458826793/vote-6-small.jpg?ex=65665d03&is=6553e803&hm=00b41ec3a16d0c36fbd23bccef624b5096b4fcae438184a881ab17913b317882&",
      desk: [
        `Born on November 6th 2000, in the vibrant city of Jakarta, Ms. Fielita’s life is guided by the belief, "Do everything with all your heart and always rely on God.". This life motto serves as a compass for every endeavor and encapsulates the essence of wholehearted dedication, urging a commitment to passion and purpose in every pursuit ✨❤️`,
        `Singing serves as her melodious expression of emotions and stories, it's a journey of self-discovery and connection. Meanwhile, traveling transforms as a visual and experiential exploration, a way to broaden horizons, create memories, and find inspiration in the diversity of the world 🎤✈️`,
      ],
    },
    {
      id: "3",
      name: "KENNETH WELNYSUN",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100190752423936/vote-7.jpg?ex=65665d03&is=6553e803&hm=9bf929da27c752156b30b01ea672ae383f64533e911dc04e7b3f4168e537aa85&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100189578023013/vote-7-small.jpg?ex=65665d02&is=6553e802&hm=c491a1f5c55571936c838926fcbcfc7bbd670962ef0818ca8962a9695c91290b&",
      desk: [
        `Born on October 20th 2003, in the amazing city of Tangerang, Mr. Kenneth’s life is fueled by the saying, "Take the risk or lose the chance." It's a recognition that growth often lies outside the comfort zone, and seizing chances, however daunting, can lead to remarkable experiences and achievements 🔥`,
        `Mr. Kenneth finds solace and expression through the harmonies of music and martial arts. Playing music becomes a creative outlet to convey emotions and stories. Meanwhile, engaging in martial arts is a physical and mental discipline, embodying the principles of focus, perseverance, and self-defense 🎸🥋`,
      ],
    },
    {
      id: "6",
      name: "CATHRINE NATASYA",
      img: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100494004785234/vote-8.jpg?ex=65665d4b&is=6553e84b&hm=e8fbcc897e0eb0b02f2025e82fa0188798729db964fabda173f6ccde58e216e2&",
      imgS: "https://cdn.discordapp.com/attachments/1164441068788514856/1174100189859037185/vote-8-small.jpg?ex=65665d02&is=6553e802&hm=82fac98f78fd4064108d79b9ede5cbe4b50155a1dfd318f410a46000ca419c99&",
      desk: [
        `Born October 14th 2003, in the enchanting city of Jambi, Ms. Cathrine whose life is beautifully guided by the motto, "Spreading love with every smile.". This is not just a motto for her, it's a way of life. With each heartfelt smile, she endeavors to illuminate the world around her, creating a ripple effect of warmth and positivity 😊`,
        `In sync with her heartwarming motto, her passion lies in the art of traveling. Traveling isn’t merely a physical journey but a soulful exploration of diverse cultures, breathtaking landscapes. Each adventure becomes an opportunity for her to spread love across the tapestry of the world 🌍💖`,
      ],
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

  const handleScroll = () => {
    // console.log(window.scrollY);
    window.pageYOffset;
    let scroll = window.pageYOffset / 5;

    setScrollY(scroll * 2.2);
  };

  const fetchData = async () => {
    const res = await fetch("https://mrms2023.my.id/api/vote/statistic");
    const vote = await res.json();
    const newVote: any = [];
    let totalVote = 0;
    vote.data.forEach((element: any) => {
      newVote.push(element.total_vote);
      totalVote += Number(element.total_vote);
    });
    console.log(vote);
    console.log(totalVote);

    setVote(newVote);
    setTotal(totalVote);
  };

  useEffect(() => {
    onOpen != null && onPause;
    window.onclick = function (event) {
      if (event.target == modalRef.current) {
        setOnVote(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    fetchData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      fontFamily={"Montserrat"}
      flexDir={"column"}
      w="100vw"
      minH={"100vh"}
      justify={"center"}
      align="center">
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
          zIndex="10"
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
            h={{ base: "auto", lg: "60vh" }}
            maxH={{ base: "80vh", lg: "60vh" }}>
            <Box maxW={"40vw"} overflow={"hidden"}>
              <Img
                transition={"0.5s"}
                _hover={{ transform: "scale(2)" }}
                objectFit={"cover"}
                w="100%"
                h="100%"
                src={candidate[onVote as number].imgS}
              />
            </Box>

            <Box p="1rem" w="80%" h="100%" flexDir={"column"}>
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
            </Box>
          </Flex>
        </Flex>
      )}
      <Flex position={"relative"} minH="200vh" w="100vw">
        <Img
          opacity={scrollY / 600}
          alignSelf={"end"}
          src="https://media.discordapp.net/attachments/1164441068788514856/1174100539399745566/bg.jpg?ex=65665d56&is=6553e856&hm=21c16f980b6dd74bcf70d74b555cb36538e5900fcc5597f89a4298e3009c42c1&=&width=720&height=404"
          w={"auto"}
          minW="100vw"
          maxW="200vw"
          h={"100vh"}
        />
        <Img
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          position={"fixed"}
          w={{ base: "100vw", lg: "80vw" }}
          opacity={scrollY < 600 ? scrollY / 300 : 0}
          alignSelf={"end"}
          src="https://cdn.discordapp.com/attachments/1164441068788514856/1174543632724934729/cashVote.png?ex=6567fa00&is=65558500&hm=c6d38ebd21b89c4d3970753645e92cdcb8c7c51fcb599fd1e891ef0482f071ea&"
        />

        <Img
          opacity={1 - scrollY / 400}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          position={"fixed"}
          w={{ lg: "100vw" }}
          maxW="150vw"
          h={"100vh"}
          src="https://cdn.discordapp.com/attachments/1164441068788514856/1174136942212960307/bg-gunung.jpg?ex=65667f3d&is=65540a3d&hm=9a450552e34c36045641c301c4aa37c5bb412364593f8017a27d13d4d8e7c3d0&"
        />
        <Img
          opacity={1 - scrollY / 400}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          position={"fixed"}
          w={{ base: "100vw", lg: "80vw" }}
          src="https://cdn.discordapp.com/attachments/1164441068788514856/1174137444136910868/text-bg.png?ex=65667fb5&is=65540ab5&hm=cfab1577d0188e27fc1ee64d1f41ba106ef61ac31aa9a60eb7596b9411c23fed&"
        />
      </Flex>
      <Box minH={{ base: "200vh", md: "100vh" }}>
        <Flex
          // opacity={1 - scrollY / 5000}
          flexWrap={"wrap"}
          w="100vw"
          h={{ base: "200vh", md: "100vh" }}
          justify={"space-around"}
          position="relative"
          bg="url(https://media.discordapp.net/attachments/1164441068788514856/1174100539399745566/bg.jpg?ex=65665d56&is=6553e856&hm=21c16f980b6dd74bcf70d74b555cb36538e5900fcc5597f89a4298e3009c42c1&=&width=720&height=404)"
          bgRepeat={"no-repeat"}
          bgSize={"cover"}>
          {candidate.map((data, index) => {
            return (
              <Flex
                cursor={"pointer"}
                key={index}
                zIndex={onOpen == data.id ? "3" : "1"}
                onClick={() => setOnOpen(data.id)}
                transition="1s"
                top={"0px"}
                left={"0px"}
                position={onOpen == data.id ? "fixed" : "relative"}
                w={onOpen == data.id ? "100vw" : { base: "23vw", md: "10vw" }}
                overflowX="hidden"
                overflowY={onOpen == data.id ? "auto" : "hidden"}
                minH="100vh"
                maxH={onOpen == data.id ? "auto" : "100vh"}
                bg="url(https://media.discordapp.net/attachments/1164441068788514856/1174100539399745566/bg.jpg?ex=65665d56&is=6553e856&hm=21c16f980b6dd74bcf70d74b555cb36538e5900fcc5597f89a4298e3009c42c1&=&width=720&height=404)"
                bgRepeat={"no-repeat"}
                bgSize={"cover"}>
                <Box position={"relative"}>
                  <Img
                    ml={onOpen == data.id ? { md: "1rem" } : "0"}
                    height={"100vh"}
                    minWidth={
                      onOpen == data.id ? "auto" : { base: "23vw", md: "10vw" }
                    }
                    src={
                      onOpen == data.id
                        ? notMobile
                          ? data.img
                          : data.imgS
                        : data.imgS
                    }
                  />
                  <Box
                    textAlign={"center"}
                    whiteSpace={{ md: "nowrap" }}
                    fontWeight="bold"
                    left={"50%"}
                    bottom={"2rem"}
                    transform={"translate(-50%)"}
                    position={"absolute"}
                    color="white">
                    Vote:{" "}
                    {((vote[Number(data.id) - 1] / total) * 100).toFixed(2) +
                      "%"}
                  </Box>
                </Box>

                <Flex
                  w="70vw"
                  maxH={"100vh"}
                  p={{ base: "1rem", md: "4rem", lg: "8rem" }}
                  flexDir={"column"}
                  gap="1rem"
                  color={"white"}
                  overflowY="auto">
                  <Box
                    mt={{ base: "5rem", md: "0" }}
                    fontSize={{ base: "2rem", md: "3rem" }}
                    fontStyle={"italic"}
                    fontWeight={"black"}>
                    {data.name}
                  </Box>
                  {data.desk.map((e, index) => {
                    return (
                      <Box key={index} fontWeight={"600"}>
                        {e}
                      </Box>
                    );
                  })}

                  <Box
                    cursor={"pointer"}
                    onClick={() => setOnVote(index)}
                    mt="5rem"
                    alignSelf={"end"}
                    fontSize={"1.5rem"}
                    borderRadius={"8px"}
                    w={"fit-content"}
                    bg="linear-gradient(-45deg, #fff09e 0%, #e2c062 100%)"
                    p="1rem"
                    color={"#443a25"}
                    fontStyle="italic"
                    fontWeight={"black"}>
                    VOTE HERE
                  </Box>
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Box>
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

export default Voting;
export { Voting };
