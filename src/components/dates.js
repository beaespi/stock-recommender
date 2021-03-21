import React from 'react'
import DatePicker from 'react-datepicker'
import { getMinDate } from './common/functions'
import 'react-datepicker/dist/react-datepicker.css'

const Dates = ({minimum, handleDate, selectedDate}) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDate}
      minDate={getMinDate(minimum)}
      maxDate={new Date()}
      placeholderText="Select a Date"
      aria-label="Dates"
    />
  );
};

export default Dates;
