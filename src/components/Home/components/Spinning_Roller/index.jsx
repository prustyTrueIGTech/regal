'use client';

import responsiveStyles from "@/lib/responsiveStyles";
import Image from "next/image";

export const Spinning_Roller = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#232626] via-[#4F9053] to-[#232626] p-4 md:p-6">
      <div className="text-center w-full max-w-xl">
        <ul className="space-y-4 md:space-y-6">
          <li className={`uppercase font-serif font-semibold leading-tight tracking-wider text-white text-lg md:text-2xl ${responsiveStyles.text}`}>
            No Purchase Necessary
          </li>

          <li className={`uppercase leading-tight tracking-wider text-white text-base md:text-xl ${responsiveStyles.text}`}>
            It's always
            <span className="text-[#3BED84] mx-1">free</span>
            to play
          </li>

          <li className="flex justify-center">
            <Image
              src="/png/img_spinner.png"
              alt="Spinner_Roller"
              width={399}
              height={425}
              className="w-full h-auto max-w-[300px] md:max-w-[399px]"
            />
          </li>

          <li className={`flex justify-center items-center mx-auto py-3 px-6 md:py-4 md:px-8 gap-2 border-2 rounded-md border-[#EFAA4A] bg-gradient-to-r from-[#24664B] via-[#547931] to-[#227858] w-full max-w-sm md:max-w-md`}> 
            <button className="uppercase text-center text-white font-semibold text-sm md:text-base">
              Switch on SC Coins
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};