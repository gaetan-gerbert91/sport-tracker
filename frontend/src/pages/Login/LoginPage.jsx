import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-hero">
        <h2>SPORT TRACKER</h2>

        <div>
          <h1>
            Reprenez le contrôle
            <br />
            de vos performances.
          </h1>

          <p>
            Vos activités, vos records et vos compétitions réunis au même endroit.
          </p>
        </div>
      </section>

      <section className="login-content">
        <div className="login-card">
          <h1>Connexion</h1>
          <p>Accédez à votre tableau de bord</p>

          <form className="login-form">
            <label htmlFor="email">Adresse e-mail</label>
            <input id="email" type="email" placeholder="Votre adresse e-mail" />

            <label htmlFor="password">Mot de passe</label>
            <input id="password" type="password" placeholder="Votre mot de passe" />

            <Link className="forgot-password" to="#">
              Mot de passe oublié ?
            </Link>
            
            <button className="login-button" type="submit">
             Se connecter
            </button>
          </form>

          <p className="register-text">Pas encore de compte ?</p>

          <Link className="register-button" to="/register">
            Créer un compte
          </Link>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
