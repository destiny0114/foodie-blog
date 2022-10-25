import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@models/Post";
import { SearchResponse } from "@models/Search";

type Data = SearchResponse;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let posts: Post[] = [];

  if (process.env.NODE_ENV === "production") {
  } else {
    const files = fs.readdirSync(path.join("posts"));
    posts = files.map((filename) => {
      const slug = filename.replace(".md", "");
      const { data: formatter } = matter.read(path.join("posts", filename));

      return { slug, formatter } as Post;
    });
  }
  const results = posts.filter(
    ({ formatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(req.query.q as string) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q as string) != -1 ||
      category.toLowerCase().indexOf(req.query.q as string) != -1
  );

  res.status(200).json({ results });
}
