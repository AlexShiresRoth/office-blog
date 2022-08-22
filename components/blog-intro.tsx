import Link from "next/link";
import Container from "./container";
import SearchBar from "./search-bar";

type Props = {
  title: string;
  summary: string;
};

//TODO add image instead of title for mobile
export default function BlogIntro({ title, summary }: Props) {
  return (
    <section className="fixed md:relative bg-white shadow-md md:shadow-none z-50 flex-col md:flex-row flex items-center md:justify-between  w-full border-t-[1px] border-b-[1px] py-2">
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:justify-stretch items-center">
          <Link href={"/blog"}>
            <a>
              <h2 className="hidden md:block font-semibold text-xl text-slate-500 hover:underline  mb-2 md:mb-0">
                {title}
              </h2>
            </a>
          </Link>
          <p className="text-slate-600 text-sm hidden md:block">{summary}</p>
          <div className="flex items-center w-full md:w-auto justify-between">
            <Link href={"/posts/"}>
              <a className="text-sm text-slate-400 hover:underline hover:text-orange-400 mr-4">
                All Posts
              </a>
            </Link>
            <SearchBar />
          </div>
        </div>
      </Container>
    </section>
  );
}
