import React from "react";

type Props = {
  label: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ label, name, value, onChange, placeholder }: Props) => {
  return (
    <div className="flex flex-col my-4">
      <label className="text-orange-400 text-sm">{label}</label>
      <input
        className="border-slate-600 border-b-2 px-4 py-2"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
