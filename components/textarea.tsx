import React from "react";

type Props = {
  label: string;
  name: string;
  value: any;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isRequired: boolean;
};

const Textarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  isRequired,
}: Props) => {
  return (
    <div className="flex flex-col my-4 w-full items-start border-slate-800 border-2 border-b-4">
      <label className="text-orange-400 text-sm ml-4 bg-white -mt-3 px-4">
        {label}
      </label>
      <textarea
        className="w-full px-4 py-2 h-36 focus:outline-none bg-white"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired ? true : false}
      />
    </div>
  );
};

export default Textarea;
