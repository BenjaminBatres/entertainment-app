import Image from "next/image";
import BookmarkIcon from "../../assets/icon-bookmark-empty.svg";
import MovieIcon from "../../assets/icon-category-movie.svg";

export default function TrendingMovieCard({
  thumbnail,
  title,
  year,
  category,
  rating,
}: {
  thumbnail: any;
  title: string;
  year: number;
  category: string;
  rating: string;
}) {
  return (
    <div className="w-full h-full relative rounded-[10px] overflow-hidden">
      <Image
        src={thumbnail.trending?.large || thumbnail.regular.large}
        alt={title}
        loading="eager"
        width={700}
        height={450}
        className="h-57.5 xl:h-full w-full object-cover"
      />
      {/* Gradieent Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#000000bf]" />
      {/* Bookmark Icon */}
      <div className="absolute top-4 right-6">
        <div className="flex justify-center items-center h-8 w-8 bg-Blue-950/60 rounded-full">
          <Image src={BookmarkIcon} alt="" />
        </div>
      </div>
      {/* Movie Info */}
      <div className="absolute bottom-6 left-6 space-y-1">
        <div className="flex gap-2 text-[15px] font-light text-white/75">
          <p>{year}</p>
          &bull;
          <p className="flex items-center gap-1.5">
            <Image src={MovieIcon} alt="" className="w-3 h-3" />
            {category}
          </p>
          &bull;
          <p>{rating}</p>
        </div>
        <h3 className="text-2xl font-medium leading-[125%]">{title}</h3>
      </div>
    </div>
  );
}
