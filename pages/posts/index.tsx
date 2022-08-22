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
    }
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
          <div className="my-0 pt-20 md:pt-4 md:mt-0 md:my-4 flex items-center justify-between border-b-2">
            <h1 className="text-slate-800 font-bold text-6xl mr-10">
              {router?.query?.search
                ? "Posts: " + router?.query?.search
                : "Posts"}
            </h1>
            <h4 className="text-slate-400 text-2xl font-semibold ">{`Results: ${
              posts.length > 0
                ? posts.length
                : posts.length === 0 && router?.query?.search
                ? "No Results"
                : allPosts.length
            }`}</h4>
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
