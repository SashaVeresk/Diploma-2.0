import React from "react";
import Select from 'react-select';
import { GlobalSvgSelector } from "../../../assets/images/icon/globalSvgSelector/globalSvgSelector";
import './header.scss';


interface Props {}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

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
               <Select options={options} />
           </div>
       </div>

    </div>
    )
}