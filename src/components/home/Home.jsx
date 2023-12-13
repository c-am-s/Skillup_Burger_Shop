import Menu from "./Menu";
import Founder from "./Founder";
import { useState } from "react";

// Write all the code here
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="home">
        <div>
          <h1>Burger Shop</h1>
          <p>Las burgers más sabrosas del barrio</p>
        </div>
        <a
          href="/menu"
          className=""
          data-bs-toggle="collapse"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={handleClick}
        >
          Explora el Menu
        </a>
      </div>

      <div>
        <Menu />
      </div>
      <div>
        <Founder />
      </div>
    </div>
  );
}
