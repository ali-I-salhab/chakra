import axios from "axios";

export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",

  params: {
    // platform: "browser",
    // category: "mmorpg",
    // "sort-by": "release-date",
  },
  headers: {
    "x-rapidapi-key": "45f54950dfmsh54681566dc1e90ap1d0e24jsn9696f1caab51",
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
});
