// Write all the code here
import { FaSearch } from "react-icons/fa";
import Founder from "../home/Founder";

export default function About() {
  return (
    <section className="about">
      <main>
        <h1>Sobre Nosotros</h1>
        <article>
          <h4>Burguer Shop</h4>
          <p>
            Bienvenido a Burguer Shop. Un paraíso para los amantes de las
            hambuerguesas en pleno centro de Madrid.
          </p>
          <p>Haz click aqui debajo para ver todas nustras opciones 😉</p>
          <a href="/">
            <FaSearch />
          </a>
        </article>
        <Founder />
      </main>
    </section>
  );
}
