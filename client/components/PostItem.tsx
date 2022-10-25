import { Group, Title, Button, Text, Badge, Image, Stack } from "@mantine/core";
import { IconChevronsRight } from "@tabler/icons";
import Link from "next/link";
import { Post } from "@models/Post";
import { slugify } from "@utils/helper";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  return (
    <Group noWrap sx={{ maxHeight: "250px" }}>
      <Image src={post.formatter.cover_image} alt={post.formatter.title} width={300} height={250} />

      <Stack p="1.5rem" justify="space-between" sx={{ flex: 1 }}>
        <Title color="#4a5156" size="h2">
          {post.formatter.title}
        </Title>
        <Badge
          component="a"
          href={`/blog/category/${slugify(post.formatter.category)}`}
          sx={{ backgroundColor: "#ffe7e7", color: "#ff7c7c", cursor: "pointer", alignSelf: "start" }}
        >
          {post.formatter.category}
        </Badge>
        <Text color="#846d60" size="xs" lineClamp={3} weight="normal">
          {post.formatter.excerpt}
        </Text>
        <Group position="apart" align="flex-end">
          <Text color="dimmed" size="xs" transform="uppercase" weight={700} sx={{ letterSpacing: "1.5px" }}>
            {post.formatter.date}
          </Text>

          <Link href={`/blog/${post.slug}`}>
            <Button
              variant="white"
              size="sm"
              radius={0}
              rightIcon={<IconChevronsRight size={15} />}
              uppercase
              sx={{ backgroundColor: "#C49859", color: "white" }}
            >
              Read more
            </Button>
          </Link>
        </Group>
      </Stack>
    </Group>
  );
}
