import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.jpg";
const NavBar = () => {
  return (
    <HStack>
      <Image borderRadius="full" boxSize="60px" alt="log" src={logo}></Image>
      <Text>nav bar</Text>
    </HStack>
  );
};

export default NavBar;
