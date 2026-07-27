import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>Bienvenue dans Sport Tracker.</p>

      <Link to="/login">Se déconnecter</Link>
    </main>
  );
}

export default DashboardPage;