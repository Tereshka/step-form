import React from "react";

import countries from '../data/countries';

export default function Finish(props) {
  const { user: { firstName, lastName, email, phone, country, city, avatar } } = props;
  const countryName = countries.find(c => c.id === country).name;

  return (
    <div className="jumbotron">
      <img src={avatar} alt="user avatar" className="mr-3 rounded float-left avatar-small"></img>
      <h1 className="display-4">{firstName} {lastName}</h1>
      <hr className="my-4" />
      <p><b>Email:</b> {email}</p>
      <p><b>Mobile:</b> {phone}</p>
      <p><b>Location:</b> {countryName}, {city}</p>
    </div>
  );
}