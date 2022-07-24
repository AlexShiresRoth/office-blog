import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import {
  getAllPostsForHome,
  getBlogCategories,
  getBlogIntro,
  getFooterSection,
  getNavigation,
} from "../lib/api";
import { FeaturedPost } from "../components/featured-post";
import { PostType } from "../types/post.types";
import { useEffect, useState } from "react";
import { flattenArrayNested } from "../utility-funtions/flatten-array";
import Categories from "../components/categories";
import BlogIntro from "../components/blog-intro";

export default function Index({
  preview,
  allPosts,
  navigation,
  intro,
  categories,
  footer,
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
      <Layout preview={preview} navigation={navigation[0]} footer={footer}>
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

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const navigation = (await getNavigation()) ?? [];
  const intro = (await getBlogIntro()) ?? null;
  const categories = (await getBlogCategories()) ?? [];
  const footer = (await getFooterSection()) ?? null;
  return {
    props: { preview, allPosts, navigation, intro, footer, categories },
  };
}
