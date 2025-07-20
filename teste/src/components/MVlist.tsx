import { useEffect, useState } from "react";

const readToken = import.meta.env.VITE_READ_TOKEN;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${readToken}`,
  },
};

const MVlist = () => {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res)
        console.log(movies)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Lista de Filmes:</h1>
      <div className="container"></div>
    </>
  );
};

export default MVlist;
