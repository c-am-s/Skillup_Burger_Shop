import Menu from "./Menu"

// Write all the code here
export default function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <h1>THE JOINT </h1>
          <p>Las mejores hamburguesas :) </p>
        </div>
        <a href="/menu">Explora el Menu</a>
      </div>

      <div>
        <Menu />
      </div>
    </div>
  );
}
