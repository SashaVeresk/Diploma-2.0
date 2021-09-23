import React from 'react';
import { GlobalSvgSelector } from '../../assets/images/icon/globalSvgSelector/globalSvgSelector';
import './thisDay.scss'

interface Props {}

export const ThisDay = (props: Props) => {
    return <div className="thisDay">
        <div className='topBlock'>
            <div className="topBlockWrapper">
                <div className="thisDayTemp">20°</div> 
                <div className="thisDayName">Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun' />
        </div>
        <div className='bottomBlock'>
          <div className='thisTime'>Время: <span>10.00</span></div>
          <div className='thisCity'>Город : <span>Минск</span> </div>

             </div>
    </div>
}