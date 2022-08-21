import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import {
  getAllPostsWithSlug,
  getBlogCategories,
  getBlogIntro,
  getContactSection,
  getFooterSection,
  getNavigation,
  getPostAndMorePosts,
  getPostBySlug,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import BlogIntro from "../../components/blog-intro";
import { BlogSideBar } from "../../components/blog-side-bar";

//Need to fetch articles that arent the current article & more articles
export default function Post({
  post,
  morePosts,
  categories,
  preview,
  footer,
  nav,
  intro,
  contact,
}) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      preview={preview}
      footer={footer}
      navigation={nav[0]}
      contact={contact}
    >
      <BlogIntro title={intro?.title} summary={intro?.summary} />
      <div>
        <Container>
          <div className="flex justify-between gap-16">
            <div className="w-full md:w-3/4">
              {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
              ) : (
                <>
                  <article className="pt-16">
                    <Head>
                      <title>{post.title}</title>
                      {/* <meta property="og:image" content={post.coverImage.url} /> */}
                    </Head>
                    <PostHeader
                      title={post?.title}
                      coverImage={post?.mainImage}
                      date={post?.date}
                      author={post?.author}
                    />
                    <PostBody content={post.body} />
                  </article>
                  <SectionSeparator />
                  {morePosts && morePosts.length > 0 && (
                    <MoreStories posts={morePosts} />
                  )}
                </>
              )}
            </div>

            <BlogSideBar
              categories={categories}
              suggestedArticles={morePosts}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const post = await getPostBySlug(params.slug);
  const intro = await getBlogIntro();
  const footer = (await getFooterSection()) ?? null;
  const nav = (await getNavigation()) ?? null;
  const contact = (await getContactSection()) ?? null;
  const categories = (await getBlogCategories()) ?? [];

  return {
    props: {
      preview,
      intro,
      post: post ?? null,
      morePosts: data?.morePosts ?? null,
      footer,
      nav,
      contact,
      categories,
    },
  };
}
