import { useState, useEffect } from 'react';

import Message from './components/Message';
import Form from './components/Form';
import CarRows from './components/CarRows';

import { httpGet, httpPost, httpDelete } from './utils/http';

import styles from './styles/app.module.css';

const url = 'http://localhost:3333/cars';

export default function App() {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCars();
  }, []);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setMessage('');
    }, 3000);

    return () => clearTimeout(subscribe);
  }, [message]);

  async function getCars() {
    const data = await httpGet(url);
    setCars(data);
  }

  async function deleteCar(plate) {
    const result = await httpDelete(url, { plate });

    getCars();
    setMessage(result.message);
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

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Message message={message} />
        <Form createNewCar={createNewCar} />
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Marca / Modelo</th>
              <th>Ano</th>
              <th>Placa</th>
              <th>Cor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CarRows cars={cars} deleteCar={deleteCar} />
          </tbody>
        </table>
      </div>
    </main>
  );
}
