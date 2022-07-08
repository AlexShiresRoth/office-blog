import React, { useState } from "react";
import { ContactSectionType } from "../types/contact.types";
import Container from "./container";
import SelectInput from "./select-input";
import TextInput from "./text-input";
import Textarea from "./textarea";

type Props = {
  contact: ContactSectionType;
};

// TODO finish component
const ContactSection = ({ contact }: Props) => {
  console.log("contact", contact);

  const [data, setData] = useState<{
    email: string;
    name: string;
    message: string;
    service: string;
  }>({
    email: "",
    name: "",
    message: "",
    service: "",
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="pb-10 w-full">
      <Container>
        <div className="flex items-center w-full">
          <div className="flex flex-col w-full">
            <h6 className="text-orange-400 text-sm">{contact?.preHeading}</h6>
            <h2 className="font-bold font-serif text-2xl text-slate-700">
              {contact?.title}
            </h2>
            <form className="flex flex-col gap-4 w-full">
              <div className="flex  gap-4 w-full">
                {contact?.inputsCollection?.items?.map((input) => {
                  return input.type === "text" || input.type === "email" ? (
                    <TextInput
                      label={input.label}
                      name={input?.name}
                      placeholder={input?.placeholder}
                      value={data[input?.name]}
                      onChange={onChange}
                      key={input?.name}
                      type={input.type}
                    />
                  ) : null;
                })}
              </div>
              <div className="flex gap-4 w-full">
                {contact?.inputsCollection?.items?.map((input) => {
                  return input.type === "dropdown" ? (
                    <SelectInput
                      label={input.label}
                      name={input?.name}
                      placeholder={input?.placeholder}
                      value={data[input?.name]}
                      onChange={onChange}
                      key={input?.name}
                      options={input.options}
                    />
                  ) : null;
                })}
              </div>
              <div className="flex gap-4 w-full">
                {contact?.inputsCollection?.items?.map((input) => {
                  return input.type === "textarea" ? (
                    <Textarea
                      label={input.label}
                      name={input?.name}
                      placeholder={input?.placeholder}
                      value={data[input?.name]}
                      onChange={onChange}
                      key={input?.name}
                    />
                  ) : null;
                })}
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-4 bg-orange-400 text-slate-50 text-xl font-semibold w-36">
                  {contact?.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
