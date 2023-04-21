import MoviesList from "./MoviesList";

export function MovieListContainer({ genresId }) {
  return (
    <div className="h-1/4 md:h-4/6 xl:h-5/6  relative flex-shrink-0 w-full items-center justify-between gap-3 rounded-xl">
      <MoviesList genresId={genresId} />
    </div>
  );
}
