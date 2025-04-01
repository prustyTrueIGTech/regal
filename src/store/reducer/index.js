'use client';

import { loading, nav_bar, pending, selected_coins, success } from "@/components/Home/constants";

export const initialState = { // <-- clearly export initialState
    cardData: [],
    coin: {
      selectedCoins: "SC",
    },
    value: {
      selectedValues: {
        selectedValues_Wallet: [],
      }
    },
};

export const CardItems = (state = initialState, action) => {
    switch(action.type){
        case selected_coins: 
            console.log('Selected_Coins', action);
            return {
                ...state,
                coin: {
                  ...state.coin,
                  selectedCoins: action.payload,
                },
                cardData: [...state.cardData, action.payload],
            };

        case nav_bar: 
            console.log('Nav_Bar', action);
            return {
                ...state,
                cardData: [...state.cardData, action.payload],
            };

        case loading: 
            console.log('Loading...', action);
            return {
                ...state,
                cardData: [...state.cardData, action.payload],
            };

        case pending: 
            console.log('Pending', action);
            return {
                ...state,
                cardData: [...state.cardData, action.payload],
            };

        case success: 
            console.log('Success', action);
            return {
                ...state,
                cardData: [...state.cardData, action.payload],
            };

        default:
            return state;
    }
};
