import React from "react";
import Header from './Header';

export default class App extends React.Component {

  state = {
    currentStep: 0,

  }

  render() {
    return (
      <div className="form-container card">
        <Header step={this.currentStep}/>
        <form className="form card-body" />
      </div>
    );
  }
}
