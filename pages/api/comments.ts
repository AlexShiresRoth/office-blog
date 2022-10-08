import * as contentful from "contentful-management";
import { NextApiRequest, NextApiResponse } from "next";

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  try {

    const { title, body, email, author, postReference } = JSON.parse(req.body);

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);

    const env = await space.getEnvironment("master");

    const newEntry = await env.createEntry("comment", {
      fields: {
        title: {
          "en-US": title,
        },
        body: {
          "en-US": body,
        },
        author: {
          "en-US": author,
        },
        email: {
          "en-US": email,
        },
        postReference: {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: postReference,
            },
          },
        },
        commentDate: {
          "en-US": new Date().toLocaleDateString(),
        },
        approved: {
          "en-US": false,
        },
      },
    });

    console.log("new entry!", newEntry);

    return res
      .status(200)
      .json({ success: true, message: "Comment created successfully" });
  } catch (error) {
    console.error(error);

    return res.status(error.status).json({ message: error, success: false });
  }
}
