import { useState, useEffect } from 'react';

import Message from './components/message';
import Form from './components/form';
import Table from './components/table';

import { httpGet, httpPost, httpDelete } from './utils/http';

import GlobalStyle from './styles/global-style';
import { Container, Grid } from './styles/app-style';

const url = 'http://localhost:3333/cars';

export default function App() {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    const data = await httpGet(url);
    setCars(data);
  }

  async function createNewCar(car) {
    const result = await httpPost(url, car);
    setMessage(result.message);

    if (result.error) {
      return false;
    }

    getCars();
    return true;
  }

  async function deleteCar(plate) {
    const result = await httpDelete(url, { plate });

    getCars();
    setMessage(result.message);
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Grid>
          <Message message={message} changeMessage={setMessage} />
          <Form createNewCar={createNewCar} />
          <Table cars={cars} deleteCar={deleteCar} />
        </Grid>
      </Container>
    </>
  );
}
