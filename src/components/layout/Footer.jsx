import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

import "../../styles/footer.scss";

export default function Footer(){
  return (
    <div className="container footer row">
      <div className="col-12 col-md-9">
        <h2>The Joint</h2>
        <p>
          Las hamburguesas más jugosas preparadas con todo el cariño de La Gang
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
    </div>
  );
};

