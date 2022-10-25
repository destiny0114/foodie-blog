import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { ChangeEvent, useEffect, useState } from "react";
import router from "next/router";
import useDebounce from "@hooks/useDebounce";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (!debounceTerm) return;

    router.push(`/blog/search?term=${debounceTerm}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceTerm]);

  const handleInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "#ffecd7" }}>
      <Input
        size="md"
        radius={0}
        rightSection={
          <div>
            <IconSearch size={16} style={{ display: "block" }} />
          </div>
        }
        placeholder="Search a recipe..."
        styles={{ input: { backgroundColor: "white", border: "none", "&:focus": { borderColor: "none" } } }}
        onChange={handleInputChanged}
      />
    </div>
  );
}
