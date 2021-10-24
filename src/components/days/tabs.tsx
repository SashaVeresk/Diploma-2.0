import React from 'react';
import './days.scss';

interface Props { }

export interface Tab {
    value: string;

}


export const Tabs = (props: Props) => {
    const tabs: Tab[] = [
        {
            value: 'На неделю'
        },
        {
            value: 'На 10 дней'
        },
        {
            value: 'На месяц'
        },
    ]
    return (
        <div className="tabs active">
            <div className="tabsWrapper">
                {tabs.map((tab: Tab) => (
                    <div className="tab" key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className="cancel">Отменить</div>
        </div>)
}