import { Divider, Title, Stack, Anchor, Breadcrumbs } from "@mantine/core";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import Layout from "@components/Layout";
import { MainContainer } from "@components/MainContainer";
import PostItem from "@components/PostItem";
import Pagination from "@components/Pagination";
import { Post } from "@models/Post";
import { generatePagePaths, paginatePost } from "@libs/post";
import { ITEMS_PER_PAGE } from "@config";

type PageProps = {
  posts: Post[];
  categories: string[];
  totalPage: number;
  currentPage: number;
};

interface Params extends ParsedUrlQuery {
  page_index: string;
}

const BlogPage = ({ posts, categories, totalPage, currentPage }: PageProps) => {
  const renderedPostItems = posts.map((post, i) => {
    return (
      <div key={i}>
        <PostItem post={post} key={post.slug} />
        {posts.length - 1 === i || <Divider my="lg" color="#C4985933" />}
      </div>
    );
  });

  return (
    <Layout title="Foodie | Blog">
      <MainContainer categories={categories}>
        <Title color="#4a5156" size="h2" weight={300} transform="uppercase" sx={{ letterSpacing: "1px" }}>
          Blog
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
          <Link href="/blog">
            <Anchor variant="text" weight="lighter" transform="uppercase" size={10} sx={{ letterSpacing: "1px" }} className="disabled">
              Blog
            </Anchor>
          </Link>
        </Breadcrumbs>
        <Stack my="lg" spacing={0}>
          {renderedPostItems}
        </Stack>
        <Pagination currentPage={currentPage} totalPage={totalPage} />
      </MainContainer>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = generatePagePaths(ITEMS_PER_PAGE);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  const page = parseInt(params && params.page_index) || 1;
  const pageIndex = page - 1;

  const paginate = paginatePost(ITEMS_PER_PAGE);
  const numOfPage = paginate.totalPage;
  const orderedPosts = paginate.data.slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE);
  const categories = paginate.data.map((post) => post.formatter.category);
  const uniqueCategories = Array.from(new Set(categories));

  return { props: { posts: orderedPosts, totalPage: numOfPage, currentPage: page, categories: uniqueCategories } };
};

export default BlogPage;
