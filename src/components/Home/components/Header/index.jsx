"use client";

import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Row, Col } from "react-bootstrap";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { useCoinToggler } from "../../hooks/useCoinToggler";
import { Text } from "@/components/ui/text";

export const Header = () => {
  const { handleToggle, selectedCoins, getBalance } = useCoinToggler();

  return (
    <header className="px-6 py-4 bg-gradient-to-r from-[#3FAE39] to-[#A56BC2]">
      <Row className="items-center justify-between w-full">
        {/* Logo */}
        <Col xs="auto">
          <Image
            src="/svg/ic_logo.svg"
            alt="Logo"
            width={189}
            height={47}
            className="mt-2"
          />
        </Col>

        {/* User Info Box */}
        <Col xs="auto">
          <Row>
            <Col xs="auto">
              <div className="flex items-center justify-between border-2 border-white rounded-full px-3 py-1 bg-black w-[220px] h-[45px]">
                {/* Left Avatar Image */}
                <Avatar className="-ml-[2rem] bg-white rounded-full border-2 border-white w-[45px] h-[45px]">
                  <AvatarImage
                    src="/svg/ic_wallet.svg"
                    alt="Avatar"
                    width={39}
                    height={39}
                    className="rounded-full bg-black"
                  />
                </Avatar>

                {/* Middle text aligned center */}
                <div className="flex gap-1 items-center text-white text-lg font-semibold">
                  <span>{selectedCoins}</span>
                  <span>{getBalance(selectedCoins)}</span>
                </div>

                {/* Plus Icon at end */}
                <Avatar className="rounded-full w-[24px] h-[24px] flex items-center justify-center">
                  <AvatarImage
                    src="/svg/ic_add.svg"
                    alt="Add"
                    className="rounded-full"
                  />
                </Avatar>
              </div>
            </Col>
            {/* Coin Toggler (Corrected and fully rounded) */}
            <Col xs="auto">
              <ToggleGroup
                type="single"
                value={selectedCoins}
                onValueChange={(value) => handleToggle(value)}
                className="bg-black rounded-full border border-white flex items-center justify-between p-1 w-[120px] h-[45px] overflow-hidden"
              >
                <ToggleGroupItem
                  value="SC"
                  className={`rounded-full w-[45%] h-[40px] flex items-center justify-center font-bold text-sm ${
                    selectedCoins === "SC"
                      ? "bg-white text-green-700 rounded-full"
                      : "bg-transparent text-white"
                  }`}
                >
                  S
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="GC"
                  className={`rounded-full w-[45%] h-[40px] flex items-center justify-center font-bold text-sm ${
                    selectedCoins === "GC"
                      ? "bg-white text-green-700"
                      : "bg-transparent text-white"
                  }`}
                >
                  G
                </ToggleGroupItem>
              </ToggleGroup>
            </Col>
          </Row>
        </Col>

        {/* Menu (exactly styled and aligned) */}
        <Col xs="auto">
          <div
        
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image src={"/svg/ic_menu.svg"} alt="Menu" width={24} height={24} />
            <Text className="uppercase font-semibold tracking-wider text-white text-sm">
              MENU
            </Text>
          </div>
        </Col>
      </Row>
    </header>
  );
};
