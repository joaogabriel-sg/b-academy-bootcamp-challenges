import Button from '../button';

import { Container, Content, List, Item, PostLink, Buttons } from './styles';

export default function Sidebar({ links, handleChangePost }) {
  return (
    <Container>
      <Content>
        <List>
          {links.map((link, index) => (
            <Item key={link.id} delayTime={index}>
              <PostLink
                onClick={(event) => {
                  event.preventDefault();
                  handleChangePost(link.id);
                  window.scrollTo(0, 0);
                }}
              >
                {link.title}
              </PostLink>
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
