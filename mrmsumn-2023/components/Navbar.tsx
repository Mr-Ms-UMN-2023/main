import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [active, setActive] = useState<number>();
  const router = useRouter();
  let navbar = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
    {
      title: "FAQ",
      link: "/faq",
    },    
    {
      title: "Open Recruitment",
      link: "/recruitment",
    },
  ];

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
      zIndex={"10"}
      fontFamily={"TrajanPro-Bold"}>
      {navbar &&
        navbar?.map((event: any, index: number) => {
          return (
            <Heading
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => router.push(event.link)}
              fontSize={{ base: "0.8rem", md: "1.2rem" }}
              color="white">
              {event.title}
              {active == index && (
                <Box
                  mt="0.5rem"
                  mx="auto"
                  w={"0.5rem"}
                  h={"0.5rem"}
                  borderRadius={"50%"}
                  bg="white"></Box>
              )}
            </Heading>
          );
        })}
    </Flex>
  );
};
// const Navbar = () => {
//   const [navbar, setNavbar] = useState<any>();
//   const [active, setActive] = useState<number>();

//   useEffect(() => {
//     let AboutUs =
//       document.getElementById("aboutUs") &&
//       document.getElementById("aboutUs")?.offsetTop;

//     let StoryLine =
//       document.getElementById("storyLine") &&
//       document.getElementById("storyLine")?.offsetHeight;
//     let oprec;
//     if (document.getElementById("oprec") != null) {
//       oprec = document.getElementById("oprec")?.offsetTop;
//     }

//     let newNavbar = [
//       {
//         title: "Storyline",
//         scroll: StoryLine || 0,
//       },
//       {
//         title: "About Us",
//         scroll: AboutUs || 0,
//       },
//       {
//         title: "Open Recruitment",
//         scroll: oprec || 0,
//       },
//     ];

//     setNavbar(newNavbar);
//   }, []);

//   const NavScroll = (e: any, index: number) => {
//     window.scrollTo({
//       top: e,
//       behavior: "smooth",
//     });

//     if (index == 2) {
//       document.getElementById("oprec")?.classList.add(styles.show);
//     }

//     setActive(index);
//   };

//   return (
//     <Flex
//       left="0px"
//       top="0px"
//       position={"fixed"}
//       minH={"10vh"}
//       justifyContent={"space-around"}
//       alignItems={"center"}
//       minHeight="10vh"
//       minW={"100vw"}
//       zIndex={"10"}
//       fontFamily={"TrajanPro-Bold"}>
//       {navbar &&
//         navbar?.map((event: any, index: number) => {
//           return (
//             <Heading
//               key={index}
//               style={{ cursor: "pointer" }}
//               onClick={() => NavScroll(event.scroll, index)}
//               fontSize={{ base: "0.8rem", md: "1.2rem" }}
//               color="white">
//               {event.title}
//               {active == index && (
//                 <Box
//                   mt="0.5rem"
//                   mx="auto"
//                   w={"0.5rem"}
//                   h={"0.5rem"}
//                   borderRadius={"50%"}
//                   bg="white"></Box>
//               )}
//             </Heading>
//           );
//         })}
//     </Flex>
//   );
// };

export { Navbar as Navbar };
