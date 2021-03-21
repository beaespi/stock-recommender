import React from 'react';

const DropDown = ({data, type, handleSelected}) => {
  return (
    <select
      name={type}
      defaultValue={'Select a' + type}
      onChange={handleSelected}
      className="mr-5"
      aria-label={type}
      aria-required="true"
    >
        <option hidden disabled value={'Select a' + type}>
          Select a {type}
        </option>
      {data.map((item, key) => (
        <option key={key} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
