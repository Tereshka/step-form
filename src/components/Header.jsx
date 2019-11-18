import React from "react";

export default function Headers(props) {
    const {step} = props;
    const items = [
        {
            number: 1,
            label: 'Basic',
        },
        {
            number: 2,
            label: 'Contacts',
        },
        {
            number: 3,
            label: 'Avatar',
        },
        {
            number: 4,
            label: 'Finish',
        },
    ]

    return (
        <div className="header">
            {
                items.map(item => (
                    <div key={'header-' + item.number} className='header-item'>
                        <div className={`header-item_number ${step === item.number ? 'active' : ''}`}>{item.number}</div>
                        <div className='header-item_label'>{item.label}</div>
                    </div>
                ))
            }
        </div>
    );
}