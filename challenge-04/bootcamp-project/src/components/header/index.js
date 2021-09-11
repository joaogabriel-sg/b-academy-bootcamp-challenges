import { H1 } from '../headings';

import brainnLogoImg from '../../assets/brainn-logo.svg';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo src={brainnLogoImg} alt="Logo da Brainn" />
      <H1>Bootcamp ReactJS - B.Academy</H1>
    </Container>
  );
}
