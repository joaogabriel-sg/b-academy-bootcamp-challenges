import H1 from './H1';
import H2 from './H2';
import Button from './Button';

export default function ContentArea() {
  return (
    <main className="content-area">
      <H1>Brownie de Nescau</H1>
      <p>
        Hoje bateu uma vontade enorme de comer um brownie de chocolate, mas quando fui olhar no armário, tinha acabado todo o meu chocolate em pó. Então eu resolvi testar essa receita de brownie de Nescau fácil e rápido que fica igual ao original! 
      </p>
      <p>
        Não é porque falta algum ingrediente aí na sua casa que você vai deixar de fazer uma receita gostosa, esse brownie é a prova de que com poucos ingredientes você pode fazer uma sobremesa simples porém saborosa sem gastar muito dinheiro. Eu sempre fui apaixonado por esse tipo de bolo, sempre gosto de fazer aqui em casa aos domingo e na hora de servir eu gosto de decorar bem o prato. Dessa vez eu servi o meu brownie de Nescau fácil com uma bola de sorvete de creme e coloquei uma cobertura de chocolate bem cremosa daquelas que a gente usa para sorvete, ficou delicioso!
      </p>
      <p>
         Se você já está aí babando só de imaginar, corre para aprender como fazer brownie de Nescau fácil cremoso por dentro e com uma casquinha por fora. Esse brownie de Nescau fácil é bem parecido com aquele que vende no Outback, quem já comeu vai perceber como é parecido. Quem não quiser usar achocolatado da Marca Nescau, pode fazer com qualquer outra marca também, vai dar super certo. Brownie de Nescau Fácil.
      </p>

      <H2>Ingredientes</H2>
      <ul>
        <li>2 xícaras de Nescau (achocolatado em pó)</li>
        <li>1 xícara de farinha de trigo</li>
        <li>1 xícara de açúcar</li>
        <li>4 ovos</li>
        <li>200g de manteiga (derretida)</li>
      </ul>
      
      <H2>Modo de Preparo</H2>
      <ol>
        <li>Numa tigela, junte os ovos com o açúcar e bata com a ajuda de um batedor de arame (fouet) ou garfo.</li>
        <li>DICA: pode ser batido na batedeira também.</li>
        <li>Em seguida, adicione a manteiga e o Nescau.</li>
        <li>Misture tudo muito bem e depois adicione a farinha de trigo.</li>
        <li>Mexa até que a massa fique bem homogênea.</li>
        <li>OBS: a massa fica mais pesada do que a massa de bolo comum.</li>
        <li>Despeje essa massa numa forma untada e enfarinhada com Nescau.</li>
        <li>Leve para assar em forno preaquecido, 180ºC, por cerca de 35 minutos.</li>
      </ol>
      
      <Button kind="primary">Brownie é vida!</Button>
      <Button kind="secondary">Deu bom!</Button>
    </main>
  )
}