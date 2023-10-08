import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

const ScanQr = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState<string | undefined>();

  const handleScan = async (scanData: any) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <>
      <Box>
        {!data && (
          <QrScanner
            onDecode={(result) => setData(result || undefined)}
            onError={(err) => console.log(err)}
          />
        )}
        {loadingScan && <p>Loading</p>}
        {data && <Text color="white">{data}</Text>}
      </Box>
    </>
  );
};

export default ScanQr;
