export default function CarRows({ cars, deleteCar }) {
  if (!cars.length) {
    return (
      <tr>
        <td colSpan="6">Não existe carros cadastrados!</td>
      </tr>
    );
  }

  return cars.map((car) => (
    <tr key={car.plate}>
      <td>
        <img src={car.image} alt={car.brandModel} />
      </td>
      <td>{car.brandModel}</td>
      <td>{car.year}</td>
      <td>{car.plate}</td>
      <td>
        <div style={{ background: car.color }} />
      </td>
      <td>
        <button onClick={() => deleteCar(car.plate)}>✕</button>
      </td>
    </tr>
  ));
}
