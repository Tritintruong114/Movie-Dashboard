import MoviesList from "./MoviesList";

export function MovieListContainer({ genresId }) {
  return (
    <div className="h-3/4 md:h-4/6 xl:h-full  relative flex-shrink-0 w-full items-center justify-between gap-3 rounded-xl">
      <MoviesList genresId={genresId} />
    </div>
  );
}
