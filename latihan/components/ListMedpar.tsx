import { Flex, Box, Grid, GridItem, Image, Heading, Link } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { useEffect, useRef } from "react";

const ListMedpar = (props: any) => {
  const list = [
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_ultimagz.png",
      nama: "Ultimagz",
      url: "https://ultimagz.com/",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_umnjuice.png",
      nama: "UMN Juice",
      url: "https://juice.umn.ac.id/",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_umntv.png",
      nama: "UMN TV",
      url: "https://tv.umn.ac.id/",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_umnradio.png",
      nama: "UMN Radio",
      url: "https://radio.umn.ac.id",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_infolombaevent.id.png",
      nama: "infolombaevent.id",
      url: "https://www.instagram.com/infolombaevent.id/",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_radiountar.jpg",
      nama: "Radio Untar",
      url: "https://www.instagram.com/radiountar",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_deoagency.jpg",
      nama: "Deo Agency",
      url: "https://www.instagram.com/deoagency",
      bg: false,
    },  
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_imkomumn.jpg",
      nama: "IMKOM UMN",
      url: "https://www.instagram.com/imkom_umn",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_kampusupdate.jpg",
      nama: "Kampus Update",
      url: "https://www.instagram.com/kampusupdate",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_eventfest.id.png",
      nama: "Event Fest ID",
      url: "https://www.instagram.com/eventfest.id",
      bg: false,
    },       
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_event.list.jpg",
      nama: "event.lis",
      url: "https://www.instagram.com/event.list",
      bg: false,
    },     
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_events.ina.jpg",
      nama: "events.ina",
      url: "https://www.instagram.com/events.ina",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_edaranevent.jpg",
      nama: "Edaran Event",
      url: "https://www.instagram.com/edaranevent",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_mmtctv.PNG",
      nama: "MMTC TV",
      url: "https://www.instagram.com/mmtctv",
      bg: false,
    },  
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_magentaradio.PNG",
      nama: "Magenta Radio",
      url: "https://www.instagram.com/magenta.radio",
      bg: false,
    },  
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_bvoiceradio.png",
      nama: "BVoice Radio",
      url: "https://www.instagram.com/bvoice_radio",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_eventtangsel.PNG",
      nama: "Event Tangsel",
      url: "https://www.instagram.com/eventtangsel",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_infokuyy.id.PNG",
      nama: "infokuyy.id",
      url: "https://www.instagram.com/infokuyy.id",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_himtara.jpeg",
      nama: "HIMTARA",
      url: "https://www.instagram.com/himtara",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_dkbm.png",
      nama: "DKBM Muda",
      url: "https://dkbm.umn.ac.id",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_foxumn.jpg",
      nama: "Fox UMN",
      url: "https://www.instagram.com/fox_umn",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_himsi.jpg",
      nama: "Siberian (HIMSI UMN)",
      url: "https://himsi.umn.ac.id",
      bg: false,
    },
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_erafmunj.png",
      nama: "Educational Radio",
      url: "https://www.instagram.com/erafmunj",
      bg: false,
    },                                   
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_hmdkvumn.jpg",
      nama: "HMDKV UMN",
      url: "https://www.instagram.com/hmdkv_umn",
      bg: false,
    },  
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_kmi.png",
      nama: "Komunitas Muda Inspiratif",
      url: "https://www.instagram.com/komunitasmudainspiratif",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_atmajayaradio.jpg",
      nama: "Atma Jaya Radio",
      url: "#",
      bg: false,
    },      
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_gdcumn.jpg",
      nama: "GDC UMN",
      url: "https://gdc.umn.ac.id",
      bg: false,
    }, 
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_kumpulan.event.jpg",
      nama: "Kumpulan Event",
      url: "https://www.instagram.com/kumpulan.event",
      bg: false,
    },       
    {
      jenis: "medpar",
      src: "Assets/MediaPartner/LOGO_umnlions.jpg",
      nama: "UMN Lions Basketball",
      url: "https://www.instagram.com/umnlions_basketball",
      bg: false,
    },              
                
  ];

  const texts = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.show);
      } else {
        entry.target.classList.remove(styles.show);
      }
    });

    if (texts.current) {
      const targets = texts.current;
      targets.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (texts.current) {
        observer.disconnect();
      }
    };
  }, []);

  const sponsorArr: any = [];
  const medparArr: any = [];

  useEffect(() => {console.log(sponsorArr.length)}, [sponsorArr])

  list.forEach((list) => {
    const item = (
      <GridItem
        display={list.nama == "" ? {base: "none", lg: "block"} : "block"}
        w={{ base: "15rem", md: "15rem", lg: "15rem", xl: "17rem" }}
        _hover={{
          transform: "scale(1.1)",
          transition: "all .4s ease-in-out",
          zIndex: "100",
        }}
        m="auto">
        <Link href={list.url} target="_blank"
        display={list.nama == "" ? "none" : "block"}
        >
        <Image
            objectFit={"contain"}
            background={list.bg ? "white" : "transparent"}
            borderRadius={list.bg ? "14px" : "0"}
            p="2"
            margin="0 auto"
            src={list.src}
            alt={list.nama}
        />
        </Link>        
      </GridItem>
    );

    list.jenis === "medpar" ? sponsorArr.push(item) : medparArr.push(item);
  });

  return (
    <Box>
      <Flex
        id="sponsors"
        className={styles.hidden}
        py={{ base: "10rem", md: "auto" }}
        h="auto"
        w="100%"
        maxW="1366px"
        mx="auto"
        my="auto"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mt={{base: "0", xl: "2rem"}}
          mb={{base: "5rem", xl: "3rem"}}
          fontSize={{ base: "3rem", md: "5rem", lg: "5rem" }}
          textAlign="center"
          filter={"drop-shadow(0 0 10px #c28824)"}>
          MEDIA PARTNER
        </Heading>

        {sponsorArr.length % 3 == 0
        
            ?
              <Grid
                  // bg='yellow'
                  id="gridSponsor"
                  templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
                  columnGap="5rem"
                  rowGap={{base:"4rem", lg:"1rem"}}
                  height="max-content"
                  justifyContent='center'
                  alignItems='center'
                  position="relative">
                  {sponsorArr}
              </Grid>

            : <Flex 
                m='0 auto'
                w='85%'
                // bg='red'
                height="max-content"  
                position="relative" 
                placeItems={"center"}
                alignItems="center"
                justifyContent={"center"}
                justifyItems={"center"} 
                columnGap={{base : '2rem', lg : '3.5rem'}}
                rowGap={{base:"4rem", lg:"2.5rem"}}                                                        
                flexWrap="wrap"                
              >
                {sponsorArr}
              </Flex>
        }


      </Flex>
      {/* <Flex
        className={styles.hidden}
        display={props.onShow}
        h={{ sm: "auto", md: "100vh" }}
        w="70%"
        maxW="1366px"
        mx="auto"
        my="auto"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        mt="100px"
        position="relative"
        ref={(el: HTMLDivElement) => texts.current.push(el!)}>
        <Heading
          color="#c28824"
          mb="20px"
          fontSize={{ base: "2rem", md: "60px", lg: "5rem" }}
          textAlign="center"
          filter={"drop-shadow(0 0 10px #c28824)"}>
          MEDIA PARTNER
        </Heading>
        <Grid
          id="gridMedpar"
          templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={{ base: "4rem", lg: "7rem" }}
          height="max-content"
          position="relative">
          {medparArr}
        </Grid>
      </Flex> */}
    </Box>
  );
};

export { ListMedpar as ListMedpar };
