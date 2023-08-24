import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Date(props) {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleChange = (newValue) => {
    setValue(newValue);
    props.onSubmit(newValue, props.index);
  };

  return (
    <div>
      <br className="md:hidden" />
      <div className="text-indigo-600 md:hidden text-xs my-2">{props.date}</div>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        displayFormat="DD/MM/YYYY"
        onChange={handleChange}
        inputClassName="w-full h-10 px-3 py-2 border-[1px] rounded-md border-blue-gray-200 text-xs focus:outline-indigo-500 placeholder:text-blue-gray-500"
        containerClassName="relative text-blue-gray-700 col-span-2"
      />
    </div>
  );
}
