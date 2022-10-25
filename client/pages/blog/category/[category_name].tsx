import { Title, Breadcrumbs, Anchor, Stack, Pagination, Divider } from "@mantine/core";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import Layout from "@components/Layout";
import { MainContainer } from "@components/MainContainer";
import { Post } from "@models/Post";
import { generateCategoryPaths, getPostByCategory } from "@libs/post";
import PostItem from "@components/PostItem";
import { capitalize, slugify } from "@utils/helper";

type Props = {
  posts: Post[];
  category: string;
};

interface Params extends ParsedUrlQuery {
  category_name: string;
}

const CategoryPage = ({ posts, category }: Props) => {
  const renderedPostItems = posts.map((post, i) => {
    return (
      <div key={i}>
        <PostItem post={post} key={post.slug} />
        {posts.length - 1 === i || <Divider my="lg" color="#C4985933" />}
      </div>
    );
  });

  return (
    <Layout title={`Foodie | ${capitalize(category)}`}>
      <MainContainer categories={[category]}>
        <Title color="#4a5156" size="h2" weight={300} transform="uppercase" sx={{ letterSpacing: "1px" }}>
          {category}
        </Title>

        <Breadcrumbs
          styles={{
            separator: {
              fontSize: "10px",
            },
          }}
          mt={5}
        >
          <Link href="/">
            <Anchor variant="text" weight="lighter" transform="uppercase" size={10} sx={{ letterSpacing: "1px" }}>
              Home
            </Anchor>
          </Link>
          <Link href={`/blog/category/${slugify(category)}`}>
            <Anchor variant="text" weight="lighter" transform="uppercase" size={10} sx={{ letterSpacing: "1px" }} className="disabled">
              {category}
            </Anchor>
          </Link>
        </Breadcrumbs>
        <Stack my="lg" spacing={0}>
          {renderedPostItems}
        </Stack>
      </MainContainer>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = generateCategoryPaths();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category_name } = context.params as Params;
  const label = category_name.replace(/-/g, " ");
  const categoryPosts = getPostByCategory(category_name);

  return { props: { posts: categoryPosts, category: label } };
};

export default CategoryPage;
