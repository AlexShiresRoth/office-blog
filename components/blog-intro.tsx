import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { contentfulLoader } from "./contentful-image";
import SearchBar from "./search-bar";

type Props = {
  title: string;
  briefSummary: string;
};

export default function BlogIntro({ title, briefSummary }: Props) {
  return (
    <section className="fixed md:relative bg-white shadow-md md:shadow-none z-50 flex-col md:flex-row flex items-center md:justify-between  w-full border-t-[1px] border-b-[1px] pt-[2px] pb-2 md:py-2">
      <div className="flex flex-col items-center justify-center md:hidden w-full border-b-[1px] border-b-slate-100 mb-2">
        <div className="w-[90px]">
          <Image
            src="https://images.ctfassets.net/3u8nbr4uxelg/o6NO7L7XgcmvnFwWQE0oU/5952e260b085f981dcfccbafe4890e0b/lawofficelogo_fdaxgi.png"
            alt="blog"
            width={200}
            height={100}
            loader={contentfulLoader}
            className="w-full object-contain object-center"
          />
        </div>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:justify-stretch items-center">
          <Link href={"/blog"}>
            <h2 className="hidden md:block font-semibold text-xl text-slate-500 hover:underline  mb-2 md:mb-0">
              {title}
            </h2>
          </Link>

          <p className="text-slate-600 text-sm hidden md:block">
            {briefSummary}
          </p>
          <div className="flex items-center w-full md:w-auto justify-between">
            <div className="w-1/2">
              <Link
                href={"/posts/"}
                className="text-sm text-slate-400 hover:underline hover:text-orange-400 mr-4"
              >
                All Posts
              </Link>
            </div>
            <div className="w-3/4">
              <SearchBar />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
