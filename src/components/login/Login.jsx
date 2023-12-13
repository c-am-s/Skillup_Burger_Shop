import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from "react-icons/fa";

export default function Login() {
  return (
    <main className="m-5 ">
      <section className="text-center my-5">
        <button className="btn rounded-pill mx-3 active" aria-current={true}>
          {" "}
          INICIAR SESIÓN
        </button>
        <button className="btn rounded-pill mx-3"> REGÍSTRATE</button>
      </section>
      <section>
        <article className="text-center">
          <h5> Inicar sesión con:</h5>
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
                id="exampleInputPassword1"
                placeholder="Escribe tu contraseña 🔒"
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
            <div className="text-end">
              <a href="">¿Olvidaste tu contraseña?</a>
            </div>

            <button type="submit" class="btn btn-primary">
              Entrar
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}
