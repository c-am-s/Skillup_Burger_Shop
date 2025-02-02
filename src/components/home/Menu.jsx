// import "../../styles/menu.scss";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <h1>Menú</h1>
      <div>
        <MenuCard
          temNum={1}
          burgerSrc={burger1}
          price={3.5}
          title="Cheese Burger"
          delay={0.1}
        />
        <MenuCard
          temNum={2}
          burgerSrc={burger2}
          price={5.3}
          title="Veggie Cheese Burger"
          delay={0.1}
        />
        <MenuCard
          temNum={3}
          burgerSrc={burger3}
          price={7.0}
          title="Cheese Burger + French Fries"
          delay={0.1}
        />
      </div>
    </section>
  );
}
