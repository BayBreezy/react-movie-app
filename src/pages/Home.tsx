import { useLoaderData } from "react-router-dom";
import { MovieSlider } from "../components/MovieSlider";
import { useSetTitle } from "../hooks/useSetTitle";
import { IMovie } from "../types";

function Home() {
  const loadedData = useLoaderData() as any;
  const movies = loadedData.movies as IMovie[];
  const popularMovies = loadedData.popular as IMovie[];
  useSetTitle();

  return (
    <main className="text-slate-800">
      <section className="mx-auto max-w-6xl lg:mt-10 px-3 lg:px-0">
        <section className="lg:mt-10 mt-3">
          {movies && <MovieSlider movies={movies} title="In Cinema" />}
        </section>
        <section className="mt-16">
          {popularMovies && <MovieSlider movies={popularMovies} title="Popular 🔥" />}
        </section>
      </section>
    </main>
  );
}

export default Home;
