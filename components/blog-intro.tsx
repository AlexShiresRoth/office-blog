import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { contentfulLoader } from "./contentful-image";
import SearchBar from "./search-bar";

type Props = {
  title: string;
  briefSummary: string;
  callButton: {
    buttonText: string;
    phoneNumber: string;
  };
};

export default function BlogIntro({ title, briefSummary, callButton }: Props) {
  return (
    <section className="fixed md:relative bg-white shadow-md md:shadow-none z-30 flex-col md:flex-row flex items-center md:justify-between w-full md:border-t-[1px] border-b-[1px] md:border-slate-800   pb-2 md:py-2">
      <div className="flex w-full border-b-[1px] border-slate-100 items-center justify-center md:hidden md:w-full mb-2">
        <div className="w-11/12 flex justify-between items-center py-2">
          <Link href="/" className="w-24 h-10 relative">
            <Image
              src="https://images.ctfassets.net/3u8nbr4uxelg/o6NO7L7XgcmvnFwWQE0oU/5952e260b085f981dcfccbafe4890e0b/lawofficelogo_fdaxgi.png"
              fill={true}
              alt={title}
              loader={contentfulLoader}
              className="w-full object-contain object-center"
            />
          </Link>
          {callButton && (
            <a href={`tel:${callButton?.phoneNumber}`}>
              <button className="px-4 text-sm py-1 bg-yellow-500 text-white  hover:bg-yellow-600 transition-all">
                {callButton?.buttonText}
              </button>
            </a>
          )}
        </div>
      </div>
      <Container>
        <div className="flex flex-col md:flex-row justify-between md:justify-stretch items-center">
          <Link
            href={"/blog"}
            className="hidden md:block font-semibold text-xl text-slate-800 hover:underline  mb-2 md:mb-0"
          >
            {title}
          </Link>

          <p className="text-slate-600 font-semibold text-sm hidden md:block">
            {briefSummary}
          </p>
          <div className="flex items-center w-full md:w-auto justify-between">
            <div className="w-1/2">
              <Link
                href={"/posts/"}
                className="text-sm text-slate-400 hover:underline hover:text-yellow-300 mr-4"
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
