import Container from "../../components/container";
import Layout from "../../components/layout";
import {
  getAllPostsForHome,
  getBlogCategories,
  getBlogIntro,
  getContactSection,
  getFooterSection,
  getNavigation,
} from "../../lib/api";
import PostPreview from "../../components/post-preview";
import BlogIntro from "../../components/blog-intro";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PostType } from "../../types/post.types";

export default function Index({
  preview,
  allPosts,
  navigation,
  intro,
  footer,
  contact,
}) {
  const router = useRouter();

  const [posts, setPosts] = useState<PostType[]>([]);

  const handleSearch = async (searchTerm) => {
    const lSearch = searchTerm.toLowerCase();
    return setPosts(() =>
      allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(lSearch) ||
          post.categories.filter((category) =>
            category.toLowerCase().includes(lSearch)
          ).length > 0
      )
    );
  };

  useEffect(() => {
    if (router?.query?.search) {
      handleSearch(router?.query?.search);
    } else handleSearch("");
  }, [router?.query?.search]);

  return (
    <>
      <Layout
        preview={preview}
        navigation={navigation[0]}
        footer={footer}
        contact={contact}
      >
        <BlogIntro title={intro?.title} summary={intro?.summary} />
        <Container>
          <div className="my-0 pt-32 md:pt-4 md:mt-0 md:my-4 flex flex-col md:flex-row md:items-center md:justify-between border-b-[1px]">
            <h1 className="text-slate-800 font-bold text-lg md:text-6xl md:leading-relaxed mr-10">
              {router?.query?.search ? (
                <>
                  Posts:
                  <span className="font-normal ml-1">
                    {router?.query?.search?.toString().substring(0, 15)}
                  </span>
                </>
              ) : (
                "Posts"
              )}
            </h1>
            <h4 className="text-slate-400 text-sm md:text-2xl font-semibold ">
              {`Results:`}{" "}
              <span className="font-normal">
                {posts.length > 0
                  ? posts.length
                  : posts.length === 0 && router?.query?.search
                  ? "No Results"
                  : allPosts.length}
              </span>
            </h4>
          </div>
          <div className="my-6">
            {[posts.length > 0 ? posts : allPosts][0].map((post) => (
              <div className="my-8" key={post.slug}>
                <PostPreview
                  title={post.title}
                  coverImage={post.mainImage}
                  date={post.date}
                  author={post.author}
                  slug={post.slug}
                  excerpt={post.blurb}
                  categories={post.categories}
                />
              </div>
            ))}
          </div>
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
  const contact = (await getContactSection()) ?? null;
  return {
    props: {
      preview,
      allPosts,
      navigation,
      intro,
      footer,
      categories,
      contact,
    },
  };
}
