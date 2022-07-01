export type NavigationType = {
  navigation: {
    title: String;
    logo: { url: string };
    navItemsCollection: {
      items: Array<{ slug: string; title: string }>;
    };
  };
};
