// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req, res
) {
	try {
	if (req.method !== "POST") {
		return res.status(400).json({
		  status: "FAIL",
		  code: 404,
		  message: "Page not found",
		});
    }
		
	const list=[
        {
            type : 2,
            src: "/images/Sponsor/LOGO_ultimagz.png",
            nama: "Ultimagz",
            url: "https://ultimagz.com/",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_umnjuice.png",
            nama: "UMN Juice",
            url: "https://juice.umn.ac.id/",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_umntv.png",
            nama: "UMN TV",
            url: "https://tv.umn.ac.id/",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_umnradio.png",
            nama: "UMN Radio",
            url: "https://radio.umn.ac.id",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_infolombaevent.id.png",
            nama: "infolombaevent.id",
            url: "https://www.instagram.com/infolombaevent.id/",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_radiountar.jpg",
            nama: "Radio Untar",
            url: "https://www.instagram.com/radiountar",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_deoagency.jpg",
            nama: "Deo Agency",
            url: "https://www.instagram.com/deoagency",
            bg: false,
          },  
          {
            type : 2,
            src: "/images/Sponsor/LOGO_imkomumn.jpg",
            nama: "IMKOM UMN",
            url: "https://www.instagram.com/imkom_umn",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_kampusupdate.jpg",
            nama: "Kampus Update",
            url: "https://www.instagram.com/kampusupdate",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_eventfest.id.png",
            nama: "Event Fest ID",
            url: "https://www.instagram.com/eventfest.id",
            bg: false,
          },       
          {
            type : 2,
            src: "/images/Sponsor/LOGO_event.list.jpg",
            nama: "event.lis",
            url: "https://www.instagram.com/event.list",
            bg: false,
          },     
          {
            type : 2,
            src: "/images/Sponsor/LOGO_events.ina.jpg",
            nama: "events.ina",
            url: "https://www.instagram.com/events.ina",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_edaranevent.jpg",
            nama: "Edaran Event",
            url: "https://www.instagram.com/edaranevent",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_mmtctv.PNG",
            nama: "MMTC TV",
            url: "https://www.instagram.com/mmtctv",
            bg: false,
          },  
          {
            type : 2,
            src: "/images/Sponsor/LOGO_magentaradio.PNG",
            nama: "Magenta Radio",
            url: "https://www.instagram.com/magenta.radio",
            bg: false,
          },  
          {
            type : 2,
            src: "/images/Sponsor/LOGO_bvoiceradio.png",
            nama: "BVoice Radio",
            url: "https://www.instagram.com/bvoice_radio",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_eventtangsel.PNG",
            nama: "Event Tangsel",
            url: "https://www.instagram.com/eventtangsel",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_infokuyy.id.PNG",
            nama: "infokuyy.id",
            url: "https://www.instagram.com/infokuyy.id",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_himtara.jpeg",
            nama: "HIMTARA",
            url: "https://www.instagram.com/himtara",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_dkbm.png",
            nama: "DKBM Muda",
            url: "https://dkbm.umn.ac.id",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_foxumn.jpg",
            nama: "Fox UMN",
            url: "https://www.instagram.com/fox_umn",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_himsi.jpg",
            nama: "Siberian (HIMSI UMN)",
            url: "https://himsi.umn.ac.id",
            bg: false,
          },
          {
            type : 2,
            src: "/images/Sponsor/LOGO_erafmunj.png",
            nama: "Educational Radio",
            url: "https://www.instagram.com/erafmunj",
            bg: false,
          },                                   
          {
            type : 2,
            src: "/images/Sponsor/LOGO_hmdkvumn.jpg",
            nama: "HMDKV UMN",
            url: "https://www.instagram.com/hmdkv_umn",
            bg: false,
          },  
          {
            type : 2,
            src: "/images/Sponsor/LOGO_kmi.png",
            nama: "Komunitas Muda Inspiratif",
            url: "https://www.instagram.com/komunitasmudainspiratif",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_atmajayaradio.jpg",
            nama: "Atma Jaya Radio",
            url: "#",
            bg: false,
          },      
          {
            type : 2,
            src: "/images/Sponsor/LOGO_gdcumn.jpg",
            nama: "GDC UMN",
            url: "https://gdc.umn.ac.id",
            bg: false,
          }, 
          {
            type : 2,
            src: "/images/Sponsor/LOGO_kumpulan.event.jpg",
            nama: "Kumpulan Event",
            url: "https://www.instagram.com/kumpulan.event",
            bg: false,
          },       
          {
            type : 2,
            src: "/images/Sponsor/LOGO_umnlions.jpg",
            nama: "UMN Lions Basketball",
            url: "https://www.instagram.com/umnlions_basketball",
            bg: false,
          },        
		{
		  type : 1,
		  src: "/images/Sponsor/LOGO_KAY_COLLECTION.png",
		  nama: "Kay Collection",
		  url: "https://www.kaycollection.com/",
		  bg: true,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/Logo_PUYO_DEFAULT.png",
		  nama: "PUYO Desserts",
		  url: "https://www.puyodesserts.com/",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/LOGO_MASAMI.png",
		  nama: "Masami",
		  url: "http://www.masamishouko.com/",
		  bg: true,
		},

		{
		  type : 1,
		  src: "/images/Sponsor/LOGO_REVO_PRINT_SHOP.png",
		  nama: "Revo Print Shop",
		  url: "https://www.revoprintshop.com/",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/LOGO_CJ.png",
		  nama: "Christoper John",
		  url: "https://www.instagram.com/christjhn",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/Logo Myca Tulisan Putih.png",
		  nama: "Myca",
		  url: "https://www.instagram.com/mycaflorist/",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/Logo Libreath.png",
		  nama: "Libreath",
		  url: "https://www.instagram.com/libreath.florist",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/Logo Dennis Catering.jpg",
		  nama: "Catering",
		  url: "https://www.instagram.com/denniscatering_",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/Logo Mile.jpg",
		  nama: "Miliè",
		  url: "https://www.instagram.com/milieofficial",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/LOGO_implora.jpg",
		  nama: "Implora",
		  url: "",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/LOGO_chi.jpg",
		  nama: "Chi Forest",
		  url: "https://chiforest.com",
		  bg: false,
		},
		{
		  type : 1,
		  src: "/images/Sponsor/LOGO_msp.jpg",
		  nama: "MSP Film Equipment",
		  url: "https://msprental.com/",
		  bg: false,
		},
		{
		  type : 1,
		  src: "https://cdn.discordapp.com/attachments/1125453534062719016/1141058868353445918/Logo_Roti_Bakar_88.png",
		  nama: "Rotbak 88",
		  url: "https://rotibakar88.id",
		  bg: false,
		},
		{
		  type : 1,
		  src: "https://cdn.discordapp.com/attachments/1125453534062719016/1141058868105969745/logo-tiketbox.png",
		  nama: "Tiketbox",
		  url: "https://tiketbox.com",
		  bg: false,
		},
		{
		  type : 1,
		  src: "https://cdn.discordapp.com/attachments/1125453534062719016/1141058867829166170/Logo_MuA_Gareulis_copy.png",
		  nama: "Gareulis",
		  url: "https://www.instagram.com/mua.gareulis",
		  bg: false,
		}
	]		
	
	    const insert = await prisma.sponsor_medpar.createMany({
      data: list
    });
	
	
    prisma.$disconnect();
		return res.status(201).json({
		  status: "SUCCESS",
		  code: 201,
		});	
	
	} catch(err){
    prisma.$disconnect();
				return res.status(500).json({
		  status: "FAIL",
		  code: 500,
		  message: err,
		});
	}
	
	

		
  }

