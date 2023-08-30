export default function RandomPokemon() {
    const pokemonNumber = Math.floor(Math.random() * 151) + 1;
    const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`
    return (
      <div className="pokemon">
        <h1>Pokemon # {pokemonNumber}</h1>
        <img src={baseURL} alt=""/>
      </div>
    );
  }