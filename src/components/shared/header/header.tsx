import React from "react";
import Select from 'react-select';
import { GlobalSvgSelector } from "../../../assets/images/icon/globalSvgSelector/globalSvgSelector";
import './header.scss';


interface Props {}

const options = [
    { value: 'minsk', label: 'Минск' },
    { value: 'baranovichi', label: 'Барановичи' },
    { value: 'grodno', label: 'Гродно' }
  ]

const colorStyles = {
    control : (styles: any) => ({
        ...styles,
        backgroundColor:"rgba(71, 147, 255, 0.2);",
        width:"194px",
        hight:"37px",
        border:"none",
        borderadous:"10px",
        zIndex:100,

    })
}

export const Header = (props: Props) => {
    return (
    <div className="header">
       <div className="wrapper">
           <div className="logo">
               <GlobalSvgSelector id="header-logo"/>
               </div>
           <div className="title">Weather</div>

       </div>
       <div className="wrapper">
           <div className="change_theam">
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