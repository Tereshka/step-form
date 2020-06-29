import React from "react";

import InputField from './InputField';
import countries from '../data/countries';
import cities from '../data/cities';

export default function Contacts(props) {
  const { user: { email, phone, country, city }, errors, onChangeInput } = props;

  const renderCountryOptions = items => {
    return items.map((country, index) => (
      <option key={index} value={country.id}>
        {country.name}
      </option>
    ));
  };

  const renderCityOptions = items => {
    return items.map((city, index) => (
      <option key={index} value={city.name}>
        {city.name}
      </option>
    ));
  };

  const citiesByCountry =
    cities.filter(city => city.country === +country)
      .map((el, index) => { return { id: index, name: el.name }; });

  return (
    <>
      <InputField
        id="email"
        labelText="Email"
        type="email"
        placeholder="Enter email"
        name="email"
        value={email}
        onChange={onChangeInput}
        error={errors.email}
      />
      <InputField
        id="phone"
        labelText="Phone"
        type="text"
        placeholder="+X(XXXX)XXX-XX-XX"
        name="phone"
        value={phone}
        onChange={onChangeInput}
        error={errors.phone}
      />
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select
          className="form-control"
          id="country"
          name="country"
          value={country}
          onChange={onChangeInput}
        >
          {renderCountryOptions(countries)}
        </select>
        {errors.country ? <div className="invalid-feedback">{errors.country}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="country">City</label>
        <select
          className="form-control"
          id="city"
          name="city"
          value={city}
          onChange={onChangeInput}
        >
          <option value="">Select city</option>
          {renderCityOptions(citiesByCountry)}
        </select>
        {errors.city ? <div className="invalid-feedback">{errors.city}</div> : null}
      </div>
    </>
  );
}