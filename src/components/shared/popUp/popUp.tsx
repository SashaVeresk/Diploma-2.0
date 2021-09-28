import React from 'react';
import { Item } from '../../thisDayInfo/thisDayInfo';
import { ThisDayItem } from '../../thisDayInfo/thisDayItem';
import './popUp.scss';
 

interface Props {
}



export const PopUp = ({}: Props) => {
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

    <> 
    <div className="blur"></div>
    <div className="popUp">     
            <div className="ThisDayInfoItems">
                {items.map((item: Item) => (
                    <ThisDayItem key ={item.iconId} item={item}/>
                ))}
            </div>
        </div>

    </>
    )
}