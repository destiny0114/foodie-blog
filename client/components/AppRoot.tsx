import { AppShell, Container } from "@mantine/core";
import HeaderSimple from "@components/Header";
import FooterSimple from "@components/Footer";

interface AppRootProps {
  children: React.ReactNode;
}

export const AppRoot = ({ children }: AppRootProps) => {
  return (
    <Container size="xl">
      <AppShell fixed={false} header={<HeaderSimple />} footer={<FooterSimple />}>
        {children}
      </AppShell>
    </Container>
  );
};
