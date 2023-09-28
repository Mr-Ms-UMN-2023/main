import {
  Box,
  Flex,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styles from "@/styles/navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const closeBatchOne = 4;
  const openBatchTwo = 8;
  const closeBatchTwo = 12;

  const [active, setActive] = useState<string | undefined>("/");
  const [navbarLength, setNavbarLength] = useState<number>(5);
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState(0);
  const [tutup, setTutup] = useState(false);
  const [dayTime, setDayTime] = useState<number>(new Date().getDate());
  const [navbarList, setNavbarList] = useState(
    (dayTime >= closeBatchOne && dayTime < openBatchTwo) ||
      dayTime > closeBatchTwo
      ? [
          {
            title: "Home",
            link: "/",
          },
          // {
          //   title: "Candidate Registration",
          //   link: "/registration",
          // },
          {
            title: "FAQ",
            link: "/faq",
          },
          {
            title: "Mahesa 2023",
            link: "/recruitment",
          },
          {
            title: "About Us",
            link: "/aboutus",
          },
          {
            title: "Sponsor",
            link: "/sponsor",
          },
        ]
      : [
          {
            title: "Home",
            link: "/",
          },
          // {
          //   title: "Candidate Registration",
          //   link: "/registration",
          // },
          {
            title: "FAQ",
            link: "/faq",
          },
          {
            title: "Mahesa 2023",
            link: "/recruitment",
          },
          {
            title: "About Us",
            link: "/aboutus",
          },
          {
            title: "Sponsor",
            link: "/sponsor",
          },
        ]
  );
  const router = useRouter();

  const time = () => {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();

    let date: string = String(year) + String(month) + String(day);
    setDayTime(day);
  };

  // 202353

  useEffect(() => {
    let nowTime = setInterval(() => time(), 1000);

    return () => clearInterval(nowTime);
  }, []);

  useEffect(() => {
    if (
      (dayTime >= closeBatchOne && dayTime < openBatchTwo) ||
      dayTime > closeBatchTwo
    ) {
      setNavbarList([
        {
          title: "Home",
          link: "/",
        },
        // {
        //   title: "Candidate Registration",
        //   link: "/registration",
        // },
        {
          title: "FAQ",
          link: "/faq",
        },
        {
          title: "Mahesa 2023",
          link: "/recruitment",
        },
        {
          title: "About Us",
          link: "/aboutus",
        },
        {
          title: "Sponsor",
          link: "/sponsor",
        },
        {
          title: "Media Partner",
          link: "/medpar",
        },        
      ]);
    } else {
      setNavbarList([
        {
          title: "Home",
          link: "/",
        },
        // {
        //   title: "Candidate Registration",
        //   link: "/registration",
        // },
        {
          title: "FAQ",
          link: "/faq",
        },
        {
          title: "Mahesa 2023",
          link: "/recruitment",
        },
        {
          title: "About Us",
          link: "/aboutus",
        },
        {
          title: "Sponsor",
          link: "/sponsor",
        },
        {
          title: "Media Partner",
          link: "/medpar",
        },
      ]);
    }
  }, [dayTime]);

  let navbar = [
    {
      title: "Home",
      link: "/",
    },
    // {
    //   title: "Candidate Registration",
    //   link: "/registration",
    // },
    {
      title: "FAQ",
      link: "/faq",
    },
    {
      title: "Mahesa 2023",
      link: "/recruitment",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
  ];

  const [width, setWidth] = useState<any>();

  const handleResize = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth < 550) setNavbarLength(2);
    else {
      setNavbarLength(6);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    console.log(router.asPath);
    setActive(router.asPath);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dropdownNavbar = navbarList.slice(navbarLength);

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
      {navbarList.slice(0, navbarLength).map((event: any, index: number) => {
        return (
          <Heading
            position="relative"
            className={
              active && active == event.link ? styles.active : undefined
            }
            textAlign={"center"}
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => router.push(event.link)}
            fontSize={{ base: "0.8rem", md: "1.2rem" }}
            color="white">
            {event.title}
          </Heading>
        );
      })}
      <Menu>
        {width < 550 && (
          <MenuButton
            textAlign={"center"}
            as={Heading}
            fontSize={{ base: "0.8rem", md: "1.2rem" }}
            color="white"
            rightIcon={<ChevronDownIcon />}
            style={{ cursor: "pointer" }}>
            More
            <ChevronDownIcon ml="2"></ChevronDownIcon>
          </MenuButton>
        )}

        <MenuList>
          {dropdownNavbar.map((event: any, index: number) => {
            return (
              <MenuItem
                bg={active && active == event.link ? "#030303" : undefined}
                position="relative"
                className={active == event.link ? styles.activeDrop : undefined}
                key={index}
                onClick={() => router.push(event.link)}
                _hover={{ bg: "gray", color: "black" }}>
                {event.title}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
};
// // const Navbar = () => {
// //   const [navbar, setNavbar] = useState<any>();
// //   const [active, setActive] = useState<number>();

// //   useEffect(() => {
// //     let AboutUs =
// //       document.getElementById("aboutUs") &&
// //       document.getElementById("aboutUs")?.offsetTop;

// //     let StoryLine =
// //       document.getElementById("storyLine") &&
// //       document.getElementById("storyLine")?.offsetHeight;
// //     let oprec;
// //     if (document.getElementById("oprec") != null) {
// //       oprec = document.getElementById("oprec")?.offsetTop;
// //     }

// //     let newNavbar = [
// //       {
// //         title: "Storyline",
// //         scroll: StoryLine || 0,
// //       },
// //       {
// //         title: "About Us",
// //         scroll: AboutUs || 0,
// //       },
// //       {
// //         title: "Mahesa2023",
// //         scroll: oprec || 0,
// //       },
// //     ];

// //     setNavbar(newNavbar);
// //   }, []);

// //   const NavScroll = (e: any, index: number) => {
// //     window.scrollTo({
// //       top: e,
// //       behavior: "smooth",
// //     });

// //     if (index == 2) {
// //       document.getElementById("oprec")?.classList.add(styles.show);
// //     }

// //     setActive(index);
// //   };

// //   return (
// //     <Flex
// //       left="0px"
// //       top="0px"
// //       position={"fixed"}
// //       minH={"10vh"}
// //       justifyContent={"space-around"}
// //       alignItems={"center"}
// //       minHeight="10vh"
// //       minW={"100vw"}
// //       zIndex={"10"}
// //       fontFamily={"TrajanPro-Bold"}>
// //       {navbar &&
// //         navbar?.map((event: any, index: number) => {
// //           return (
// //             <Heading
// //               key={index}
// //               style={{ cursor: "pointer" }}
// //               onClick={() => NavScroll(event.scroll, index)}
// //               fontSize={{ base: "0.8rem", md: "1.2rem" }}
// //               color="white">
// //               {event.title}
// //               {active == index && (
// //                 <Box
// //                   mt="0.5rem"
// //                   mx="auto"
// //                   w={"0.5rem"}
// //                   h={"0.5rem"}
// //                   borderRadius={"50%"}
// //                   bg="white"></Box>
// //               )}
// //             </Heading>
// //           );
// //         })}
// //     </Flex>
// //   );
// // };
export { Navbar as Navbar };
