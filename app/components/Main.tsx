"use client";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import TrendingSection from "./sections/TrendingSection";
import { useState } from "react";
import RecommendSection from "./sections/RecommendSection";
import Movie from "./types/movies.types";
import data from "../data.json";
import MovieCard from "./ui/MovieCard";
export default function Main() {
  const Movies: Movie[] = data;
  const [activeTab, setActiveTab] = useState("Recommended for you");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = Movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="lg:ml-31 lg:mt-12 pl-6 pb-10">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {searchTerm === "" ? (
          <>
            {activeTab === "Recommended for you" && (
              <>
                <TrendingSection title={activeTab} />
                <RecommendSection title={activeTab} />
              </>
            )}
            {activeTab === "Movies" && (
              <>
                <RecommendSection title={activeTab} />
              </>
            )}
            {activeTab === "TV Series" && (
              <>
                <RecommendSection title={activeTab} />
              </>
            )}
          </>
        ) : (
          <>
            <div className="text-[32px] tracking-[-0.5px] leading-[125%] font-light mb-8">
              Found {filteredMovies.length} results for '{searchTerm}'
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 xl:gap-x-10 gap-y-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
