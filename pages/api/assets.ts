import { NextApiRequest, NextApiResponse } from "next";
import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { asset_id } = req.body;

    if (!asset_id) throw new Error("Asset ID is required");

    const asset = await client.getAsset(asset_id.toString());

    return res.status(200).json({ asset, success: true });
  } catch (error) {
    return res.status(500).json({ error, success: false, asset: null });
  }
}
