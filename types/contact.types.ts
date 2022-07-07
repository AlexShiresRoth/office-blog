export type ContactSectionType = {
  title: string;
  preHeading: string;
  submit: string;
  inputsCollection: {
    items: Array<{
      label: string;
      name: string;
      placeholder: string;
      type: string;
      required: boolean;
      options: Array<string> | null;
    }>;
  };
};
