import Pokecard from "./Pokecard";
const pokemonData = {
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ],
};

export default function Pokedex() {
  return (
    <div style={{
        margin: '2rem'
    }}>
      <h1
        className="d-flex justify-content-center fw-bolder"
        style={{ color: "#6c757d" }}
      >
        Pokedex
      </h1>
      <div style={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
      }}>
        {pokemonData.pokemon.map((data, i) => {
          return (
            <Pokecard
              name={data.name}
              key={i}
              image={data.image}
              id={data.id}
              type={data.type}
            />
          );
        })}
      </div>
    </div>
  );
}
