import React from "react";

type Props = {
  label: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string>;
  isRequired: boolean;
};

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  options,
  isRequired,
}: Props) => {
  return (
    <div className="flex flex-col my-4 w-full items-start border-slate-600 border-2">
      <label className="text-orange-400 text-sm ml-4 bg-slate-100 -mt-3 px-4">
        {label}
      </label>
      <select
        className="w-full px-4 py-2 pb-4 bg-slate-100 focus:outline-none"
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired ? true : false}
      >
        <option>{placeholder}</option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
