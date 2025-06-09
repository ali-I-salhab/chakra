import React from "react";
import { Game } from "../hooks/useGames";

import { Card, Text, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}
const GameCard = (props: Props) => {
  return (
    <Card borderRadius={"20px"} margin={"12px"} overflow={"hidden"}>
      <Image src={props.game.thumbnail}></Image>
      <CardBody>
        <Heading fontSize={"2Xl"}>{props.game.title}</Heading>
        <HStack justifyContent={"space-between"}>
          {" "}
          <PlatformIconList name={props.game.platform} />
          <CriticScore score={props.game.id} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
