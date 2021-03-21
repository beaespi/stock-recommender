import React from 'react'
import Dates from './dates'
import DropDown from './dropdown'

const Form = ({minDate, handleDate, selectedDate, handleSubmitForm, dropdown, handleSelected}) => {
  return (
    <form
      onSubmit={handleSubmitForm}
      className="mb-5"
      aria-label="Stock Generator"
    >
      {dropdown && dropdown.map(item => (
        <DropDown
          data={item.data}
          type={item.type}
          handleSelected={handleSelected}
        />
      ))}
      {minDate !== null
        ? (
          <Dates minimum={minDate} handleDate={handleDate} selectedDate={selectedDate} />
        ) : null
      }
      <button
        type="submit"
        className="ml-5"
        aria-label="Submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
