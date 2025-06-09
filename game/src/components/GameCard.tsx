import React from "react";
import { Game } from "../hooks/useGames";

import { Card, Text, CardBody, Image, Heading } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}
const GameCard = (props: Props) => {
  return (
    <Card borderRadius={"20px"} margin={"12px"} overflow={"hidden"}>
      <Image src={props.game.thumbnail}></Image>
      <CardBody>
        <Heading fontSize={"2Xl"}>{props.game.title}</Heading>
        <PlatformIconList name={props.game.platform} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
