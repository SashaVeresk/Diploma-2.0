import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { GlobalSvgSelector } from "../../../assets/images/icon/globalSvgSelector/globalSvgSelector";
import { Theme } from "../../../context/themeContext";
import { useTheme } from "../../hooks/useTheme";
import './header.scss';


interface Props {}

export const Header = (props: Props) => {

const theme = useTheme();

const options = [
    { value: 'minsk', label: 'Минск' },
    { value: 'baranovichi', label: 'Барановичи' },
    { value: 'grodno', label: 'Гродно' }
  ]



const colorStyles = {
    control : (styles: any) => ({
        ...styles,
        backgroundColor: theme.theme === Theme.DARK ? 'rgba(79, 79, 79, 1)' : 'rgba(71, 147, 255, 0.2)',
        width:"194px",
        hight:"37px",
        border:"none",
        borderadous:"10px",
        zIndex:100,

    }),

    singleValue : (styles: any) => ({
        ...styles,
        color: theme.theme === Theme.DARK ? '#fff' : '#000',
    })
}

function chengeTheme(){

theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);

}
    return (
    <div className="header">
       <div className="wrapper">
           <div className="logo">
               <GlobalSvgSelector id="header-logo"/>
               </div>
           <div className="title">Weather</div>

       </div>
       <div className="wrapper">
           <div className="change_theam" onClick={chengeTheme}>
               <GlobalSvgSelector id="change-theam" />
              
           </div>
           <Select 
           defaultValue={options[0]}
           styles ={colorStyles}
            options={options} />
       </div>

    </div>
    )
}