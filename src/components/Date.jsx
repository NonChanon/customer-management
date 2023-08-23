import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Date(props) {
  const [estimatedValue, setEstimatedValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [actualValue, setActualValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleActualValueChange = (newValue) => {
    setEstimatedValue(newValue);
  };

  const handleEstimatedValueChange = (newValue) => {
    setActualValue(newValue);
  };

  return (
    <div className="md:grid md:grid-cols-5 gap-3 items-center text-sm md:text-end">
      <span className="text-indigo-600 font-semibold md:font-normal">
        {props.name}
      </span>
      <br className="md:hidden" />
      <div className="text-indigo-600 md:hidden text-xs my-2">
        (Estimated Date)
      </div>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={estimatedValue}
        displayFormat="DD/MM/YYYY"
        onChange={handleActualValueChange}
        inputClassName="w-full h-10 px-3 py-2 border-[1px] rounded-md border-blue-gray-200 text-xs focus:outline-indigo-500 placeholder:text-blue-gray-500"
        containerClassName="relative text-blue-gray-700 col-span-2"
      />
      <div className="text-indigo-600 md:hidden text-xs my-2">
        (Actual Date)
      </div>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={actualValue}
        displayFormat="DD/MM/YYYY"
        onChange={handleEstimatedValueChange}
        inputClassName="w-full h-10 px-3 py-2 border-[1px] rounded-md border-blue-gray-200 text-xs focus:outline-indigo-500 placeholder:text-blue-gray-500"
        containerClassName="relative text-blue-gray-700 col-span-2 mb-2 md:mb-0"
      />
    </div>
  );
}
