import React from "react";

type Props = {
  label: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "text" | "email";
};

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
}: Props) => {
  return (
    <div className="flex flex-col my-4 w-full items-start border-slate-600 border-2">
      <label className="text-orange-400 text-sm ml-4 bg-white -mt-3 px-4">
        {label}
      </label>
      <input
        className="px-4 py-4 "
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
