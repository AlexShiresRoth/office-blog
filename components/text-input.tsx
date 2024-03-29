import React from "react";

type Props = {
  label: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
  isRequired: boolean;
};

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  isRequired,
}: Props) => {
  return (
    <div className="flex flex-col my-2 md:my-4 w-full items-start border-slate-800 border-2 border-b-4">
      <label className="text-orange-400 text-sm ml-4 bg-white -mt-3 px-4">
        {label}
      </label>
      <input
        className="px-4 py-4 bg-white focus:outline-none w-full"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired ? true : false}
      />
    </div>
  );
};

export default TextInput;
