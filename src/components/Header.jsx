import React from "react";

export default function Headers(props) {
  const { step, steps } = props;

  return (
    <div className="header">
      {
        steps.map(item => (
          <div key={'header-' + item.number} className='header-item'>
            <div className={`header-item_number ${step === item.number ? 'active' : ''}`}>{item.number}</div>
            <div className='header-item_label'>{item.label}</div>
          </div>
        ))
      }
    </div>
  );
}