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
import Footer from "./Footer";

const LandingPage = () => {
  const [listNews, setListNews] = useState();
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const location = useLocation();
  const [newsToShow, setNewsToShow] = useState(2);
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
  const getNews = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/news/getall`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((listNews) => {
        // console.log("Dati dell'utente:", listNews);
        setListNews(listNews.reverse());
        // Gestisci i dati dell'utente come preferisci
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        // Gestisci l'errore
      });
  };
  useEffect(() => {
    getNews();
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
                <li
                  className="nav-item nav-link "
                  onClick={() => navigate("/news")}
                >
                  News
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
      <span className="mb-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-2 col-xl-2">
              <div className="card text-bg-dark gameCard ">
                <img
                  src={fortniteImg}
                  className="card-img img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-2 col-xl-2">
              <div className="card text-bg-dark gameCard">
                <img src={lolImg} className="card-img img-fluid" alt="..." />
              </div>
            </div>
            <div className="col-2 col-xl-2">
              <div className="card scrittaCard">
                <img
                  src={scrittaImg}
                  className="card-img img-fluid"
                  alt="..."
                />
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

        <div className="container-fluid asjbajs">
          <div className="row sezioneCentrale">
            <div className="welM">
              <Card className="bg-section1">
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <h1 className="h1lp">
                    <Card.Text className="ms-3">
                      {" "}
                      Benvenuti su Match Play, dove il vostro spirito da gamer
                      incontra la possibilità di connettersi e crescere. Collega
                      tutti i tuoi account di gioco - PSN, Xbox, Epic e altri -
                      in un unico posto per tracciare le tue statistiche e
                      trovare compagni di squadra all'altezza della tua
                      passione. Preparati a trasformare il tuo modo di giocare!
                    </Card.Text>
                  </h1>
                </Card.Body>
              </Card>
            </div>

            <div className="mt-">
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
            {listNews && (
              <div className="welM1">
                <div className="my-5">
                  <Card className="bg-section1">
                    <Card.Body className="d-flex flex-column align-items-center text-center">
                      <h2 className="h1lp">
                        <Card.Text className="ms-3">
                          {" "}
                          Rimani sempre un passo avanti nel mondo del gaming con
                          la nostra sezione news. Scopri le ultime novità su
                          console, giochi e tendenze del settore. Dalle
                          recensioni all'avanguardia agli aggiornamenti
                          cruciali, abbiamo tutto quello che serve per
                          mantenerti informato e pronto a immergerti nelle
                          prossime avventure virtuali.
                        </Card.Text>
                      </h2>
                    </Card.Body>
                  </Card>
                </div>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4  justify-content-center g-4">
                  {(listNews.slice(0, newsToShow) ?? []).map((news, index) => (
                    <div className="col gameCardN cursorPFA" key={index}>
                      <div className="card h-100 cardUser">
                        <img
                          src={news.coverImageLink}
                          className="card-img-top"
                          alt="..."
                          onClick={() => navigate(`/news/${news.id}`)}
                        />
                        <div
                          className="card-body cardUser2 "
                          onClick={() => navigate(`/news/${news.id}`)}
                        >
                          <h5 className="card-title">{news.title}</h5>
                          <p className="card-text truncate-text ">
                            {news.text}
                          </p>
                        </div>
                        <div className="card-footer cardUser1 "></div>
                      </div>
                    </div>
                  ))}

                  {listNews && (
                    <div className="col gameCardN">
                      <div
                        className="card h-100 cardUser cursorPFA"
                        onClick={() => navigate(`/news`)}
                      >
                        <div className="card-body cardUser2 text-center">
                          <div className="d-flex h-100 justify-content-center align-items-center">
                            <i className="bi bi-arrow-right iconArrow"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </span>

      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
