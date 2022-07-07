export type ServicesType = {
  title: string;
  preHeading: string;
  contentItemsCollection: {
    items: Array<{
      cta: string;
      image: {
        title: string;
        description: string;
        contentType: string;
        fileName: string;
        size: number;
        url: string;
      };
      linksCollection: { items: any[] };
      slug: string;
      text: string;
      title: string;
    }>;
  };
};
