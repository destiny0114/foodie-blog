import { Box, Divider, Space, Stack, Title } from "@mantine/core";
import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { MainContainer } from "@components/MainContainer";
import TopPost from "@components/TopPost";
import PostItem from "@components/PostItem";
import { Post } from "@models/Post";
import { getPosts } from "@libs/post";

type PageProps = {
  posts: Post[];
  categories: string[];
};

const HomePage = ({ posts, categories }: PageProps) => {
  const renderedPostItems = posts.map((post, i) => {
    return (
      <div key={i}>
        <PostItem post={post} key={post.slug} />
        {posts.length - 1 === i || <Divider my="lg" color="#C4985933" />}
      </div>
    );
  });

  return (
    <Layout>
      <MainContainer categories={categories}>
        <TopPost post={posts[0]} />
        <Space h="xl" />
        <Box sx={{ borderBottom: "3px solid #C4985933" }}>
          <Title
            color="#4a5156"
            size="h3"
            weight="bolder"
            transform="uppercase"
            sx={{
              letterSpacing: "1.5px",
              position: "relative",
              maxWidth: "max-content",
              paddingBottom: "7px",

              "&:before": {
                position: "absolute",
                content: '""',
                backgroundColor: "#C49859",
                height: "3px",
                width: "100%",
                bottom: "-2px",
                left: 0,
              },
            }}
          >
            Recently Added
          </Title>
        </Box>
        <Stack my="lg" spacing={0}>
          {renderedPostItems}
        </Stack>
      </MainContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getPosts();
  const sortedPosts = posts.slice(0, 4);
  const categories = posts.map((post) => post.formatter.category);
  const uniqueCategories = Array.from(new Set(categories));

  return { props: { posts: sortedPosts, categories: uniqueCategories } };
};
export default HomePage;
