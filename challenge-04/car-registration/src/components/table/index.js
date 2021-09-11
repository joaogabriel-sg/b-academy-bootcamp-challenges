import CarRows from '../car-rows';

import { Container, Head, Row, Title, Body } from './styles';

export default function Table({ cars, deleteCar }) {
  return (
    <Container>
      <Head>
        <Row>
          <Title>Imagem</Title>
          <Title>Marca / Modelo</Title>
          <Title>Ano</Title>
          <Title>Placa</Title>
          <Title>Cor</Title>
          <Title></Title>
        </Row>
      </Head>
      <Body>
        <CarRows cars={cars} deleteCar={deleteCar} />
      </Body>
    </Container>
  );
}
