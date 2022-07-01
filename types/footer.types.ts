export type FooterParams = {
  heading: string;
  title: string;
  columnsCollection: {
    items: Array<{
      cta: string | undefined;
      linksCollection: { items: Array<any> };
      slug: string;
      text: string;
      title: string;
    }>;
  };
};
