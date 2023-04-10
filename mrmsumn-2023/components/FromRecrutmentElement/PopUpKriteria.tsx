import { Box } from "@chakra-ui/react";
import { onPause, onPlay } from "@/GeneralFunction";

const PopUpKriteria = () => {
  onPause();
  return <Box position={"fixed"}></Box>;
};

export { PopUpKriteria as PopUpKriteria };
