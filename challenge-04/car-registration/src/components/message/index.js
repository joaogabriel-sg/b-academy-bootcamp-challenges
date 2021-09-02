import { Container } from './styles';

export default function Message({ message }) {
  if (!message) {
    return null;
  }

  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
}
