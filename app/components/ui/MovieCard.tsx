import Image from "next/image";
import BookmarkIcon from "../../assets/icon-bookmark-empty.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";
import IMovies from "../types/movies.types";

export default function MovieCard({ movie }: { movie: IMovies }) {
  return (
    <div key={movie.title} className="relative">
      <Image
        src={movie.thumbnail?.regular.large}
        width={500}
        height={280}
        loading="eager"
        alt=""
        className="rounded-[10px] h-38 sm:h-auto mb-1.5 object-cover"
      />
      <div className="absolute top-4 right-4">
        <div className="flex justify-center items-center h-8 w-8 bg-Blue-950/60 rounded-full">
          <Image src={BookmarkIcon} alt="" />
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex gap-2 text-[15px] font-light text-white/75">
          <p>{movie.year}</p>
          &bull;
          <p className="flex items-center gap-1.5">
            <Image src={MovieIcon} alt="" className="w-3 h-3 mb-1" />
            {movie.category}
          </p>
          &bull;
          <p>{movie.rating}</p>
        </div>
        <h3 className="text-lg font-medium leading-[125%]">{movie.title}</h3>
      </div>
    </div>
  );
}
