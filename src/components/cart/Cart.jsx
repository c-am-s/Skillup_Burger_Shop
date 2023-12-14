import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useState } from "react";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      {/* <input type="number" readOnly value={value} /> */}
      <span className="badge text-dark"> {value}</span>
      <button onClick={increment}>+</button>
    </div>
  </div>
);

export default function Cart() {
  const products = [
    {
      id: 1,
      title: "Cheese Burger",
      img: burger1,
      counter: 0,
      price: 3.5,
    },
    {
      id: 2,
      title: "Veggie Cheese Burger",
      img: burger2,
      counter: 0,
      price: 5,
    },
    {
      id: 3,
      title: "Cheese Burger + French Fries",
      img: burger3,
      counter: 0,
      price: 7,
    },
  ];

  const [counter, setCounter] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);

  const increment = ({ id, price }) => {
    const count = counter[id] ?? 0;
    const newTotalPrice = subTotal + price;

    setCounter((prevCounter) => ({ ...prevCounter, [id]: count + 1 }));
    setSubTotal(newTotalPrice);
    setTaxes(newTotalPrice * 0.18);
  };

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        {products.map((product) => (
          <CartItem
            key={product.id}
            title={product.title}
            img={product.img}
            increment={() => increment(product)}
            value={counter[product.id]}
            decrement={() => decrement(product)}
          />
        ))}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>{subTotal}€</p>
          </div>
          <div>
            <h4>IVA</h4>
            <p>{taxes}€</p>
          </div>
          <div>
            <h4>Gastos de envío</h4>
            <p>{1.5}€</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>{taxes + subTotal + 1.5}€</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
}
