import React from "react";
import BigHeading from "./big-heading";
import HeroPost from "./hero-post";

type Props = {
  heroPost: {
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
  };
};

const LatestContent = ({ heroPost }: Props) => {
  return (
    <section>
      <BigHeading heading="Latest Post" />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.mainImage}
          publishedAt={heroPost?.sys?.publishedAt}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.blurb}
        />
      )}
    </section>
  );
};

export default LatestContent;
