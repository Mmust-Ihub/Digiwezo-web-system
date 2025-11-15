"use client";

import { KeyboardEventHandler, useState } from "react";
import { SearchType } from "@school-admin/(features)/students/types/enum";

export function useStudentSearch(
  defaultType: SearchType = SearchType.ADMISSION_NO
) {
  const [searchType, setSearchType] = useState<SearchType>(defaultType);
  const [query, setQuery] = useState("");

  const changeSearchType = (type: SearchType) => {
    setSearchType(type);
    setQuery("");
  };
   const handleKeyDown = (e: KeyboardEvent) => {
     if (e.key === "Enter") {
       handleSearch(query);
     }
   };

  const handleSearch = (value: string) => {
    setQuery(value);
  };

  return {
    searchType,
    query,
    setQuery,
    changeSearchType,
    handleSearch,
    handleKeyDown,
  };
}
