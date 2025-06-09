import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  title: string;
  short_description: string;
  thumbnail: string;
  release_date: string;
  platform: string;
  genre: string;
  freetogame_profile_url: string;
  game_url: string;
  publisher: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Game[]>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
