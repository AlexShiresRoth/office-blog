import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getBlogIntro, getNavigation } from "../lib/api";
import LatestContent from "../components/latest-content";

export default function Index({ preview, allPosts, navigation, intro }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout preview={preview} navigation={navigation[0]}>
        <Intro title={intro?.title} summary={intro?.summary} />

        <Container>
          <LatestContent heroPost={heroPost} />
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
  return {
    props: { preview, allPosts, navigation, intro },
  };
}
