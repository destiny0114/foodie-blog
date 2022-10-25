import React from "react";
import { Aside, Badge, Group, Space, Stack, Text, Title } from "@mantine/core";
import Search from "@components/Search";
import { slugify } from "@utils/helper";

type Props = {
  categories: string[];
};

const AsideSimple = ({ categories }: Props) => {
  const renderedCategoryItems =
    categories &&
    categories.map((category) => (
      <Badge
        key={category}
        component="a"
        href={`/blog/category/${slugify(category)}`}
        sx={{ backgroundColor: "#ffe7e7", color: "#ff7c7c", cursor: "pointer", alignSelf: "start" }}
      >
        {category}
      </Badge>
    ));
  return (
    <Aside px="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: "100%" }} withBorder={false} style={{ backgroundColor: "inherit" }}>
      <Stack align="stretch">
        <Title color="#4a5156" size="h3" weight="bolder" transform="uppercase" sx={{ letterSpacing: "1.5px" }}>
          WELCOME, FOODLOVER!!
        </Title>
        <Text
          color="#846d60"
          size="sm"
          sx={{
            lineHeight: "2",
            "&:first-letter": {
              float: "left",
              fontSize: "3rem",
              lineHeight: "1.1",
              paddingRight: "6px",
            },
          }}
        >
          Show your talent to the world by sharing your unlimited food recipes.Your readers should enjoy and should feel the mouthwatering dishes that
          you share on your blog and get excited as how they can create their own Food Blog.Easy to follow and share any of your secret recipes that
          you experiment and delicious taste of your FOOD Recipe.Let’s enjoy this amazing food recipes for our FOOD LOVER’S and get amazed with easy
          to prepare recipes.
        </Text>
      </Stack>
      <Space h="xl" />
      <Search />
      <Space h="xl" />
      {!!categories && (
        <Stack align="stretch">
          <Title color="#4a5156" size="h2" weight="bolder" transform="uppercase" sx={{ letterSpacing: "1.5px" }}>
            Category
          </Title>
          <Group noWrap={false}>{renderedCategoryItems}</Group>
        </Stack>
      )}
    </Aside>
  );
};

export default AsideSimple;
