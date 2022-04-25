import { Link } from "react-router-dom";
import { Container, Contant } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";

export const Menu = () => (
  <Container>
    <Contant className="d-flex justify-content-center mt-auto">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            style={{ border: 0 }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <AiOutlineMenu color="#ffffff" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/characters"
                >
                  Characters
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/comics"
                >
                  Comics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/creators"
                >
                  Creators
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/events"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/series"
                >
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/stories"
                >
                  Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Contant>
  </Container>
);
