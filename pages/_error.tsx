import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contentfulLoader } from "../components/contentful-image";

function Error({ statusCode }) {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-center">
      <div className="w-full h-full max-h-[200px] max-w-[500px] relative">
        <Image
          src="https://images.ctfassets.net/3u8nbr4uxelg/o6NO7L7XgcmvnFwWQE0oU/5952e260b085f981dcfccbafe4890e0b/lawofficelogo_fdaxgi.png"
          layout="fill"
          loader={contentfulLoader}
          className="w-full object-contain object-center"
        />
      </div>
      <p className="text-3xl font-bold">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
      <Link href="/"><a className="border-[1px] border-slate-500 rounded px-4 py-2 my-6 hover:bg-slate-500 hover:text-slate-50 transition-all">Click here to go home</a></Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
