import { Grid } from "@mantine/core";
import AsideSimple from "@components/Aside";
import React from "react";

type Props = {
  children: React.ReactNode;
  categories?: string[];
};

export const MainContainer = ({ children, categories }: Props) => {
  return (
    <Grid>
      <Grid.Col span={8}>{children}</Grid.Col>
      <Grid.Col span="auto">
        <AsideSimple categories={categories || []} />
      </Grid.Col>
    </Grid>
  );
};
