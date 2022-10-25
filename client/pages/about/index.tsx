import { Anchor, AspectRatio, Box, Breadcrumbs, Grid, Stack, Text, Title, Image } from "@mantine/core";
import Link from "next/link";
import Layout from "@components/Layout";

const AboutPage = () => {
  return (
    <Layout title="Foodie | About">
      <Title color="#4a5156" size="h2" weight={300} transform="uppercase" sx={{ letterSpacing: "1px" }}>
        About
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
        <Link href="/about">
          <Anchor variant="text" weight="lighter" transform="uppercase" size={10} sx={{ letterSpacing: "1px" }} className="disabled">
            About
          </Anchor>
        </Link>
      </Breadcrumbs>

      <Box mx="auto" my="3rem" sx={{ maxWidth: "80%" }}>
        <Grid grow sx={{ backgroundColor: "#d3b994" }}>
          <Grid.Col span="auto" p={0}>
            <AspectRatio ratio={400 / 500}>
              <Image src={"/static/assets/user.jpg"} alt="" />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={2}>
            <Stack justify="center" align="stretch" p="6rem" spacing={18} sx={{ height: "100%" }}>
              <Title color="white" size="h1" weight="normal" transform="uppercase" sx={{ letterSpacing: "2px" }}>
                Diana Jones
              </Title>
              <Text
                size="sm"
                color="#814f1a"
                weight="300"
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
                Being a Mom and a Foodie is not easy as you have to look after your kids and family and moreover you have to follow your passion for
                writing and sharing my excellent work of food recipes that delight everyone. All my neighbors worship my cooking and I decided to
                start my own Food Blogging site so here I’m to share my beautiful experience of love and delicious Food Recipes 🙂
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
};

export default AboutPage;
