import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";

type Props = {
  entryId: string;
  content: any;
};

const EntryHyperlink = ({ entryId, content }: Props) => {
  const [entrySlug, setEntrySlug] = useState<string>("");

  const entryHyperLink = useCallback(async () => {
    if (!entryId) return console.log("no entry id");
    try {
      const req = await fetch("/api/entry", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entryId,
        }),
      });

      const res = await req.json();

      setEntrySlug(res?.entry?.fields?.slug);
    } catch (error) {
      console.error("error in paragraph component", error);
    }
  }, [entryId]);

  useMemo(() => {
    entryHyperLink();
  }, [entryHyperLink, entryId]);

  return (
    <Link href={entrySlug ?? "/"}>
      {content?.content?.map((hl: { value: string }) => {
        return hl.value;
      })}
    </Link>
  );
};

export default EntryHyperlink;
