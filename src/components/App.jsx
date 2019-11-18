import React from "react";
import Header from './Header';
import Basic from './Basic';

export default class App extends React.Component {

  state = {
    currentStep: 1,
    firstName: '',
    lastName: '',
    password: '',
    passwordRepeat: '',
    country: '',
    gender: 'female',
    agree: false,
    avatar: '',
    age: 18,
    errors: {},
  }

  onChangeInput = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

  render() {
    const {currentStep, firstName, lastName, password, passwordRepeat, gender} = this.state;
    return (
      <div className="form-container card">
        <Header step={currentStep}/>
        <form className="form card-body" >
        {
          currentStep === 1 && 
          <Basic
            firstName={firstName}
            lastName={lastName}
            password={password}
            passwordRepeat={passwordRepeat}
            gender={gender}
            onChangeInput={this.onChangeInput}
          />
        }
        </form>
      </div>
    );
  }
}
