import { useRouter } from "next/router";
import React from "react";
import ErrorPage from "next/error";
import ContactSection from "../components/contact-section";
import Layout from "../components/layout";
import {
  getContactSection,
  getFooterSection,
  getNavigation,
  getPageBySlug,
} from "../lib/api";
import PostBody from "../components/post-body";
import Container from "../components/container";
import PostTitle from "../components/post-title";

const Page = ({ preview, navigation, footer, contact, page }) => {
  const router = useRouter();

  if (!router.isFallback && !page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} navigation={navigation[0]} footer={footer}>
      <Container>
        <div className="py-10">
          <PostTitle>{page?.title}</PostTitle>
          <PostBody content={page?.content} />
        </div>
      </Container>
      <ContactSection contact={contact} />
    </Layout>
  );
};

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

  return {
    props: {
      preview,
      navigation,
      footer,
      contact,
      page,
    },
  };
}

export default Page;
