import React, { useState } from "react";
import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
  };

  return (
    <main className="m-5">
      <section className="text-center my-5">
        <button
          className={`btn rounded-pill mx-3 ${showLoginForm ? "active" : ""}`}
          onClick={handleLoginClick}
        >
          INICIAR SESIÓN
        </button>
        <button
          className={`btn rounded-pill mx-3 ${showLoginForm ? "" : "active"}`}
          onClick={handleSignupClick}
        >
          REGÍSTRATE
        </button>
      </section>

      {showLoginForm ? <LoginForm /> : <SignupForm />}
    </main>
  );
}
