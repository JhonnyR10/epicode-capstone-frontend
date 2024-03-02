import { Card } from "react-bootstrap";
import RegisterLoginCard from "./RegisterLoginCard";
import { useEffect, useState } from "react";
import firstImg from "../IMG2.jpg";
import fortniteImg from "../fortnite-2024.png";
import lolImg from "../league-of-legends.jpg";
import csgoImg from "../cs2-2.jpg";
import apexImg from "../apex.jpg";
import logoImg from "../logoMP.png";
import scrittaImg from "../scrittaMP.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useLocation, useNavigate } from "react-router";
import ProfileCard from "./ProfileCard";
import ProfileCardLP from "./ProfileCardLP";

function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const [scrollingNav, setScrollingNav] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const handleScrollNav = () => {
    setScrollingNav(true);

    clearTimeout(scrollTimeout);

    setScrollTimeout(
      setTimeout(() => {
        setScrollingNav(false);
      }, 600) // Puoi regolare il timeout in base alle tue esigenze
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollNav);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScrollNav);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTimeout]);

  return (
    <div>
      <header
        className={`sticky-header ${scrolling ? "scrolled" : ""}`}
        style={{
          backgroundImage: `url(${firstImg})`,
        }}
      >
        <nav
          id="navbar1"
          //   className="navbar navbar-expand-lg"
          className={`navbar navbar-expand-lg ${scrollingNav ? "hidden" : ""}`}
        >
          <div className="container-fluid ">
            <ul className="navbar-nav mb-2 mb-lg-0  navSpan rounded-bottom">
              <li className="nav-item" onClick={() => navigate("/")}>
                <span className="nav-link">
                  <img src={logoImg} alt="..." className="logoImg" />
                </span>
              </li>
            </ul>
            <button
              className="navbar-toggler hamburger rounded-bottom border-0 mb-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="">
                <i className="nav-link bi bi-list text-white iconaH"></i>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0  navSpan rounded-bottom">
                <li
                  className="nav-item nav-link"
                  onClick={() => navigate("/me")}
                >
                  {/* <a
                    className="nav-link active"
                    aria-current="page"
                    href=".."
                    onClick={() => navigate("/profile")}
                  > */}
                  Profilo
                  {/* </a> */}
                </li>
                <li
                  className="nav-item nav-link "
                  onClick={() => navigate("/match")}
                >
                  Match
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="asd">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="asd">
                    Forum
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="asd">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <i className="bi bi-door-closed-fill nav-link"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-2 col-xl-2">
            <div className="card text-bg-dark gameCard ">
              <img src={fortniteImg} className="card-img img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-2 col-xl-2">
            <div className="card text-bg-dark gameCard">
              <img src={lolImg} className="card-img img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-2 col-xl-2">
            <div className="card scrittaCard">
              <img src={scrittaImg} className="card-img img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-2 col-xl-2">
            <div className="card text-bg-dark gameCard">
              <img src={csgoImg} className="card-img img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-2 col-xl-2 ">
            <div className="card text-bg-dark gameCard">
              <img src={apexImg} className="card-img img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row sezioneCentrale">
          <div className="mb-3">
            <Card className="bg-section1">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Card.Title>Sezione 1</Card.Title>
                <Card.Text className="ms-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mb-3">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <span className="">
                  <img src={logoImg} alt="..." className="w-50 h-50" />
                </span>
              </div>
              <div
                className="col-6 d-flex justify-content-center "
                style={{ textAlign: "center" }}
              >
                {localStorage.getItem("authToken") ? (
                  <ProfileCardLP></ProfileCardLP>
                ) : (
                  <RegisterLoginCard />
                )}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>Sezione 3</Card.Title>
                <Card.Text>Contenuto della sezione 3.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
