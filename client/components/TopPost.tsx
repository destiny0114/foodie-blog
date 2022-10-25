import { Card, AspectRatio, Title, Button, Text, Badge, Image } from "@mantine/core";
import { IconChevronsRight } from "@tabler/icons";
import Link from "next/link";

import { Post } from "@models/Post";
import { slugify } from "@utils/helper";

type Props = {
  post: Post;
};

export default function TopPost({ post }: Props) {
  return (
    <Card p={0} radius={0} sx={{ backgroundColor: "inherit" }}>
      <Card.Section>
        <AspectRatio ratio={3 / 4}>
          <Image src={post.formatter.cover_image} alt={post.formatter.title} />
        </AspectRatio>
      </Card.Section>

      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md" sx={{ letterSpacing: "1.5px" }}>
        {post.formatter.date}
      </Text>
      <Title color="#4a5156" size="h2" mt={5}>
        {post.formatter.title}
      </Title>
      <Badge
        component="a"
        href={`/blog/category/${slugify(post.formatter.category)}`}
        sx={{ backgroundColor: "#ffe7e7", color: "#ff7c7c", cursor: "pointer" }}
      >
        {post.formatter.category}
      </Badge>
      <Text color="#846d60" size="xs" lineClamp={2} weight="normal" mt="md">
        {post.formatter.excerpt}
      </Text>
      <Link href={`/blog/${post.slug}`}>
        <Button
          variant="white"
          mt="lg"
          size="md"
          radius={0}
          rightIcon={<IconChevronsRight size={15} />}
          uppercase
          sx={{ backgroundColor: "#C49859", color: "white" }}
        >
          Read more
        </Button>
      </Link>
    </Card>
  );
}
