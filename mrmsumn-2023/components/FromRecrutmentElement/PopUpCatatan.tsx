import { Box } from "@chakra-ui/react";
import { onPause, onPlay } from "@/GeneralFunction";

const PopUpCatatan = () => {
  onPause();
  return <Box position={"fixed"}></Box>;
};

export { PopUpCatatan as PopUpCatatan };
