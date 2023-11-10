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
} from "@chakra-ui/react";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import { AdminNav } from ".";

const AdminTransaction = () => {
  const [data, setData] = useState([{}]);
  const [filteredData, setFilteredData] = useState([{}]);
  const [report, setReport] = useState({ quantity: 0, cuan: 0 });

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://mrms2023.my.id/api/transaction/get/transaction",
        {
          headers: {
            Authorization: `Bearer ` + getCookies().token,
          },
        }
      );

      const parsedResponse = await response.json();

      if (parsedResponse.code == 201) {
        const list = parsedResponse.data;
        console.log(list);
        setData(list);
        setFilteredData(list);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  useEffect(() => {
    let sumQuantity = 0;
    let sumCuan = 0;
    data.forEach((item: any) => {
      sumQuantity += item.quantity;
      if (item.item_id == "Earlybird") sumCuan += 85000 * item.quantity;

      return { sumCuan, sumQuantity };
    });

    setReport({ quantity: sumQuantity, cuan: sumCuan });
  }, [data]);

  const conversiTanggal = (isoDate: any) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString();

    return formattedDate;
  };

  const handleResendEmail = async (transactionID: string) => {
    console.log(transactionID);

    const req = { order_id: transactionID.toString() };
    console.log(req);
    const res = await fetch("http://localhost:8000/api/admin/ticket/resend", {
      body: JSON.stringify(req),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.json());
  };

  const filterData = (e: any) => {
    const input = e.target.value;
    console.log(input);
    const filterData = [...data].filter((e: any) => {
      const item_idMatch =
        e.item_id &&
        e.item_id.toLowerCase().toString().includes(input.toLowerCase());
      const nameMatch =
        e.nama && e.nama.toLowerCase().toString().includes(input.toLowerCase());
      const dateMatch =
        e.payment_done_time &&
        conversiTanggal(e.payment_done_time)
          .toLowerCase()
          .toString()
          .includes(input.toLowerCase());

      const qtMatch =
        e.quantity &&
        e.quantity.toString().toLowerCase().includes(input.toLowerCase());
      return item_idMatch || nameMatch || dateMatch || qtMatch;
    });

    setFilteredData(filterData);
  };

  return (
    <Box p="1rem" color={"white"}>
      <AdminNav></AdminNav>
      <Text fontWeight={"bold"} mt={"2rem"}>
        Jumlah tiket terjual: {report.quantity}
      </Text>
      <Text fontWeight={"bold"}>
        Total Pendapatan: Rp. {report.cuan.toLocaleString()}
      </Text>
      <Input
        color={"black"}
        onChange={(e) => filterData(e)}
        mt="2rem"
        placeholder="search"
        bg={"white"}></Input>
      <Grid mt={"2rem"} overflow={"scroll"} templateColumns="repeat(6, 1fr)">
        <GridItem p="1rem" border={"solid white 1px"}>
          Type Tiket
        </GridItem>
        <GridItem p="1rem" border={"solid white 1px"}>
          Nama
        </GridItem>
        <GridItem p="1rem" border={"solid white 1px"}>
          Email
        </GridItem>
        <GridItem p="1rem" border={"solid white 1px"}>
          Jumlah Tiket
        </GridItem>
        <GridItem p="1rem" border={"solid white 1px"}>
          Tanggal Transaksi
        </GridItem>
        <GridItem p="1rem" border={"solid white 1px"}>
          Tool
        </GridItem>

        {filteredData.map((item: any) => {
          return (
            <>
              <GridItem p="1rem" border={"solid white 1px"} key={item.id}>
                {item.item_id}
              </GridItem>
              <GridItem p="1rem" border={"solid white 1px"}>
                {item.nama}
              </GridItem>
              <GridItem p="1rem" border={"solid white 1px"}>
                {item.email}
              </GridItem>
              <GridItem
                p="1rem"
                textAlign={"center"}
                border={"solid white 1px"}>
                {item.quantity}
              </GridItem>
              <GridItem p="1rem" border={"solid white 1px"}>
                {conversiTanggal(item.payment_done_time)}
              </GridItem>
              <GridItem color={"black"} p="1rem" border={"solid white 1px"}>
                <Button onClick={() => handleResendEmail(item.transaction_id)}>
                  Resend email
                </Button>
              </GridItem>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AdminTransaction;
