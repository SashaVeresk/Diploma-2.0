import React from 'react';
import './days.scss';
import {Card} from "./card";
import { Tabs } from './tabs';

interface Props {}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props:Props) => {

    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sunSmall',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце',
          },
          {
            day: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь',
          },
          {
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Сб',
            day_info: '28 авг',
            icon_id: 'sunSmall',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day: 'Вс',
            day_info: '28 авг',
            icon_id: 'sunSmall',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
    ]
  return(
    <>
    <Tabs />
    <div className="days">{
        days.map((today:Day) => (
        <Card today={today}/>
        ))}
    </div>
    </>
  ); 
};