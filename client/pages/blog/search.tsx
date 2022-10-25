import { Title, Breadcrumbs, Anchor, Stack, Divider } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Layout from "@components/Layout";
import { MainContainer } from "@components/MainContainer";
import PostItem from "@components/PostItem";
import { SearchResponse } from "@models/Search";
import { Post } from "@models/Post";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const { query } = useRouter();

  const renderedCategories = useMemo(() => {
    const categories = searchResults.map((post) => post.formatter.category);
    const uniqueCategories = Array.from(new Set(categories));
    return uniqueCategories;
  }, [searchResults]);

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch(`/api/search?q=${query.term}`);
      const { results } = (await response.json()) as SearchResponse;
      setSearchResults(results);
    };
    getResults();
  }, [query.term]);

  const renderedPostItems = searchResults.map((post, i) => {
    return (
      <div key={i}>
        <PostItem post={post} key={post.slug} />
        {searchResults.length - 1 === i || <Divider my="lg" color="#C4985933" />}
      </div>
    );
  });

  return (
    <Layout title="Foodie | Search">
      <MainContainer categories={renderedCategories}>
        <Title color="#4a5156" size="h2" weight={300} transform="uppercase" sx={{ letterSpacing: "1px" }}>
          {`${searchResults.length} Results`}
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
        {!!searchResults.length && (
          <Stack my="lg" spacing={0}>
            {renderedPostItems}
          </Stack>
        )}
      </MainContainer>
    </Layout>
  );
};

export default SearchPage;
