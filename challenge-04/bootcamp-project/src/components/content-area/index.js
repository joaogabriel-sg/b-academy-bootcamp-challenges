import { H2 } from '../headings';

import { Container } from './styles';

export default function ContentArea({ title, content }) {
  return (
    <Container>
      <H2>{title}</H2>
      {content}
    </Container>
  );
}
