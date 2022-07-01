import Container from "../components/container";
import Layout from "../components/layout";
import {
  getAllPostsForHome,
  getFooterSection,
  getHeroSection,
  getNavigation,
} from "../lib/api";
import Head from "next/head";
import HeroSection from "../components/hero-section";

export default function Index({ preview, navigation, hero, footer }) {
  return (
    <>
      <Layout preview={preview} navigation={navigation[0]} footer={footer}>
        <Head>
          <title>Bruce Rothenberg Law Office Blog</title>
        </Head>

        <Container>
          <HeroSection
            backgroundImage={hero?.backgroundImage}
            cta={hero?.cta}
            tagline={hero?.tagline}
            title={hero?.title}
            services={hero?.services}
          />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const navigation = (await getNavigation()) ?? [];
  const hero = (await getHeroSection()) ?? [];
  const footer = (await getFooterSection()) ?? [];
  return {
    props: { preview, allPosts, navigation, hero, footer },
  };
}
