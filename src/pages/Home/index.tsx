import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h1>Desafio Github API</h1>
        <h3>Bootcamp Spring React - DevSuperior</h3>
      </div>
      <Link to="/search">
        <div className="home-btn-container base-btn-container">
          <button className="btn-primary">
            <h6>Começar</h6>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
