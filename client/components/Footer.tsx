import { Anchor, Footer, Text } from "@mantine/core";

export default function FooterSimple() {
  return (
    <Footer height={40} p="md" sx={{ backgroundColor: "inherit", borderColor: "#C49859" }}>
      <Text size="sm" color="dimmed">
        Built By&nbsp;
        <Anchor href="https://github.com/destiny0114" target="_blank">
          @Keena Levine
        </Anchor>
      </Text>
    </Footer>
  );
}
