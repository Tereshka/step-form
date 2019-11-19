import React from "react";
import Header from './Header';
import ButtonPanel from './ButtonPanel';
import Basic from './Basic';
import Contacts from './Contacts';
import Avatar from './Avatar';
import Finish from './Finish';

import validation from './validation';

export default class App extends React.Component {

  state = {
    currentStep: 1,
    user: {
      firstName: '',
      lastName: '',
      password: '',
      passwordRepeat: '',
      gender: 'female',
      age: 18,
      email: '',
      phone: '',
      country: 0,
      city: '',
    },
    errors: {},
    steps: [
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
    ],
  }

  onChangeInput = event => {
    let newUser = { ...this.state.user };
    if (event.target.name === 'country') {
      newUser[event.target.name] = parseInt(event.target.value);
    } else {
      newUser[event.target.name] = event.target.value;
    }

    this.setState({ user: newUser });
  }

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = e => {
      let newUser = { ...this.state.user };
      newUser.avatar = e.target.result;
      this.setState({ user: newUser });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  onNextButtonClick = () => {
    const { currentStep, user } = this.state;
    const errors = validation(currentStep, user);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ currentStep: currentStep + 1 });
    }
  }

  onPreviousButtonClick = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  }

  onResetButtonClick = () => {
    window.location.reload();
  }

  render() {
    const { currentStep, steps, user, errors } = this.state;
    return (
      <div className="form-container card">
        <Header step={currentStep} steps={steps}/>
        <form className="form card-body" >
          {
            currentStep === 1 &&
            <Basic
              user={user}
              onChangeInput={this.onChangeInput}
              errors={errors}
            />
          }
          {
            currentStep === 2 &&
            <Contacts
              user={user}
              onChangeInput={this.onChangeInput}
              errors={errors}
            />
          }
          {
            currentStep === 3 &&
            <Avatar
              user={user}
              onChangeInput={this.onChangeAvatar}
              errors={errors}
            />
          }
          {
            currentStep === 4 &&
            <Finish user={user} />
          }
          <ButtonPanel
            currentStep={currentStep}
            steps={steps}
            onNextButtonClick={this.onNextButtonClick}
            onPreviousButtonClick={this.onPreviousButtonClick}
            onResetButtonClick={this.onResetButtonClick}
          />
        </form>
      </div>
    );
  }
}
