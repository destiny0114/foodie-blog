import { Button, Group } from "@mantine/core";
import { IconChevronsLeft, IconChevronsRight } from "@tabler/icons";
import Link from "next/link";

type Props = {
  currentPage: number;
  totalPage: number;
};

export default function Pagination({ currentPage, totalPage }: Props) {
  if (totalPage === 1) return null;

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPage;

  const renderedPageLinks = Array.from({ length: totalPage }, (_, i) => (
    <Link key={i + 1} href={`/blog/page/${i + 1}`}>
      <Button
        variant="white"
        size="md"
        p={0}
        uppercase
        disabled={currentPage === i + 1 ? true : false}
        sx={{ backgroundColor: "transparent", color: "black", alignSelf: "start", "&:disabled": { backgroundColor: "inherit" } }}
      >
        {i + 1}
      </Button>
    </Link>
  ));

  return (
    <Group spacing="lg">
      {!isFirst && (
        <Link href={`/blog/page/${currentPage - 1}`}>
          <Button
            variant="white"
            size="md"
            p={0}
            leftIcon={<IconChevronsLeft size={15} color="red" />}
            uppercase
            sx={{ backgroundColor: "transparent", color: "black", alignSelf: "start" }}
          >
            Previous Page
          </Button>
        </Link>
      )}

      {renderedPageLinks}

      {!isLast && (
        <Link href={`/blog/page/${currentPage + 1}`}>
          <Button
            variant="white"
            size="md"
            p={0}
            rightIcon={<IconChevronsRight size={15} color="red" />}
            uppercase
            sx={{ backgroundColor: "transparent", color: "black", alignSelf: "start" }}
          >
            Next Page
          </Button>
        </Link>
      )}
    </Group>
  );
}
