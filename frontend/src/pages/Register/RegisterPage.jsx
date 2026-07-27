import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <main>
      <h1>Inscription</h1>

      <form>
        <label htmlFor="firstname">Prénom</label>
        <input id="firstname" type="text" />

        <label htmlFor="lastname">Nom</label>
        <input id="lastname" type="text" />

        <label htmlFor="email">Adresse e-mail</label>
        <input id="email" type="email" />

        <label htmlFor="password">Mot de passe</label>
        <input id="password" type="password" />
      </form>

      <Link to="/login">Déjà inscrit ? Se connecter</Link>
    </main>
  );
}

export default RegisterPage;