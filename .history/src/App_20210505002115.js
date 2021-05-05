import { useState, useEffect, useLayoutEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import SearchBar from "./components/SearchBar";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    // only get the top 5 anime
    SetTopAnime(temp.top.slice(0, 5));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    SetAnimeList(temp.results);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <br />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <SearchBar SetSearch={SetSearch} />
        {typeof SetSearch != "undefined" ? (
          <MainContent
            HandleSearch={HandleSearch}
            search={search}
            animeList={animeList}
            SetSearch={SetSearch}
          />
        ) : (
          "Here goes the initial part"
        )}
      </div>
    </div>
  );
}

export default App;
