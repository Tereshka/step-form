import React from "react";

import InputField from './InputField';

export default function Basic(props) {
    const { firstName, lastName, password, passwordRepeat, gender, onChangeInput } = props;

    return (
        <>
            <InputField
                id="firstName"
                labelText="First Name"
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={firstName}
                onChange={onChangeInput}
            // error={this.state.ernors.username}
            />
            <InputField
                id="lastName"
                labelText="Last Name"
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={lastName}
                onChange={onChangeInput}
            // error={this.state.ernors.username}
            />
            <InputField
                id="password"
                labelText="Password"
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={onChangeInput}
            // error={this.state.ernors.username}
            />
            <InputField
                id="passwordRepeat"
                labelText="Repeat password"
                type="password"
                placeholder="Repeat password"
                name="passwordRepeat"
                value={passwordRepeat}
                onChange={onChangeInput}
            // error={this.state.ernors.username}
            />
            <fieldset className="form-group">
                <div>Gender</div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={gender === 'male'}
                        onChange={onChangeInput}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Male
					</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={gender === 'female'}
                        onChange={onChangeInput}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
					</label>
                </div>
            </fieldset>
        </>
    );
}