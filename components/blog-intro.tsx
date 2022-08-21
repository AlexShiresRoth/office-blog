import Link from "next/link";
import Container from "./container";
import SearchBar from "./search-bar";

type Props = {
  title: string;
  summary: string;
};

export default function BlogIntro({ title, summary }: Props) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between  w-full border-t-[1px] border-b-[1px] py-2">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href={"/blog"}>
            <a>
              <h2 className="font-semibold text-xl text-slate-500 hover:underline">
                {title}
              </h2>
            </a>
          </Link>
          <p className="text-slate-600 text-sm">{summary}</p>
          <div className="flex items-center">
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
