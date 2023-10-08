import { Box, Text, Img, Flex, HStack, Link, Button } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
// import Link from "next/link";

const TokenQR = ({token}) => {

  const [qrToken, setQrToken] = useState<any>(token);


  const validateToken = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/ticket/get/" + token);
    const parsedResponse = await response.json();
    if (parsedResponse.code != 200){
        setQrToken(null);        
    } 
  }

  const downloadQR = async () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/api/pdf/ticket/download/" + token)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);       
        const temp = document.createElement('a');
        temp.href = url;
        temp.download = "Tiket Himalaya MR & MS UMN 2023";
        temp.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });    
  }

  useEffect(validateToken, []);

  return (
    <>
        { qrToken && <Img as={QRCode} value={qrToken} fgColor="black" bgColor={"white"} p={"1em"}/>}
        { qrToken && <Button onClick={downloadQR}>Unduh Tiket</Button>}
        { !qrToken && <h1>gaada</h1>}
    </>
  );
};

export default TokenQR;

export async function getServerSideProps(context) {
  
  const { query } = context; 
  const { token } = query;
  // const token = query.token || null;
  // console.log(token);

  return {
    props : {token}
  }
}