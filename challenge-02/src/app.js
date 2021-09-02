import { useState } from "react";

import Header from "./Header";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import Footer from "./Footer";

import H2 from "./H2";

const links = [
  {
    id: 1,
    title: 'Como fazer o melhor baião do mundo',
    content: (
      <>
        <p>
          Existe dupla mais popular que essa? Arroz com feijão já se completam, combinados com carne-seca, queijo de coalho e bacon então... Vai  dar samba, ou melhor, baião!
        </p>
        <H2>Ingredientes</H2>
        <ul>
          <li>500 g de carne-seca</li>
          <li>1 xícara (chá) de feijão-fradinho</li>
          <li>1 xícara (chá) de arroz</li>
          <li>½ cebola picada fino</li>
          <li>1 colher (sopa) de azeite (ou óleo)</li>
          <li>½ colher (chá) de sal</li>
          <li>1 folha de louro</li>
        </ul>
        <H2>Modo de Preparo</H2>
        <ol>
          <li>
            Corte a carne-seca em cubos grandes de cerca de 7 cm - este tamanho é ideal para dessalgar a carne sem tirar completamente o sal e  também para desfiar de um tamanho uniforme. Coloque numa tigela e lave em água corrente.
          </li>
          <li>
            Cubra os cubos de carne com 5 xícaras (chá) de água fria. Cubra a tigela com um prato (ou filme) e deixe na geladeira por 24 horas - troque a água pelo menos uma vez durante este período. 
          </li>
          <li>
            Escorra a água e transfira a carne para a panela de pressão. Complete com água até a metade da panela, tampe e leve ao fogo médio. Assim que a panela começar a apitar, diminua o fogo e deixe cozinhar por 20 minutos. Desligue o fogo e espere toda a pressão sair antes de abrir (você pode colocar um garfo sob a válvula par acelerar o processo, mas isso encurta o tempo de vida da panela). 
          </li>
          <li>
            Despreze a água do cozimento, junte o feijão-fradinho e repita o passo anterior, mas dessa vez deixe cozinhar por apenas 10 minutos. Atenção: o feijão não pode cozinhar demais e desmanchar. Após os 10 minutos de cozimento, desligue o fogo e, com um garfo, levante a válvula para tirar a pressão da panela. 
          </li>
          <li>
            Com uma pinça, transfira os cubos de carne para um prato e desfie com dois garfos - descarte os pedaços maiores de gordura. Sobre uma tigela, passe o feijão por uma peneira e reserve a água do cozimento. 
          </li>
          <li>
            Leve ao fogo médio uma panela média. Quando aquecer, regue com o azeite e acrescente a cebola. Tempere com o sal e refogue por cerca de 2 minutos, até murchar. Acrescente o arroz e mexa bem por cerca de 1 minuto para envolver todos os grãos com o azeite. 
          </li>
          <li>
            Meça 2 xícaras (chá) da água do cozimento reservada e regue sobre o arroz. Junte a folha de louro, misture e deixe cozinhar em fogo médio. Assim que a água começar a secar e atingir o mesmo nível do arroz, diminua o fogo e tampe parcialmente a panela. Deixe cozinhar até o arroz absorver toda a água - para verificar, fure o arroz com um garfo e afaste alguns grãos do fundo da panela. 
          </li>
          <li>
            Desligue o fogo e mantenha a panela tampada por 5 minutos para que os grãos terminem de cozinhar no próprio vapor. Enquanto isso, prepare o refogado.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 2,
    title: 'Aprenda a cozinhar ovos corretamente',
    content: (
      <>
        <p>
          Como cozinhar ovo? Os três passos estão bem descritos aqui. A diferença entre abrir o ovo e encontrar a gema do jeitinho que você queria (mole, cremosa ou dura) está em cronometrar o tempo de cozimento.
        </p>
        <H2>Ingredientes</H2>
        <ul>
          <li>1 ovo</li>
        </ul>
        <H2>Modo de Preparo</H2>
        <ol>
          <li>
            Leve uma panela pequena com água ao fogo médio. Quando ferver, com cuidado e o  auxílio de uma colher, mergulhe o ovo e abaixe o fogo (se você colocar o ovo com cuidado, a casca não trinca).  Se preferir, com uma agulha faça um furinho na base do ovo e adicione caldo de limão à água (ele ajuda a manter a casca do ovo sem rachaduras). Mas basta colocar o ovo com delicadeza que a casca fica inteira.
          </li>
          <li>
            Conte os minutos. Para gema cozida, mas sem passar do ponto, 12 minutos.  Para a gema cremosa, 7 minutos. Para o ovo mollet (clara cozida firme e gema mais líquida), 6 minutos. Para o ovo quente (clara cozida macia e gema bem mole), 4 minutos.
          </li>
          <li>
            Com uma colher, tire o ovo da panela e mergulhe numa tigela com água fria filtrada até ele amornar. Para descascar, role delicadamente o ovo sobre a tábua e vá puxando os pedacinhos de casca. Passe novamente o ovo na tigela com água para descartar qualquer casquinha que tenha sobrado.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 3,
    title: 'Receitinha de bolo de cenoura',
    content: (
      <>
        <p>
          Bolo de cenoura fica macio, bem fofinho, no ponto para receber a calda de chocolate. No Panelinha, todas as receitas são testadas, preparadas pela equipe inúmeras vezes. Por isso sempre funciona.
        </p>
        <H2>Ingredientes (bolo)</H2>
        <ul>
          <li>3 cenouras médias (cerca de 360g ou 2 ¼ xícaras (chá) de cenoura descascada e ralada)</li>
          <li>4 ovos</li>
          <li>1 xícara (chá) de óleo de milho</li>
          <li>1 ½ xícara (chá) de açúcar</li>
          <li>2 xícaras (chá) de farinha de trigo</li>
          <li>1 colher (sopa) de fermento em pó</li>
          <li>1 pitada de sal</li>
          <li>manteiga e farinha de trigo para untar e polvilhar a fôrma</li>
        </ul>
        <H2>Modo de Preparo (bolo)</H2>
        <ol>
          <li>
            Preaqueça o forno a 180 ºC (temperatura média). Unte com manteiga uma fôrma retangular de 30 cm x 20 cm e 5 cm de altura. Polvilhe com farinha de trigo, chacoalhe e bata sobre a pia para tirar o excesso.
          </li>
          <li>
            Numa tigela, coloque a farinha, o sal e o fermento, passando pela peneira. Misture e reserve. 
          </li>
          <li>
            Lave e descasque as cenouras. Descarte a ponta da rama, corte as cenouras em rodelas e transfira para o liquidifcador. 
          </li>
          <li>
            Junte o óleo às cenouras cortadas. Numa tigela pequena, quebre um ovo de cada vez e transfira para o liquidificador – se um estiver estragado, você não perde a receita. Acrescente o açúcar e bata bem até ficar liso, por cerca de 5 minutos. 
          </li>
          <li>
            Transfira a mistura líquida para uma tigela grande e adicione aos poucos os ingredientes secos, misturando delicadamente com um batedor de arame para incorporar.
          </li>
          <li>
            Com cuidado, transfira a massa para a fôrma e leve ao forno para assar por cerca de 45 minutos. Para saber se o bolo está pronto, espete um palito na massa: se sair limpo, pode tirar do forno; caso contrário, deixe por mais alguns minutos, até assar completamente. Deixe esfriar por 15 minutos antes de preparar a cobertura.
          </li>
        </ol>
        <H2>Ingredientes (cobertura)</H2>
        <ul>
          <li>½ xícara (chá) de chocolate em pó</li>
          <li>⅓ de xícara (chá) de açúcar</li>
          <li>1 colher (sopa) de manteiga</li>
          <li>⅓ de xícara (chá) de água</li>
        </ul>
        <H2>Modo de Preparo (cobertura)</H2>
        <ol>
          <li>
            Numa panela pequena junte o chocolate, o açúcar, a manteiga e a água. Leve ao fogo alto e mexa com o batedor de arame até ferver.
          </li>
          <li>
            Depois que começar a ferver, mexa por mais 3 minutos, até a calda engrossar e desgrudar do fundo da panela. Regue a calda quente imediatamente sobre o bolo morno (ou frio) e espalhe com uma espátula para cobrir toda a superfície. Deixe a calda esfriar completamente e cristalizar antes de servir.
          </li>
        </ol>
      </>
    )
  }
]

export default function App() {
  const [post, setPost] = useState(links[0]);

  function handleChangePost(id) {
    const newPost = links.find((link) => link.id === id);
    setPost(newPost);
  }

  return (
    <div className="container-grid">
      <Header />
      <Menu />
      <Sidebar links={links} handleChangePost={handleChangePost} />
      <ContentArea post={post} />
      <Footer />
    </div>
  )
}