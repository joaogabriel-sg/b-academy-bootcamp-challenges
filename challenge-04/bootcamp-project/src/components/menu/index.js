import { Container, List, Item } from './styles';

const itens = [
  {
    name: 'GitHub',
    link: 'https://github.com/joaogabriel-sg',
  },
  {
    name: 'Repositório B.Academy',
    link: 'https://github.com/joaogabriel-sg/b-academy-bootcamp-challenges',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joaogabriel-sg/',
  },
];

export default function Menu() {
  return (
    <Container>
      <List>
        {itens.map((item, index) => (
          <Item key={item.name} delayTime={index}>
            <a href={item.link} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </Item>
        ))}
      </List>
    </Container>
  );
}
