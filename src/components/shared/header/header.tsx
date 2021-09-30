import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { GlobalSvgSelector } from "../../../assets/images/icon/globalSvgSelector/globalSvgSelector";
import './header.scss';


interface Props {}

export const Header = (props: Props) => {

const options = [
    { value: 'minsk', label: 'Минск' },
    { value: 'baranovichi', label: 'Барановичи' },
    { value: 'grodno', label: 'Гродно' }
  ]

  const [theme, setTheme] = useState('light');


const colorStyles = {
    control : (styles: any) => ({
        ...styles,
        backgroundColor: theme === 'dark' ? 'rgba(79, 79, 79, 1)' : 'rgba(71, 147, 255, 0.2)',
        width:"194px",
        hight:"37px",
        border:"none",
        borderadous:"10px",
        zIndex:100,

    }),

    singleValue : (styles: any) => ({
        ...styles,
        color: theme === 'dark' ? '#fff' : '#000',
    })
}

function chengeTheme(){

setTheme(theme === 'light' ? 'dark' : 'light');

}


useEffect(()=>{
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        'body-background',
        'components-background', 
        'card-background',
        'card-shadow',
        'text-color',
        ];

    components.forEach((component)=> {

        root.style.setProperty(
            `--${component}-default`,
             `var(--${component}-${theme})`
             );
    })


    root.style.setProperty(
    '--body-background-default',
     `var(--body-background-${theme})`
     );
}, [theme])



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