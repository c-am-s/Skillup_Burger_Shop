import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";

export default function SingupForm() {
  return (
    <section>
      <article className="text-center">
        <h5> Registrate con:</h5>
        <div className="container ">
          <a href="" className="m-3">
            <FaFacebookF />
          </a>
          <a href="" className="m-3">
            <FaTwitter />
          </a>
          <a href="" className="m-3">
            <FaGithub />
          </a>
          <a href="" className="m-3">
            <FaGoogle />
          </a>
        </div>
      </article>
      <article>
        <h5 className="text-center my-3">o con tu correo electrónico: </h5>
        <form>
          <div class="mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Nombre"
            />
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Apellidos"
            />
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Escribe tu correo electrónico 📧"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Escribe tu contraseña 🔒"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="repassword"
              placeholder="Repite tu contraseña 🔒"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Recuérdame
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Registrate
          </button>
        </form>
      </article>
    </section>
  );
}
