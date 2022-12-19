import * as contentful from "contentful";
import { NextApiRequest, NextApiResponse } from "next";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { entryId } = req.body;

    if (!entryId)
      return res.status(500).json({ error: "No entry id provided" });

    const foundEntry = await client.getEntry(entryId);

    if (!foundEntry)
      return res.status(500).json({ error: "Could not locate an entry" });

    return res.status(200).json({ entry: foundEntry, success: true });
  } catch (error) {
    return res.status(500).json({ entry: null, error, success: false });
  }
}
