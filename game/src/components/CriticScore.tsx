import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const CriticScore = (props: Props) => {
  let color = props.score > 340 ? "red" : "green";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"12px"}
    >
      {props.score}
    </Badge>
  );
};

export default CriticScore;
