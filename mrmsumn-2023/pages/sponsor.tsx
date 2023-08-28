import { Loading, Navbar, ListSponsor } from "@/components";

const Sponsor = ({list} : any) => {
  return (
    <>
      {/* <Loading /> */}
      <Navbar />

      <ListSponsor list={list}/>
    </>
  );
};

export async function getServerSideProps(context : any){
  const { req, res, params } = context;
  const APP_URL = process.env.NODE_ENV == "development" 
  ? "http://localhost:3000" 
  : process.env.APP_URL;

  try {
      
      const response = await fetch(APP_URL + `/api/sponsor_medpar`);

      const parsedResponse = await response.json();      
      if (parsedResponse.status == 200){
          const list = parsedResponse.data;
          return {props : {list}}          
      }      
      
      return {
          props : {
              fail : true
          }
      }


  } catch (err) {
      return {
          props : {
              fail : true, 
              err
          }
      }
  }

}

export default Sponsor;
