'use client';

import { useContext, useEffect, useState } from "react";
import { selected_coins } from "../constants";
import { useCommonContext } from "./useCommonContext";


export const useCoinToggler = (setCurrency = () => {}) => {
  const [open, setOpen] = useState(false);

  const {
    coin: { selectedCoins },
    value: { selectedValues },
    dispatch,
  } = useCommonContext();

  const handleToggle = (value) => {
    dispatch({
      type: selected_coins,
      payload: value,
    });
  };

  const getBalance = (value) => {
    const wallet = selectedValues?.selectedValues_Wallet?.find(
      (data) => data.currency === value
    );
    return wallet?.balance || "0.0";
  };

  useEffect(() => {
    if (selectedCoins === "coins") {
      setCurrency("GC");
    } else {
      setCurrency("SC");
    }
  }, [selectedCoins, setCurrency]);

  return {
    open,
    handleToggle,
    getBalance,
    setOpen,
    selectedCoins,
  };
};
