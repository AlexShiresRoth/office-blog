import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ErrorPage from "next/error";
import ContactSection from "../components/contact-section";
import Layout from "../components/layout";
import {
  getContactSection,
  getFooterSection,
  getNavigation,
  getPageBySlug,
  getAllPostsForHome,
  getBlogCategories,
  getBlogIntro,
} from "../lib/api";
import PostBody from "../components/post-body";
import Container from "../components/container";
import PostTitle from "../components/post-title";
import MoreStories from "../components/more-stories";

import { FeaturedPost } from "../components/featured-post";
import { PostType } from "../types/post.types";
import { flattenArrayNested } from "../utility-funtions/flatten-array";
import Categories from "../components/categories";
import BlogIntro from "../components/blog-intro";

const Page = ({
  preview,
  navigation,
  footer,
  contact,
  page,
  allPosts,
  categories,
  intro,
}) => {
  const router = useRouter();

  if (!router.isFallback && !page) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.asPath === "/blog")
    return (
      <Blog
        allPosts={allPosts}
        intro={intro}
        footer={footer}
        categories={categories}
        navigation={navigation}
        preview={preview}
        contact={contact}
      />
    );
  return (
    <Layout
      preview={preview}
      navigation={navigation[0]}
      footer={footer}
      contact={contact}
    >
      <Container>
        <div className="py-10 mt-16">
          <PostTitle>{page?.title}</PostTitle>
          <PostBody content={page?.content} />
        </div>
      </Container>
    </Layout>
  );
};

function Blog({
  preview,
  allPosts,
  navigation,
  intro,
  categories,
  footer,
  contact,
}) {
  const [rankedCategories, setRankedCategories] = useState<Array<string>>([]);

  const heroPost: PostType = allPosts[0];

  const morePosts = allPosts.slice(1, 4);

  //is this possibly a long winded way of doing this?
  //I think it is, but I'm not sure how to make it better at the moment
  const handleCategoryRankings = () => {
    if (categories?.length === 0) return;
    //flatten array of arrays
    const categoryReduced = flattenArrayNested(categories, "categories");
    //create an object with category as key and count as value
    const categoryObj = {};
    //loop through categories and increment count for each category
    categoryReduced.forEach(
      (category) =>
        (categoryObj[category] = categoryObj[category]
          ? categoryObj[category] + 1
          : 1)
    );
    const arr: Array<{ category: string; count: number }> = [];
    //loop through categoryObj and push to arr
    for (let category in categoryObj)
      arr.push({ category, count: categoryObj[category] });
    //sort categories by count
    arr.sort((a, b) => b.count - a.count);

    setRankedCategories(arr.map((item) => item.category));
  };

  useEffect(() => {
    handleCategoryRankings();
  }, [categories]);

  return (
    <>
      <Layout
        preview={preview}
        navigation={navigation[0]}
        footer={footer}
        contact={contact}
      >
        <BlogIntro title={intro?.title} summary={intro?.summary} />
        <FeaturedPost
          title={heroPost?.title}
          excerpt={heroPost?.blurb}
          slug={heroPost?.slug}
          contributor={heroPost?.author}
          featured={true}
          category={"uhh"} //fix this
          date={heroPost?.date}
          imageURL={heroPost?.mainImage?.url}
        />
        <Container>
          {categories?.length > 0 && (
            <Categories categories={rankedCategories} />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const nav = (await getNavigation()) ?? null;

  return {
    paths: nav[0]?.navItemsCollection?.items.map((item) => `/${item.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ preview = false, params }) {
  const navigation = (await getNavigation()) ?? [];
  const page = await getPageBySlug(params.slug);
  const footer = (await getFooterSection()) ?? [];
  const contact = (await getContactSection()) ?? [];
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const intro = (await getBlogIntro()) ?? null;
  const categories = (await getBlogCategories()) ?? [];

  return {
    props: {
      preview,
      navigation,
      footer,
      contact,
      page,
      allPosts,
      intro,
      categories,
    },
  };
}

export default Page;
