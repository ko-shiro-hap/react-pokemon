import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  // ポケモンAPIのURL
  const initialURL = "https://pokeapi.co/api/v2/pokemon/ditto";

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      console.log(res);
    };
    fetchPokemonData();
  }, []);

  return <div className="App">hello</div>;
}

export default App;
