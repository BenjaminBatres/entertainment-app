import React from "react";
import SearchIcon from "../assets/icon-search.svg";
import Image from "next/image";
interface SearchTerm {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchTerm) {
  return (
    <div className="flex items-center gap-4 sm:gap-8 pt-3.5 mb-6 sm:mb-10">
      <Image src={SearchIcon} alt="" className="size-6 sm:size-auto" />
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search for movies or TV series"
        className="w-120 outline-0 placeholder:text-white/50 sm:text-2xl font-light focus:border-b focus:border-Blue-500 pb-1"
      />
    </div>
  );
}
