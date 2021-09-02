import { Container } from './styles';

export default function Button({ kind, children }) {
  return (
    <Container type="button" kind={kind}>
      {children}
    </Container>
  );
}
