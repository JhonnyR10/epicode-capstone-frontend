import { useNavigate, useParams } from "react-router";
import logoImg from "../logoMP.png";
import scrittaImg from "../scrittaMP.png";
import Footer from "./Footer";
import NewsViewAll from "./NewsViewAll";
import { useEffect, useState } from "react";

const NewsView = () => {
  const token = localStorage.getItem("authToken");
  let params = useParams();
  const navigate = useNavigate();
  const [news, setListNews] = useState();

  const getNews = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/news/getbyid/${params.id}`, {
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
        console.log("Dati dell'utente:", listNews);
        setListNews(listNews);
        // Gestisci i dati dell'utente come preferisci
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        // Gestisci l'errore
      });
  };
  const logoutFunction = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  useEffect(() => {
    getNews();
  }, [params]);
  return (
    <div className="">
      <nav id="navbar1" className="navbar navbar-expand-lg ">
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  navSpan rounded-bottom">
              <li
                className="nav-item nav-link"
                onClick={() => (token ? navigate("/me") : null)}
              >
                Profilo
              </li>
              <li
                className="nav-item nav-link "
                oonClick={() => (token ? navigate("/match") : null)}
              >
                Match
              </li>
              <li
                className="nav-item nav-link "
                onClick={() => navigate("/news")}
              >
                News
              </li>

              <li
                className="nav-item nav-link "
                onClick={() => (token ? navigate("/shop") : null)}
              >
                Shop
              </li>
              <li className="nav-item">
                <span className="" onClick={logoutFunction}>
                  <i className="bi bi-door-closed-fill nav-link"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-2 col-xl-2"></div>
          <div className="col-2 col-xl-2"></div>
          <div className="col-2 col-xl-2">
            <div className="card scrittaCard">
              <img src={scrittaImg} className="card-img img-fluid" alt="..." />
            </div>
          </div>
          <div className="col-2 col-xl-2"></div>
          <div className="col-2 col-xl-2 "></div>
        </div>
      </div>
      <div className=" container-fluid sezioneNewsView">
        <div className="row justify-content-center">
          <div className="col col-8">
            {news && (
              <div className="col  cursorPFA">
                <div
                  className="card h-100 cardUser"
                  onClick={() => navigate(`/news/${news.id}`)}
                >
                  <img
                    src={news.coverImageLink}
                    className="card-img-top hImgCard"
                    alt="..."
                  />
                  <div className="card-body cardUser2 ">
                    <h1 className="card-title mt-5 ">{news.title}</h1>
                    <p className="p2stat mb-5">
                      <i className="bi bi-clock-history">
                        Tempo di lettura: {news.readingTimeMinutes} min
                      </i>
                    </p>
                    {/* <p className="card-text mb-5 ">{news.text}</p> */}
                    <p className="card-text mb-5 ">
                      {news.text.split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </p>
                  </div>
                  <div className="card-footer cardUser1 ">
                    <div className="d-flex justify-content-between">
                      <small className="text-white ms-3">
                        Last updated {news.creationDate}
                      </small>
                      <small className="text-white me-3">
                        <i className="bi bi-pencil-square">
                          {news.author.nome} {news.author.cognome}
                        </i>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col col-4">
            <NewsViewAll></NewsViewAll>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default NewsView;
