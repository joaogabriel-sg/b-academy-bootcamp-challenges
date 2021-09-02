import { Row, Image, Color, DeleteButton } from './styles';

export default function CarRows({ cars, deleteCar }) {
  if (!cars.length) {
    return (
      <Row>
        <td colSpan="6">Não existe carros cadastrados!</td>
      </Row>
    );
  }

  return cars.map((car) => (
    <Row key={car.plate}>
      <td>
        <Image src={car.image} alt={car.brandModel} />
      </td>
      <td>{car.brandModel}</td>
      <td>{car.year}</td>
      <td>{car.plate}</td>
      <td>
        <Color color={car.color} />
      </td>
      <td>
        <DeleteButton onClick={() => deleteCar(car.plate)}>✕</DeleteButton>
      </td>
    </Row>
  ));
}
