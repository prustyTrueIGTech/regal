"use client";

import { apiRequest, Method } from "@/services/axios";
import { useEffect, useState } from "react";

export const useHomeHook = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    apiRequest("/api/v1/casino/games", Method.GET)
      .then((data) => {
        setGames(data.data.casinoGames);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);


  return { games };
};
