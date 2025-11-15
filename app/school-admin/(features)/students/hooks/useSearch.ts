"use client";

<<<<<<< HEAD
import { useState } from "react";
import { SearchType, studentAddType } from "@school-admin/(features)/students/types/enum";

export function useStudent() {
  const [searchType, setSearchType] = useState<SearchType>(
    SearchType.ADMISSION_NO
  );
  const [addType, setstudentAddType] = useState<studentAddType>(studentAddType.key);
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isMoving, setIsMoving] = useState<boolean>(false);

=======
import { KeyboardEventHandler, useState } from "react";
import { SearchType } from "@school-admin/(features)/students/types/enum";

export function useStudentSearch(
  defaultType: SearchType = SearchType.ADMISSION_NO
) {
  const [searchType, setSearchType] = useState<SearchType>(defaultType);
  const [query, setQuery] = useState("");

>>>>>>> aboutUs
  const changeSearchType = (type: SearchType) => {
    setSearchType(type);
    setQuery("");
  };
<<<<<<< HEAD
  const changeAddType = (type: studentAddType) => {
    setstudentAddType(type);
    setQuery("");
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(query);
    }
  };

  const handleSearch = async (value: string) => {
    setIsSearching(true);
    setQuery(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSearching(false);
  };
  const handleAddStudent = async (value: string) => {
    setIsAdding(true);
    console.log(value);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAdding(false);
  };


=======
   const handleKeyDown = (e: KeyboardEvent) => {
     if (e.key === "Enter") {
       handleSearch(query);
     }
   };

  const handleSearch = (value: string) => {
    setQuery(value);
  };
>>>>>>> aboutUs

  return {
    searchType,
    query,
    setQuery,
    changeSearchType,
    handleSearch,
    handleKeyDown,
<<<<<<< HEAD
    isLoading,
    addType,
    setstudentAddType,
    isSearching,
    setIsSearching,
    isAdding,
    setIsAdding,
    isMoving,
    setIsMoving,
    changeAddType,
    handleAddStudent,
=======
>>>>>>> aboutUs
  };
}
