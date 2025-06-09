import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";

interface Props {
  name: String;
}
const PlatformIconList = (props: Props) => {
  const IconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    web: BsGlobe2,
    android: FaAndroid,
  };
  return (
    <HStack marginY={"10px"}>
      <Icon color={"gray.500"} as={IconMap["mac"]} marginRight={"12px"}>
        web
      </Icon>
      <Icon as={IconMap["playstation"]} marginRight={"12px"}>
        web
      </Icon>
      <Icon as={IconMap["pc"]} marginRight={"12px"}>
        web
      </Icon>
      <Icon as={IconMap["android"]} marginRight={"12px"}>
        web
      </Icon>
    </HStack>
  );
};

export default PlatformIconList;
