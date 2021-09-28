import React from 'react';
import Select from 'react-select/src/Select';
import './thisDayInfo.scss';
import cloud from '../../assets/images/claud.png';
import { ThisDayItem } from './thisDayItem';

interface Props {}

export interface Item {
    iconId: string;
    name: string;
    value: string;
}
export const ThisDayInfo = (props: Props) => {
    const items =[
    {
        iconId:'temp',
        name:'Температура',
        value:'20° - ощущаетсся как 17° ',
    },
    {
        iconId:'pressure',
        name:'Давление',
        value:'765 мм ртутного столба - нормальное',
    },
    {
        iconId:'pretcipitation',
        name:'Осадки',
        value:'Без осадков',
    },
    {
        iconId:'wind',
        name:'Ветер',
        value:'3 м/с юго-запад - легкий ветер',
    },
]
    return (
    <div className="thisDayInfo">
        <div className="ThisDayInfoItems">
            {items.map((item: Item) => (
                <ThisDayItem key ={item.iconId} item={item}/>
            ))}
        </div>
        <img className="cloudImg" src={cloud} alt="cloud"></img>

    </div>)
}