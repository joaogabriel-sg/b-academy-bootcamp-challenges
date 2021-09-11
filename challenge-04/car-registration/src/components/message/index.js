import { useEffect } from 'react';
import { Container } from './styles';

export default function Message({ message, changeMessage }) {
  useEffect(() => {
    const subscribe = setTimeout(() => {
      changeMessage('');
    }, 3000);

    return () => clearTimeout(subscribe);
  }, [message, changeMessage]);

  if (!message) {
    return null;
  }

  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
}
