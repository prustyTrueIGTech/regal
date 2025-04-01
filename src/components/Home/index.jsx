"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { apiRequest, Method } from "@/services/axios";
import { Button } from "@/components/ui/button";

const HomePage = () => {
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

  return (
    <section className="w-full h-screen bg-gradient-to-r from-[#2E4131] to-[#76A77E] px-4 py-8 sm:px-8 sm:py-12 space-y-12 overflow-hidden">
      {games.map((gameCategory) =>
        gameCategory.CasinoGames.length > 4 ? (
          <Col key={gameCategory.id} className="space-y-4">
            {/* Header */}
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <Image
                  src="/svg/ic_slots.svg"
                  width={28}
                  height={28}
                  alt="Slots"
                  className="w-[28px] h-[28px]"
                />
                <h2 className="text-2xl font-bold">Slots</h2>
              </div>
            </div>

            {/* Carousel STARTS */}
            <Carousel className="relative">
              {/* CarouselContent with right padding to prevent overlap */}
              <CarouselContent className="pl-4 pr-20">
                {gameCategory.CasinoGames.map((game) => (
                  <CarouselItem
                    key={game.id}
                    className="basis-auto w-[160px] h-[200px] rounded-xl overflow-hidden"
                  >
                    <img
                      src={game.thumbnailUrl}
                      alt={game.name}
                      className="w-full h-full object-cover rounded-xl border border-white/10"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows INSIDE Carousel */}
              <div className="w-[100px]  top-0 right-4  flex gap-2" style={{width : '100px'}}>
                <CarouselPrevious className="  bg-white rounded-full w-9 h-9 shadow-md hover:bg-gray-100 transition" />
                <CarouselNext className="bg-white rounded-full w-9 h-9 shadow-md hover:bg-gray-100 transition" />
              </div>
            </Carousel>
          </Col>
        ) : null
      )}

      <div
        className={`flex justify-center items-center mx-auto py-3 px-6 md:py-4 md:px-8 gap-2 border-2 rounded-md border-[#EFAA4A] bg-gradient-to-r from-[#24664B] via-[#547931] to-[#227858] w-full max-w-sm md:max-w-md`}
      >
        <button className="uppercase text-center text-white font-semibold text-sm md:text-base">
          PLAY FOR FREE
        </button>
      </div>
    </section>
  );
};

export default HomePage;
