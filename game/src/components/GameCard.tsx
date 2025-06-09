import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading } from "@chakra-ui/react";
interface Props {
  game: Game;
}
const GameCard = (props: Props) => {
  return (
    <Card borderRadius={"20px"} margin={"12px"} overflow={"hidden"}>
      <Image src={props.game.thumbnail}></Image>
      <CardBody>
        <Heading fontSize={"2Xl"}>{props.game.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
