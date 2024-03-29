import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import {
  getAllPostsWithSlug,
  getBlogCategories,
  getBlogDescription,
  getBlogIntro,
  getContactSection,
  getFooterSection,
  getNavigation,
  getPostAndMorePosts,
  getPostComments,
} from "../../lib/api";
import PostTitle from "../../components/post-title";
import BlogIntro from "../../components/blog-intro";
import { BlogSideBar } from "../../components/blog-side-bar";
import CommentForm from "../../components/comment-form";
import Comments from "../../components/comments";
import BreadCrumbs from "../../components/bread-crumbs";

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
  sidebarPosts,
  comments,
  blogDescription,
}) {
  const router = useRouter();

  const navBack = (path: string) => {
    router.push(path);
  };

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
      <BlogIntro
        title={intro?.title}
        briefSummary={intro?.briefSummary}
        callButton={nav[0]?.callButton}
      />
      <div>
        <Container>
          <div className="flex justify-between gap-16">
            <div className="w-full md:w-3/4">
              {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
              ) : (
                <>
                  <div className="mt-32 md:mt-6">
                    <BreadCrumbs
                      historySequence={[
                        "blog",
                        ...router.asPath
                          .split("/")
                          .filter((item) => item !== ""),
                      ]}
                      navFunction={navBack}
                    />
                  </div>
                  <article className="pt-2 md:pt-4">
                    <Head>
                      <title>{post.title}</title>
                      {/* <meta property="og:image" content={post.coverImage.url} /> */}
                    </Head>
                    <PostHeader
                      title={post?.title}
                      coverImage={post?.mainImage}
                      publishedAt={post?.sys?.publishedAt}
                      author={post?.author}
                      categories={post?.categories}
                    />
                    <PostBody content={post.body} />
                  </article>
                  <CommentForm postReference={post?.sys?.id} />
                  {comments?.length > 0 ? (
                    <Comments comments={comments} />
                  ) : (
                    <p className="my-4 text-slate-400 font-bold">
                      No comments yet
                    </p>
                  )}
                  {morePosts && morePosts.length > 0 && (
                    <MoreStories posts={morePosts} title={""} link="" />
                  )}
                </>
              )}
            </div>

            <BlogSideBar
              categories={categories}
              suggestedArticles={sidebarPosts}
              blogDescription={blogDescription}
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
  const intro = await getBlogIntro();
  const footer = (await getFooterSection()) ?? null;
  const nav = (await getNavigation()) ?? null;
  const contact = (await getContactSection()) ?? null;
  const categories = (await getBlogCategories()) ?? [];
  const sidebarPosts = await getAllPostsWithSlug();
  const comments = (await getPostComments(params.slug)) ?? [];
  const blogDescription = (await getBlogDescription()) ?? null;

  const existingPosts = [
    data?.post?.slug,
    ...data?.morePosts?.map(({ slug }) => slug),
  ];

  const filteredPosts = sidebarPosts.filter(
    ({ slug }) => !existingPosts.includes(slug)
  );

  return {
    props: {
      preview,
      intro,
      post: data?.post,
      morePosts: data?.morePosts ?? null,
      footer,
      nav,
      contact,
      categories,
      sidebarPosts: filteredPosts.slice(0, 3),
      comments,
      blogDescription,
    },
  };
}
