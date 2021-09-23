import React from "react";
import  './home.scss'
import { ThisDay } from "../thisDay/thisDay";
import { ThisDayInfo } from "../thisDayInfo/thisDayInfo";

interface Props {}

export const Home = (props: Props) => {
    return (
        <div className = 'home'>
            <ThisDay />
            <ThisDayInfo />
        </div>
    )
}