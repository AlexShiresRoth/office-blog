import Image from "next/image";
import { useEffect, useState } from "react";
import { contentfulLoader } from "./contentful-image";

export default function RichTextAsset({ id }) {
  const [asset, setAsset] = useState(null);

  const fetchAsset = async () => {
    if (!id) return;

    const res = await fetch(`/api/assets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        asset_id: id,
      }),
    });

    const data = await res.json();

    if (!data?.success) return console.error("Error fetching asset");

    return setAsset(data);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAsset();
    }
  }, [id]);

  //refetch image
  if (asset?.asset?.fields?.file?.url) {
    return (
      <Image
        src={asset?.asset?.fields?.file?.url}
        layout="responsive"
        height={1000}
        width={2000}
        loader={contentfulLoader}
        alt={asset.description}
        className="object-cover object-center"
      />
    );
  }

  return null;
}
