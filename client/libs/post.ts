import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@models/Post";
import { slugify, sortByDate } from "@utils/helper";

export const getPosts = () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const { data: formatter } = matter.read(path.join("posts", filename));

    return { slug, formatter } as Post;
  });

  return posts.sort(sortByDate);
};

export const generateSlugPaths = () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => {
    const slug = filename.replace(".md", "");
    return { params: { slug } };
  });

  return paths;
};

export const getPostBySlug = (slug: string) => {
  const { data: formatter, content } = matter.read(path.join("posts", slug + ".md"));

  return { slug, formatter, content };
};

export const generateCategoryPaths = () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => {
    const { data: formatter } = matter.read(path.join("posts", filename));
    return { params: { category_name: slugify(formatter["category"]) } };
  });

  return paths;
};

export const getPostByCategory = (category: string) => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const { data: formatter } = matter.read(path.join("posts", filename));

    return { slug, formatter } as Post;
  });
  return posts.filter((post) => slugify(post.formatter.category) === category).sort(sortByDate);
};

export const generatePagePaths = (per_page: number) => {
  const files = fs.readdirSync(path.join("posts"));
  const numOfPage = Math.ceil(files.length / per_page);

  let paths = [];

  for (let index = 1; index <= numOfPage; index++) {
    paths.push({
      params: { page_index: index.toString() },
    });
  }

  return paths;
};

export const paginatePost = (per_page: number) => {
  const files = fs.readdirSync(path.join("posts"));
  const numOfPage = Math.ceil(files.length / per_page);
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const { data: formatter } = matter.read(path.join("posts", filename));

    return { slug, formatter } as Post;
  });

  return { data: posts.sort(sortByDate), totalPage: numOfPage };
};
