import { useRouter } from "next/router";
import {
    Box,
    Flex,
    Grid,
    GridItem,
    HStack,
    VStack,
    Text,
    Input,
    InputElementProps,
    Button,
    ButtonGroup,
    Table,
    Thead,
    Container,
    Card,
    CardBody,
    CardFooter,
    Tbody,
    // Input,
    Tr,
    Th,
    Td,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Checkbox,
    ModalCloseButton,    
    useDisclosure
  } from "@chakra-ui/react";
  import { cookies } from "next/headers";
  import { useEffect, useState } from "react";
  import { getCookies } from "cookies-next";
  import { AdminNav } from "..";





export default function List(){

    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [modalData, setModalData] = useState<any>(null);
    const [tickets, setTickets] = useState<any>([]);
    const [originalTickets, setOriginalTickets] = useState<any>([]);
    const [token, setToken] = useState<any>(null);

    const [count, setCount] = useState<any>(0);
    const [attendedCount, setAttendedCount] = useState<any>(0);
    const [nonAttendedCount, setNonAttendedCount] = useState<any>(0);

    const [vipFilter, setVipFilter] = useState<any>(false);
    const [attendFilter, setAttendFilter] = useState<any>(false);
    const [keyword, setKeyword] = useState<any>(null);


    // useEffect(() => {

    //     if (vipFilter || attendFilter){
    //         if (vipFilter){
    //             if (attendFilter){// vip & attend
    //                 setTickets(originalTickets.filter(data => data.attendance == 1 && data.token.startsWith("VIP")));
    //                 return;
    //             }
    //             // vip filter only
    //             setTickets(originalTickets.filter(data => data.token.startsWith("VIP") && data.attendance == 0));
    //         } else {
    //             // attend filter only
    //             setTickets(originalTickets.filter(data => data.attendance == 1));
    //         }

    //     } else {
    //         setTickets(originalTickets);
    //     }

    // }, [vipFilter, attendFilter]);

    useEffect(() => {
        setCount(tickets.length);
        setAttendedCount(tickets.filter((data : any) => data.attendance == 1).length);
        setNonAttendedCount(tickets.filter((data : any) => data.attendance == 0).length);
    }, [tickets]);



    const InfoModal = ({isOpen, onOpen, onClose, modalData} : any) => {

        return (
          <>
    
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{modalData?.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {modalData?.message}
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={modalData?.title == "KONFIRMASI" ? () => handleManualAttendance() : onClose}>
                    {modalData?.title == "KONFIRMASI" ? "Ya, saya yakin." : "Close"}
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
      


    const fetchData = async () => {
        try {
            const response = await fetch(
                // "https://0fec-111-67-81-50.ngrok-free.app/api/ticket/attendance",
                "https://mrms2023.my.id/api/ticket/get_all",            
                {
                  headers: {
                    Authorization: `Bearer ` + getCookies().token,
                  },
                  method : "GET", 
                }
              );
    
            const parsedResponse = await response.json();        
            // throw new Error("WKKWKW");
    
            if (parsedResponse.code != 200){
                setModalData({
                    title : "FAIL", 
                    message : "Gagal mendapatkan data tiket."
                })
                return;
            }
    
            setTickets(parsedResponse.data.ticket);  
            setOriginalTickets(parsedResponse.data.ticket);

        } catch(err : any){
            console.error(err);
            setModalData({
                title : "SERVER ERROR", 
                message : err.message
            })
        }

    }

    const handleManualAttendance = async () => {
        try {
            const response = await fetch(
                // "https://0fec-111-67-81-50.ngrok-free.app/api/ticket/attendance",
                "https://mrms2023.my.id/api/ticket/attendance",            
                {
                  headers: {
                    Authorization: `Bearer ` + getCookies().token,
                    'Content-Type': 'application/json'
                  },
                  method : "POST", 
                  body : JSON.stringify({token})
                }
              );
    
            const parsedResponse = await response.json();
    
            if (parsedResponse.code == 200){
                setModalData({
                    title : "BERHASIL!",
                    message : parsedResponse.message
                });
            }
            else if (parsedResponse.code == 404 || parsedResponse.code == 422){
                setModalData({
                    title : "GAGAL", 
                    message : parsedResponse.message
                }); 
            }
            else {
                setModalData({
                    title : "SERVER ERROR", 
                    message : parsedResponse.message
                }); 
            }
    
    
            // setModalData(null);
            setToken(null);            

        } catch (err : any) {
            console.error(err)
            setModalData({
                title : "SERVER ERROR", 
                message : err.message
            });
        }        
    }

    const handleConfirmation = (token : any, nama : any, transaction_id : any) => {
        setModalData({
            title : "KONFIRMASI", 
            message : `Absensi tiket ${token} | ${transaction_id} atas nama ${nama}?`
        })
        setToken(token);
    }

    const handleSearch = () => {
        if (!vipFilter && !attendFilter && !keyword){
            setTickets(originalTickets);
            return
        }

        if (keyword){
            if (vipFilter && attendFilter){
                    setTickets(originalTickets.filter((item : any)=>
                        item.nama.toLowerCase().includes(keyword.toLowerCase()
                        && item.attendance == 1
                        // && item.token.startsWith("VIP")
                    )
                ));            
            } else if (vipFilter){
                setTickets(originalTickets.filter((item : any)=>
                    item.nama.toLowerCase().includes(keyword.toLowerCase()
                    // && item.token.startsWith("VIP")
                )));            
            } else if (attendFilter) {
                setTickets(originalTickets.filter((item : any)=>
                    item.nama.toLowerCase().includes(keyword.toLowerCase()
                    && item.attendance == 1
                )));             
            } else {
                setTickets(originalTickets.filter((item : any)=>
                    item.nama.toLowerCase().includes(keyword.toLowerCase()
                )));                 
            }
        } else {
            if (vipFilter && attendFilter){
                    setTickets(originalTickets.filter((item : any)=>
                        // item.nama.toLowerCase().includes(keyword.toLowerCase()
                        item.attendance == 1
                        && item.token.startsWith("VIP")
                    )
                );            
            } else if (vipFilter){
                setTickets(originalTickets.filter((item : any)=>
                    // item.nama.toLowerCase().includes(keyword.toLowerCase()
                    item.token.startsWith("VIP")
                ));            
            } else if (attendFilter) {
                setTickets(originalTickets.filter((item : any)=>
                    // item.nama.toLowerCase().includes(keyword.toLowerCase()
                    item.attendance == 1
                ));                        
            }
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (modalData){
            onOpen();
        }
    }, [modalData]);    


    return (
        <>
            <AdminNav/>



            <Container maxW="container.lg" mt={8}>

            <Flex flexDir="column">
                <Text color="gold">Total : {count}</Text>
                <Text color="gold">Attended : {attendedCount}</Text>
                <Text color="gold">Not Attended : {nonAttendedCount}</Text>
            </Flex>

            <Flex>
                <Button bg={vipFilter ? "green" : "red"} onClick={() => setVipFilter(!vipFilter)}>VIP Filter</Button>
                <Button bg={attendFilter ? "green" : "red"} onClick={() => setAttendFilter(!attendFilter)}>Attended Filter</Button>
            </Flex>


            <Flex>
                <Input type="text" onChange={(e) => setKeyword(e.target.value)} placeholder="Search Name"></Input>
                <Button onClick={handleSearch}>Search</Button>
            </Flex>

   
                <Box p={6} shadow="md" borderWidth="1px" borderRadius="md">

                    {tickets.map((data : any) => {
                        return (
                            <>
                                <Card key={data?.token}>
                                    <CardBody>
                                        <Text fontWeight="bold">ID : <span style={{fontWeight:"normal"}}>{data?.token}</span></Text>
                                        <Text fontWeight="bold">TransactionID : <span style={{fontWeight:"normal"}}>{data?.transaction_id}</span></Text>
                                        <Text fontWeight="bold">Nama : <span style={{fontWeight:"normal"}}>{data?.nama}</span></Text>
                                        <Text fontWeight="bold">Email : <span style={{fontWeight:"normal"}}>{data?.email}</span></Text>
                                    </CardBody>
                                    <CardFooter>
                                    <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme={data?.attendance ? 'green' : 'red'} disabled={true}>
                                        {data?.attendance ? "Attended" : "Not Attended"}
                                    </Button>

                                    {
                                        data?.attendance == 0 &&
                                        <>
                                            <Button bgColor="gold" onClick={() => handleConfirmation(data?.token, data?.nama, data?.transaction_id)}>Manual</Button>                                      
                                        </>
                                    }


                                    </ButtonGroup>
                                </CardFooter>
                                </Card>                

                            </>                            
                        )
                    })}

                </Box>
            </Container>

            <InfoModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} modalData={modalData}/>

        </>
    )
}