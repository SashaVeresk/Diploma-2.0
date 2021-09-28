import React from 'react';
import './days.scss';
import {Day} from './days';
import { GlobalSvgSelector } from '../../assets/images/icon/globalSvgSelector/globalSvgSelector';


interface Props {
    today:Day;
}

export const Card = ({today}:Props) => {

    const {day, day_info, icon_id, temp_day, temp_night, info} = today;
    return(
        <div className="card">
            <div className="day">{day}</div>
            <div className="dayInfo">{day_info}</div> 
            <div className="img">
                <GlobalSvgSelector id={icon_id} />
            </div>    
            <div className="temp_day">{temp_day}</div>
            <div className="temp_night">{temp_night}</div>
            <div className="info">{info}</div>
        </div>)
}