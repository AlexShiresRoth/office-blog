import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import {
  getAllPostsForHome,
  getBlogIntro,
  getFooterSection,
  getNavigation,
} from "../lib/api";
import LatestContent from "../components/latest-content";
import { FeaturedPost } from "../components/featured-post";
import { PostType } from "../types/post.types";

export default function Index({
  preview,
  allPosts,
  navigation,
  intro,
  footer,
}) {
  const heroPost: PostType = allPosts[0];

  const morePosts = allPosts.slice(1, 4);

  return (
    <>
      <Layout preview={preview} navigation={navigation[0]} footer={footer}>
        <Intro title={intro?.title} summary={intro?.summary} />
        <FeaturedPost
          title={heroPost?.title}
          excerpt={heroPost?.blurb}
          slug={heroPost?.slug}
          contributor={heroPost?.author}
          featured={true}
          category={"uhh"}
          date={heroPost?.date}
          imageURL={heroPost?.mainImage?.url}
        />
        <Container>
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
  const footer = (await getFooterSection()) ?? null;
  return {
    props: { preview, allPosts, navigation, intro, footer },
  };
}
