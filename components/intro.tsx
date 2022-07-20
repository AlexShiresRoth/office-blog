import Link from "next/link";
import Container from "./container";

type Props = {
  title: string;
  summary: string;
};

export default function Intro({ title, summary }: Props) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-20  w-full border-t-2 border-b-2 py-2">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={"/blog"}>
            <a>
              <h2 className="font-semibold text-xl text-slate-500 hover:underline">
                {title}
              </h2>
            </a>
          </Link>
          <p className="text-slate-600 text-sm">{summary}</p>
        </div>
      </Container>
    </section>
  );
}
