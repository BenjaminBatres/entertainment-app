import { useEffect, useState } from "react";
import data from "../../data.json";
import Movie from "../types/movies.types";
import MovieCard from "../ui/MovieCard";
import SkeletonBox from "../SkeletonBox";

interface RecommendSectionProps {
  title?: string;
}
export default function RecommendSection({ title }: RecommendSectionProps) {
  const Movies: Movie[] = data;
  const recommended = Movies.filter((movie) => !movie.isTrending);
  const MovieCategory = Movies.filter((movie) => movie.category === "Movie");
  const TVCategory = Movies.filter((movie) => movie.category === "TV Series");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log('ran?')
    }, 500);
  }, [title]);

  return (
    <section className="space-y-6 pr-6">
      <h2 className="text-[32px] tracking-[-0.5px] leading-[125%] font-light">
        {title}
      </h2>
      <div className="grid xs-mobile:grid-cols-2 sm:grid-cols-3 h-[] xl:grid-cols-4 gap-x-4 sm:gap-x-6 xl:gap-x-10 gap-y-6">
        {isLoading ? (
          <>
            {new Array(12).fill(0).map((_, id) => (
              <SkeletonBox
                key={id}
                width={"100%"}
                height={"h-38 sm:h-55"}
                borderRadius={10}
              />
            ))}
          </>
        ) : (
          <>
            {title === "Movies" &&
              MovieCategory.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
              ))}
            {title === "Recommended for you" &&
              recommended.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
              ))}
            {title === "TV Series" &&
              TVCategory.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
              ))}
          </>
        )}
      </div>
    </section>
  );
}
