import React from 'react';
import { IndicatorSvgSelector } from '../../assets/images/icon/indicatorSvgSelector/indicatorSvgSelector';
import { Item } from './thisDayInfo';
import './thisDayInfo.scss';


interface Props {
item: Item;
}

export const ThisDayItem = ({item}:Props) => {
    const { iconId, name, value } = item;
    return (
        <div className="item">
            <div className="indicator">
                <IndicatorSvgSelector id={iconId}/>
            </div>
            <div className="indicatorName">{name}</div>
            <div className="indicatorValue">{value}</div>


        </div>
    )
}