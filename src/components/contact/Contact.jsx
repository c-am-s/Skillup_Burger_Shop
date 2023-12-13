// Write all the code here
import Popup from "reactjs-popup";

export default function Contact() {
  return (
    <div className="contact">
      <form action="#">
        <h2>Escríbenos</h2>
        <input type="text" placeholder="Esccribe tu nombre ✏️" />
        <input type="email" placeholder="Esccribe tu correo electrónico 📧" />
        <textarea
          type="text"
          placeholder="Dejanos un mensaje, tu opición o una declaración de amor 😉"
        />
        <Popup
          trigger={<button type="button">Enviar</button>}
          position={"bottom center"}
          on={"click"}
        >
          Gracias! Te responderemos lo antes posible ❤️
        </Popup>
      </form>
    </div>
  );
}
