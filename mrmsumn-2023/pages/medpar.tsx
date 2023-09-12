import { Loading, Navbar, ListMedpar } from "@/components";
import { useState, useEffect, useRef } from "react";

const Medpar = () => {

  const [list, setList] = useState<any>([]);

  const fetchData = async () => {
    const response = await fetch("/api/sponsor_medpar?type=medpar");

    const parsedResponse = await response.json();      
    if (parsedResponse.status == 200){
        const list = parsedResponse.data;
        setList(list);
    }     
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
      {/* <Loading /> */}
      <Navbar />

      <ListMedpar list={list}/>
    </>
  );
};

// export async function getServerSideProps(context : any){
//   const { req, res, params } = context;
//   const APP_URL = process.env.APP_URL;

//   try {
      
//       const response = await fetch(APP_URL + `/api/sponsor_medpar?type=medpar`);

//       const parsedResponse = await response.json();      
//       if (parsedResponse.status == 200){
//           const list = parsedResponse.data;
//           return {props : {list}}          
//       }      
      
//       return {
//           props : {
//               fail : true
//           }
//       }


//   } catch (err) {
//       return {
//           props : {
//               fail : true, 
//           }
//       }
//   }

// }

export default Medpar;
