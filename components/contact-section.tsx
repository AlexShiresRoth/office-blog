import React, { useState } from "react";
import { ContactSectionType } from "../types/contact.types";
import Container from "./container";
import TextInput from "./text-input";

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="pb-10 w-full">
      <Container>
        <div className="flex items-center ">
          <div className="flex flex-col">
            <h6 className="text-orange-400 text-sm">{contact?.preHeading}</h6>
            <h2 className="font-bold font-serif text-2xl text-slate-700">
              {contact?.title}
            </h2>
            <form>
              {contact?.inputsCollection?.items?.map((input) => {
                if (input.type === "text") {
                  return (
                    <TextInput
                      label={input.label}
                      name={input?.name}
                      placeholder={input?.placeholder}
                      value={data[input?.name]}
                      onChange={onChange}
                      key={input?.name}
                    />
                  );
                }
                return <div></div>;
              })}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactSection;
