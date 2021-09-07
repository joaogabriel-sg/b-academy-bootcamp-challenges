import brainnLogoImg from '../../assets/brainn-logo.svg';

import { Container, Logo, Title, InputGroup, SubmitButton } from './styles';

export default function Form({ createNewCar }) {
  function getFormElement(form) {
    return (elementName) => form.elements.namedItem(elementName);
  }

  function resetForm(form) {
    form.reset();
    form.elements[0].focus();
  }

  async function handleSubmitNewCar(e) {
    e.preventDefault();
    const form = e.target;
    const getElement = getFormElement(form);

    const car = {
      image: getElement('image').value,
      brandModel: getElement('brand-model').value,
      year: +getElement('year').value,
      plate: getElement('plate').value,
      color: getElement('color').value,
    };

    const isCreated = await createNewCar(car);

    if (isCreated) {
      resetForm(form);
    }
  }

  return (
    <Container onSubmit={handleSubmitNewCar}>
      <Logo src={brainnLogoImg} alt="Logo da Brainn" />
      <Title>Registro de Carros</Title>

      <InputGroup>
        <label htmlFor="image">Imagem (URL)</label>
        <input type="url" id="image" name="image" />
      </InputGroup>

      <InputGroup>
        <label htmlFor="brand-model">Marca / Modelo</label>
        <input type="text" id="brand-model" name="brand-model" />
      </InputGroup>

      <InputGroup>
        <label htmlFor="year">Ano</label>
        <input type="number" id="year" name="year" />
      </InputGroup>

      <InputGroup>
        <label htmlFor="plate">Placa</label>
        <input type="text" id="plate" name="plate" />
      </InputGroup>

      <InputGroup>
        <label htmlFor="color">Cor</label>
        <input type="color" id="color" name="color" />
      </InputGroup>

      <SubmitButton type="submit">Cadastrar carro</SubmitButton>
    </Container>
  );
}
