import React from "react";

export default function Headers(props) {
  const { step, steps } = props;

  const getClassName = (item) => {
    let className = 'header-item';
    if (step === item.number) {
      className += ' active';
    }
    if (item.completed) {
      className += ' completed';
    }
    return className;
  }

  return (
    <div className="header">
      {
        steps.map(item => (
          <div key={'header-' + item.number} className={getClassName(item)}>
            <div className='header-item_number'>{item.number}</div>
            <div className='header-item_label'>{item.label}</div>
          </div>
        ))
      }
    </div>
  );
}