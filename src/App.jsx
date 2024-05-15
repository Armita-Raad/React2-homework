import Card from "./components/Card";
import Alert from "./components/Alert";
import RenderList from "./components/RenderList";
import ShowPlanets from "./components/ShowPlanets";
import CustomerInformation from "./components/CustomerInformation";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <>
      <Card
        data={{
          image: "../../.learn/assets/Dylan.png?raw=true",
          cardTitle: "Bob Dylan",
          cardDescription:
            "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
          button: {
            url: "https://en.wikipedia.org/wiki/Bob_Dylan",
            label: "Go to wikipedia",
          },
        }}
      />
      <Alert text="OMG! Something really bad has happened!" />
      <RenderList
        animals={[
          { label: "Horse" },
          { label: "Turtle" },
          { label: "Elephant" },
          { label: "Monkey" },
        ]}
      />
      <ShowPlanets planets = {['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune']} />
      <CustomerInformation
        customer={{
          first_name: "Bob",
          last_name: "Dylan",
        }}
      />
      <Pokedex />
    </>
  );
}

export default App;
