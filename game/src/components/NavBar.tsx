import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image borderRadius="full" boxSize="60px" alt="log" src={logo}></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
