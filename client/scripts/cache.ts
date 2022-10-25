import * as fs from "fs";
import * as path from "path";
import * as matter from "gray-matter";

function getPosts() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const { data: formatter } = matter.read(path.join("posts", filename));

    return { slug, formatter };
  });

  return JSON.stringify(posts);
}

const fileContents = `export const posts = ${getPosts()}`;

try {
  fs.readdirSync("cache");
} catch (error) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.ts", fileContents, (err) => {
  if (err) return console.log(err);
  console.log("Posts cached.");
});
