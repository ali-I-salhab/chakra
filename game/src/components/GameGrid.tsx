import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Text>{error && <p>Error: {error}</p>}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={10}
        padding={"10px"}
      >
        {loading && skeletons.map((e) => <GameCardSkeleton />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
