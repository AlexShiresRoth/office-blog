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
  const [sending, setSending] = useState<boolean>(false);

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

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("submit!", data);
      setSending(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(await response.json());
      setSending(false);
    } catch (error) {
      console.error("submit error", error);
      setSending(false);
    }
  };

  return (
    <div className="py-10 w-full bg-slate-100">
      <Container>
        <div className="flex items-center w-full">
          <div className="flex flex-col w-full">
            <h6 className="text-orange-400 text-sm">{contact?.preHeading}</h6>
            <h2 className="font-bold font-serif text-2xl text-slate-700">
              {contact?.title}
            </h2>
            <form
              className="flex flex-col gap-2 md:gap-4 w-full mt-6 md:mt-2"
              onSubmit={submit}
            >
              <div className="flex flex-col md:flex-row gap-4 w-full">
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
                      isRequired={input?.required}
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
                      isRequired={input?.required}
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
                      isRequired={input?.required}
                    />
                  ) : null;
                })}
              </div>
              <div className="flex justify-end">
                <button className="px-2 md:px-6 py-2 md:py-4 bg-orange-400 text-slate-50 text-lg md:text-xl font-semibold w-36">
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
