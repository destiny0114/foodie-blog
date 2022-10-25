import { Box, Title } from "@mantine/core";
import Layout from "@components/Layout";

const NotFound = () => {
  return (
    <Layout title="Foodie | 404">
      <Box p="lg" sx={{ height: "35em", textAlign: "center" }}>
        <Title color="#4a5156" size="h1">
          Page Not Found
        </Title>
      </Box>
    </Layout>
  );
};

export default NotFound;
