<<<<<<< HEAD
"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SEARCH_TYPES } from "@school-admin/(features)/students/data/constants";
import { SearchType } from "@school-admin/(features)/students/types/enum";
import { useStudent } from "@school-admin/(features)/students/hooks/useSearch";
=======
'use client'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SEARCH_TYPES } from "@school-admin/(features)/students/data/constants";
import { SearchType } from "@school-admin/(features)/students/types/enum";
import { useStudentSearch } from "@school-admin/(features)/students/hooks/useSearch";
>>>>>>> aboutUs
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StudentsPage() {
<<<<<<< HEAD
=======

>>>>>>> aboutUs
  const {
    searchType,
    query,
    setQuery,
    changeSearchType,
    handleSearch,
<<<<<<< HEAD
  } = useStudent();
=======
    handleKeyDown,
  } = useStudentSearch();
>>>>>>> aboutUs
  return (
    <div className="p-4 w-full flex flex-col gap-6  ">
      <h1 className="text-2xl font-semibold">Search By</h1>

      <RadioGroup
        value={searchType}
        onValueChange={(value) => changeSearchType(value as SearchType)}
        className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {SEARCH_TYPES.map((type) => (
          <label
            key={type.value}
            className="flex items-center gap-2 p-2  rounded cursor-pointer w-full justify-evenly">
            <RadioGroupItem value={type.value} />
            <span>{type.label}</span>
          </label>
        ))}
      </RadioGroup>

      <Input
        type="text"
        placeholder={`Search by ${searchType}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // onKeyDown={handleKeyDown}
        className="border p-2  w-full"
      />
      <div className="flex w-full justify-end">
<<<<<<< HEAD
        <Button
          variant="default"
          onClick={() => handleSearch(query)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors w-1/4">
          Search
        </Button>
      </div>
    </div>
  );
}
=======

      <Button
      variant="default"
        onClick={() => handleSearch(query)}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors w-1/4">
        Search
      </Button>
      </div>
    </div>
  );
}
>>>>>>> aboutUs
