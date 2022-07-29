import Container from "../components/container";
import Layout from "../components/layout";
import {
  getAboutSection,
  getAllPostsForHome,
  getContactSection,
  getFooterSection,
  getHeroSection,
  getNavigation,
  getServicesSection,
} from "../lib/api";
import Head from "next/head";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";
import ContactFloating from "../components/contact-floating";

export default function Index({
  preview,
  navigation,
  hero,
  footer,
  services,
  about,
  contact,
}) {
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
        />

        <ServicesSection services={services} />

        <AboutSection about={about} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const navigation = (await getNavigation()) ?? [];
  const hero = (await getHeroSection()) ?? [];
  const footer = (await getFooterSection()) ?? [];
  const services = (await getServicesSection()) ?? [];
  const about = (await getAboutSection()) ?? [];
  const contact = (await getContactSection()) ?? [];

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
    },
  };
}
