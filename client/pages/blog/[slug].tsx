import { Title, Breadcrumbs, Anchor, Stack, Box, Center, Text, Badge, Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { marked } from "marked";
import Layout from "@components/Layout";
import { Post } from "@models/Post";
import { generateSlugPaths, getPostBySlug } from "@libs/post";
import { slugify } from "@utils/helper";

type PageProps = {
  post: Post;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function PostPage({ post: { formatter, slug, content } }: PageProps) {
  return (
    <Layout title={`Foodie | ${formatter.title}`}>
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
        <Anchor variant="text" weight="lighter" transform="uppercase" size={10} sx={{ letterSpacing: "1px" }} className="disabled">
          {formatter.title}
        </Anchor>
      </Breadcrumbs>

      <Stack my="lg" mx="auto" sx={{ maxWidth: 1000 }}>
        <Box>
          <div
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${formatter.cover_image}) no-repeat center`,
              height: 300,
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <Center p="3rem" sx={{ position: "absolute", bottom: 0 }}>
              <Stack>
                <Title
                  color="#fff"
                  size="h1"
                  weight="bolder"
                  sx={{
                    letterSpacing: "1.5px",
                    position: "relative",
                    maxWidth: 600,
                    paddingBottom: "7px",

                    "&:before": {
                      position: "absolute",
                      content: '""',
                      backgroundColor: "#fff",
                      height: "3px",
                      width: "30%",
                      bottom: "-2px",
                      left: 0,
                    },
                  }}
                >
                  {formatter.title}
                </Title>
                <Text color="#fff" size="xs" transform="uppercase" weight={700} sx={{ letterSpacing: "1.5px" }}>
                  {formatter.date}
                </Text>
              </Stack>
            </Center>
          </div>
        </Box>
        <div className="blog-content">
          <div dangerouslySetInnerHTML={{ __html: marked(content || "") }}></div>
        </div>
        <Badge
          component="a"
          href={`/blog/category/${slugify(formatter.category)}`}
          my="lg"
          sx={{ backgroundColor: "#ffe7e7", color: "#ff7c7c", cursor: "pointer", alignSelf: "start" }}
        >
          {formatter.category}
        </Badge>
        <Link href={`/blog`}>
          <Button
            variant="white"
            size="md"
            p={0}
            leftIcon={<IconChevronsLeft size={15} color="red" />}
            uppercase
            sx={{ backgroundColor: "transparent", color: "black", alignSelf: "start" }}
          >
            Back to Blog
          </Button>
        </Link>
      </Stack>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = generateSlugPaths();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const post = getPostBySlug(slug);

  return { props: { post } };
};
