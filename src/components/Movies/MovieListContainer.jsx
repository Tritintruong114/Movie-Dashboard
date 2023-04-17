import MoviesList from "./MoviesList";

export function MovieListContainer() {
  return (
    <div className="h-1/4 md:h-2/6 xl:h-3/6  relative flex-shrink-0 overflow-auto w-full items-center justify-between gap-3 ">
      <MoviesList genres={"ABC"} />
    </div>
  );
}
