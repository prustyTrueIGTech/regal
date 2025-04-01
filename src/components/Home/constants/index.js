import home from '../../../../public/svg/ic_home.svg';
import promotions from '../../../../public/svg/ic_heart.svg'; 
import favourites from '../../../../public/svg/ic_heart.svg';
import lobby from '../../../../public/svg/ic_lobby.svg';
import slots from '../../../../public/svg/ic_slots.svg';
import liveCasino from '../../../../public/svg/ic_liveCasino.svg';
import poker from '../../../../public/svg/ic_poker.svg';
import gameShows from '../../../../public/svg/ic_giftBox.svg';
import roulette from '../../../../public/svg/ic_spinner.svg';
import betGames from '../../../../public/svg/ic_giftBox.svg';
import evolution from '../../../../public/svg/ic_diamond.svg';
import thunderKick from '../../../../public/svg/ic_up&down.svg';

export const selected_coins = "SelectedCoins";
export const nav_bar = "NavBar";
export const loading = "Loading...";
export const pending = "Pending...";
export const success = "Success";

export const NavBar = () => [
  {
    id: 1,
    title: "Home",
    icon: home,
    type: "link",
    link: "/",
  },
  {
    id: 2,
    title: "Promotions",
    icon: promotions,
    type: "link",
    link: "/promotions",
  },

  {
    id: 3,
    title: "Favourites",
    icon: favourites,
    type: "link",
    link: "/favourites",
  },
  {
    id: 5,
    title: "Categories",
    type: "dropdown",
    link: "/categories",
    options: [
        {
            title: "Lobby",
            icon: lobby,
            type: "link",
            link: "/lobby",
            button: true,
        },
        {
            title: "Slots",
            icon: slots,
            type: "link",
            link: "/slots",
            button: true,
        },
        {
            title: "Live Casino",
            icon: liveCasino,
            type: "link",
            link: "/live_casino",
            button: true,
        },
        {
            title: "Poker",
            icon: poker,
            type: "link",
            link: "/poker",
            button: true,
        },
        {
            title: "Game Shows",
            icon: gameShows,
            type: "link",
            link: "/game_shows",
            button: true,
        },
        {
            title: "Roulette",
            icon: roulette,
            type: "link",
            link: "/roulette",
            button: true,
        },

    ]
  },
  {
    id: 6,
    title: "Providers",
    type: "dropdown",
    options: [
        {
            title: "Bet Games",
            icon: betGames,
            type: "link",
            link: "/betGames",
            button: true,
        },
        {
            title: "Evolution",
            icon: evolution,
            type: "link",
            link: "/evolution",
            button: true,
        },
        {
            title: "ThunderKick",
            icon: thunderKick,
            type: "link",
            link: "/thunderKick",
            button: true,
        },

    ]
  },
];
