import { useState, useCallback, useMemo } from "react";

export const useSearch = (initialValue = "") => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchValue("");
  }, []);

  const trimmedSearchValue = useMemo(() => searchValue.trim(), [searchValue]);

  return {
    searchValue,
    trimmedSearchValue,
    handleSearchChange,
    clearSearch
  };
};