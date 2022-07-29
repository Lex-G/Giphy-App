import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getGifsBySearchTerm, getTrendingGifs } from "../services/giphyService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      getGifsBySearchTerm(search).then((response) => {
        setGifs(response.data);
      });
    } else {
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    }

    getTrendingGifs().then((response) => {
      setGifs(response.data);
    });
  }, []);

  return (
    <div className="Main">
      <SearchForm />
      <ResultsList gifs={gifs} />
    </div>
  );
};

export default Main;
