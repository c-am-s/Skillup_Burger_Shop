import React from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";

export default function Shipping() {
  return (
    <section className="shipping">
      <main>
        <h1>Detalles de envío</h1>
        <form>
          <div>
            <label>Dirección</label>
            <input
              type="text"
              placeholder="A dónde quieres recibir este pedido lleno de placer🤤?"
            />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" placeholder="Ciudad" />
          </div>
          <div>
            <label>País</label>

            <select>
              <option value="">Selecciona un país</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Provincia</label>
            <select>
              <option value="">Selecciona una provincia</option>
              {State &&
                State.getStatesOfCountry("ES").map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label>Código postal</label>
            <input type="number" placeholder="Añade tu codigo postal 🏘️" />
          </div>

          <div>
            <label>Teléfono </label>
            <input type="number" placeholder="+00 - 00000000 📞" />
          </div>
          <Popup
            trigger={<button className="btn btn-dark rounded-pill w-50 mt-4" type="button">Confirmar pedido</button>}
            position="right center"
          >
            <div
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                right: "100%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Order Placed
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
}
