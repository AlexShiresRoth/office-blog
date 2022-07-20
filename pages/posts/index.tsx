import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import {
  getAllPostsForHome,
  getBlogCategories,
  getBlogIntro,
  getFooterSection,
  getNavigation,
} from "../../lib/api";
import { useEffect, useState } from "react";

export default function Index({
  preview,
  allPosts,
  navigation,
  intro,
  categories,
  footer,
}) {
  return (
    <>
      <Layout preview={preview} navigation={navigation[0]} footer={footer}>
        <Intro title={intro?.title} summary={intro?.summary} />
        <Container>
          {allPosts.map((post) => (
            <div>{post?.title}</div>
          ))}
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
