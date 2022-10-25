import { Header, Group, Stack, Anchor, Image } from "@mantine/core";
import Link from "next/link";

export default function HeaderSimple() {
  return (
    <Header height={250} p="md" sx={{ backgroundColor: "inherit", borderBottomColor: "#C4985980" }} withBorder={true} fixed={false}>
      <Stack spacing={30} justify="space-between">
        <Image src="/static/assets/logo.svg" width={400} height={150} fit="contain" mx="auto" alt="logo" />
        <Group position="center" spacing={80} style={{ padding: "5px 30px" }}>
          <Link href="/">
            <Anchor
              variant="text"
              weight="lighter"
              transform="uppercase"
              size={15}
              sx={{
                "&:hover": {
                  color: "#C49859",
                },
              }}
            >
              Home
            </Anchor>
          </Link>
          <Link href="/about">
            <Anchor
              variant="text"
              weight="lighter"
              transform="uppercase"
              size={15}
              sx={{
                "&:hover": {
                  color: "#C49859",
                },
              }}
            >
              About
            </Anchor>
          </Link>
          <Link href="/blog">
            <Anchor
              variant="text"
              weight="lighter"
              transform="uppercase"
              size={15}
              sx={{
                "&:hover": {
                  color: "#C49859",
                },
              }}
            >
              Blog
            </Anchor>
          </Link>
        </Group>
      </Stack>
    </Header>
  );
}
