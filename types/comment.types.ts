export type Comment_Type = {
  approved: boolean;
  author: string;
  body: string;
  commentDate: string;
  email: string;
  postReference: {
    slug: string;
    sys: {
      id: string;
    };
  };

  sys: { id: string; publishedAt: string };
  title: string;
};
