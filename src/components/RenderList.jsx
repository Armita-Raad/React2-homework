export default function RenderList({ animals }) {
  return (
    <>
      <ul>
        {animals.map((animal, i) => (
          <li key={i}>{animal.label}</li>
        ))}
      </ul>
    </>
  );
}
