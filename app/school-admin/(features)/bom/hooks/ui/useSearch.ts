import { useState } from "react";

export const useSearch = (initialValue = "") => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  return {
    searchValue,
    handleSearchChange,
    clearSearch
  };
};