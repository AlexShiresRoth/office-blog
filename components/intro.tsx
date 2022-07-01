import { CMS_NAME, CMS_URL } from "../lib/constants";
import Container from "./container";

type Props = {
  title: string;
  summary: string;
};

export default function Intro({ title, summary }: Props) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between  mb-16 md:mb-12 w-full bg-neutral-200 py-10">
      <Container>
        <div className="flex-col">
          <h2 className="font-bold text-6xl">{title}</h2>
          <p className="text-slate-500">{summary}</p>
        </div>
      </Container>
    </section>
  );
}
