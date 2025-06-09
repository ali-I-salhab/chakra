import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Game[]>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, loading };
};

export default useGames;
