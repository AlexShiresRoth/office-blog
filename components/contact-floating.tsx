import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { ContactSectionType } from "../types/contact.types";
import Container from "./container";
import SelectInput from "./select-input";
import TextInput from "./text-input";
import Textarea from "./textarea";

type Props = {
  contact: ContactSectionType;
};

const ContactFloating = ({ contact }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

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
    <div
      className={`fixed right-10 bottom-10 z-50 shadow-lg p-3 transition-all rounded-full hover:cursor-pointer ${
        !expanded
          ? "rounded-full bg-slate-600"
          : "w-half bg-slate-100 rounded-none"
      }`}
    >
      {!expanded && (
        <div
          className="text-center flex justify-center"
          onClick={() => setExpanded(!expanded)}
        >
          <AiOutlineMail size={36} className="text-slate-50" />
        </div>
      )}
      <Container>
        <div
          className={`flex items-center  ${
            !expanded ? "w-0 hidden" : "w-full"
          } transition-all`}
        >
          <div className="flex flex-col w-full">
            <div className="flex">
              <div>
                <h6 className="text-orange-400 text-sm">
                  {contact?.preHeading}
                </h6>
                <h2 className="font-bold font-serif text-2xl text-slate-700">
                  {contact?.title}
                </h2>
              </div>
              <div>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center bg-slate-700 text-slate-50 p-2 text-xs hover:bg-slate-500 transition-all"
                >
                  Close
                  <AiOutlineClose size={16} />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-4 w-full" onSubmit={submit}>
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

export default ContactFloating;
