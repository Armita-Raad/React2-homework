
export default function ShowPlanets({ planets }) {
    return (
      <>
        <ul className="list-group m-5">
          {planets.map((planet, i) => (
            <li key={i}>{planet}</li>
          ))}
        </ul>
      </>
    );
  }