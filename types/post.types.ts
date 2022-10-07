export type PostType = {
  title: string;
  mainImage: {
    url: string;
  };
  sys: {
    publishedAt: string;
  }
  author: {
    headshot: {
      url: string;
    };
    name: string;
  };
  slug: string;
  blurb: string;
  date: string;
  body: any;
  categories: string[];
};
