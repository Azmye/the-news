import { useEffect, useState } from "react";
import { SearchInput } from "../../components";
import { dispatch, searchArticle } from "../../redux";
import useDebounce from "../../hooks/useDebounce";
import { IoSearch } from "react-icons/io5";

export const HomeSearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchQuery = useDebounce({ value: searchValue, delay: 500 });

  useEffect(() => {
    dispatch(searchArticle(searchQuery));
  }, [searchQuery]);

  return (
    <SearchInput
      endIcon={<IoSearch />}
      value={searchValue}
      onChange={setSearchValue}
    />
  );
};
