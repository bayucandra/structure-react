import shuffle from "lodash/shuffle";
import { StockItemProp } from "./stock-item";

import iconYearnClassic from "images/stock-icons/yearn-classic-finance.svg";
import iconDecentraland from "images/stock-icons/decentraland.png";
import iconShiba from "images/stock-icons/shiba-inu.png";
import iconAvalanche from "images/stock-icons/avalanche.png";
import iconCosmos from "images/stock-icons/cosmos.png";
import iconInternetComputer from "images/stock-icons/internet-computer.png";

export interface TabData {
    title: string;
    items: Array<StockItemProp>;
};

export enum TabTitle {
    LEADERS = "Leaders",
    STOCKS = "Stocks",
    CRYPTO = "Crypto",
    OPTIONS = "Options (Cooming soon)",

}

const stockList = [
    {
        icon: iconYearnClassic,
        title: "Yearn Classic Finance",
        amount: 20.19,
        up: true,
        percentage: 109.3
    },
    {
        icon: iconDecentraland,
        title: "Decentraland",
        amount: 3.12,
        up: true,
        percentage: 27.1
    },
    {
        icon: iconShiba,
        title: "SHIBA INU",
        amount: 0.00005225,
        up: true,
        percentage: 21.4
    },
    {
        icon: iconAvalanche,
        title: "Avalanche",
        amount: 83.31,
        up: true,
        percentage: 22.3
    },
    {
        icon: iconInternetComputer,
        title: "Internet Computer",
        amount: 46.03,
        up: true,
        percentage: 16.4
    },
    {
        icon: iconCosmos,
        title: "Cosmos",
        amount: 31.84,
        up: true,
        percentage: 12.0
    }
];

export const tabData = [
    {
        title: TabTitle.LEADERS,
        items: shuffle(stockList)
    },
    {
        title: TabTitle.STOCKS,
        items: shuffle(stockList)
    },
    {
        title: TabTitle.CRYPTO,
        items: shuffle(stockList)
    },
    {
        title: TabTitle.OPTIONS,
        items: shuffle(stockList)
    }
];