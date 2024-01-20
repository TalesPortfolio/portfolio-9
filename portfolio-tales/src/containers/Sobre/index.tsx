import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>sobre min</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta
      labore unde corporis esse, incidunt rem quaerat nobis provident quasi
      minima doloribus voluptatum autem consequatur, nihil aspernatur nulla
      impedit ipsa.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Tales1982&show_icons=true&theme=tokyonight" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tales1982&layout=compact&theme=tokyonight" />
    </GithubSecao>
  </section>
);

export default Sobre;
