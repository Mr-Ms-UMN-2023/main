import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState<any>();

  useEffect(() => {
    let AboutUs = document.getElementById("aboutUs")?.offsetTop;

    let StoryLine = document.getElementById("storyLine")?.offsetHeight;
    let oprec = document.getElementById("oprec")?.offsetTop;

    let newNavbar = [
      {
        title: "Storyline",
        scroll: StoryLine || 0,
      },
      {
        title: "Storyline",
        scroll: AboutUs || 0,
      },
      {
        title: "Storyline",
        scroll: oprec || 0,
      },
    ];

    setNavbar(newNavbar);
  }, []);

  const NavScroll = (e: any) => {
    window.scrollTo({
      top: e,
      behavior: "smooth",
    });
  };

  return (
    <Flex
      left="0px"
      top="0px"
      position={"fixed"}
      minH={"10vh"}
      justifyContent={"space-around"}
      alignItems={"center"}
      minHeight="10vh"
      minW={"100vw"}
      zIndex={"100"}
      fontFamily={"TrajanPro-Bold"}>
      {navbar &&
        navbar?.map((event: any, index: number) => {
          return (
            <Heading
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => NavScroll(event.scroll)}
              fontSize={"1.2rem"}
              color="white">
              {event.title}
            </Heading>
          );
        })}
    </Flex>
  );
};

export { Navbar as Navbar };
