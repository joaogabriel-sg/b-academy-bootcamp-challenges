import Button from '../button';

import { Container, Content, List, Item, Buttons } from './styles';

export default function Sidebar({ links, handleChangePost }) {
  return (
    <Container>
      <Content>
        <List>
          {links.map((link, index) => (
            <Item key={link.id} delayTime={index}>
              <button
                onClick={() => {
                  handleChangePost(link.id);
                  window.scrollTo(0, 0);
                }}
              >
                {link.title}
              </button>
            </Item>
          ))}
        </List>
        <Buttons>
          <Button kind="primary">Acessar</Button>
          <Button kind="secondary">Faça seu registro</Button>
        </Buttons>
      </Content>
    </Container>
  );
}
