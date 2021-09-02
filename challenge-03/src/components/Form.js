import styles from '../styles/form.module.css';

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
    <form className={styles.formContainer} onSubmit={handleSubmitNewCar}>
      <h1 className={styles.formTitle}>Registro de Carros</h1>

      <div className={styles.formGroup}>
        <label htmlFor="image">Imagem (URL)</label>
        <input type="url" id="image" name="image" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="brand-model">Marca / Modelo</label>
        <input type="text" id="brand-model" name="brand-model" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="year">Ano</label>
        <input type="number" id="year" name="year" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="plate">Placa</label>
        <input type="text" id="plate" name="plate" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="color">Cor</label>
        <input type="color" id="color" name="color" />
      </div>

      <button className={styles.submitButton} type="submit">
        Cadastrar carro
      </button>
    </form>
  );
}
