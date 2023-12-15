import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

import "../../styles/footer.scss";

export default function Footer(){
  
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>
          Las hamburguesas más jugosas preparadas con todo el cariño del equipo. 
        </p>
      </div>
      <aside>
        <h4>Síguenos en:</h4>
        <a href="/#" aria-hidden="true">
          <CiYoutube />
        </a>
        <a href="/#" aria-hidden="true">
          <FaInstagram />
        </a>
        <a href="/#" aria-hidden="true">
          <VscGithub />
        </a>
      </aside>
    </footer>
  );
};

