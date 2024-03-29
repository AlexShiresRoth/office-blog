import Layout from "../components/layout";
import {
  getAboutSection,
  getAllPostsForHome,
  getColumnsSectionByTitle,
  getContactSection,
  getFooterSection,
  getHeroSection,
  getImageBackgroundSection,
  getNavigation,
} from "../lib/api";
import Head from "next/head";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/about-section";
import SectionWithImageBackground from "../components/section-with-image-background";
import BlogSection from "../components/blog-section";
import TrustBadges from "../components/trust-bages";

export default function Index({
  preview,
  navigation,
  hero,
  footer,
  services,
  about,
  sectionWithImage,
  contact,
  blogSection,
  allPosts,
}) {
  const posts = allPosts.slice(0, 2);

  return (
    <>
      <Layout
        preview={preview}
        navigation={navigation[0]}
        footer={footer}
        contact={contact}
      >
        <Head>
          <title>{hero?.title}</title>
        </Head>

        <HeroSection
          backgroundImage={hero?.backgroundImage}
          cta={hero?.cta}
          tagline={hero?.tagline}
          title={hero?.title}
          services={hero?.services}
          logo={navigation[0]?.logo.url}
        />
        <TrustBadges />
        <ServicesSection services={services} />
        <AboutSection about={about} />
        <SectionWithImageBackground content={sectionWithImage} />
        <BlogSection content={blogSection} posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const navigation = (await getNavigation()) ?? [];
  const hero = (await getHeroSection()) ?? [];
  const footer = (await getFooterSection()) ?? [];
  const services = (await getColumnsSectionByTitle("services")) ?? [];
  const blogSection = (await getColumnsSectionByTitle("blog")) ?? [];
  const about = (await getAboutSection()) ?? [];
  const contact = (await getContactSection()) ?? [];
  const sectionWithImage = (await getImageBackgroundSection("contact")) ?? null;
  return {
    props: {
      preview,
      allPosts,
      navigation,
      hero,
      footer,
      services,
      about,
      contact,
      sectionWithImage,
      blogSection,
    },
  };
}
