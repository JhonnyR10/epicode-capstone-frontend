import { useNavigate } from "react-router";
import logoImg from "../logoMP.png";
import scrittaImg from "../scrittaMP.png";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ModalAddNews from "./ModalAddNews";
import ModalEditNews from "./ModalEditNews";
import ButtonDeleteNews from "./ButtonDeleteNews";

const NewsPage = () => {
  const [listNews, setListNews] = useState();
  const [userData, setUserData] = useState();
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const [show5, setShow5] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);
  const [newsToShow, setNewsToShow] = useState(16);

  // ...

  const handleShow5 = (news) => {
    setCurrentNews(news);
    setShow5(true);
  };

  const handleClose5 = () => {
    setCurrentNews(null);
    setShow5(false);
  };
  const handleShowMoreNews = () => {
    setNewsToShow((prevNewsToShow) => prevNewsToShow + 16);
  };
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

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
        console.log("Dati dell'utente:", listNews);
        setListNews(listNews.reverse());
        // Gestisci i dati dell'utente come preferisci
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        // Gestisci l'errore
      });
  };
  const getUtente = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/user/profile`, {
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
      .then((userData) => {
        console.log("ciaociao");
        console.log("Dati dell'utente:", userData);
        setUserData(userData);
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
    getUtente();
  }, []);
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
                onClick={() => (token ? navigate("/match") : null)}
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
      {listNews && (
        <div className="container-fluid mb-5 sezioneNews ">
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
                    <p className="card-text truncate-text ">{news.text}</p>
                  </div>
                  <div className="card-footer cardUser1 ">
                    <div className="d-flex justify-content-between">
                      <small className="text-white ">
                        Last updated {news.creationDate}
                      </small>
                      {userData && userData.role === "ADMIN" && news && (
                        <>
                          <i
                            className="bi bi-pencil-fill cursorPFA"
                            onClick={() => {
                              handleShow5(news);
                            }}
                          ></i>

                          <ButtonDeleteNews
                            user={userData}
                            news={news}
                            getNews={getNews}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {userData && userData.role === "ADMIN" && (
              <div className="col gameCardN">
                <div className="card h-100 cardUser">
                  <div className="card-body cardUser2 text-center  ">
                    <div className="d-flex h-100 justify-content-center align-items-center">
                      <i
                        className="bi bi-plus-lg fs-1 cursorPFA"
                        onClick={() => {
                          handleShow4();
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {listNews && listNews.length > newsToShow && (
              <div className="col gameCardN">
                <div
                  className="card h-100 cardUser cursorPFA"
                  onClick={handleShowMoreNews}
                >
                  <div className="card-body cardUser2 text-center">
                    <div className="d-flex h-100 justify-content-center align-items-center">
                      <i className="bi bi-book-half"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer></Footer>

      <ModalAddNews
        show={show4}
        onHide={handleClose4}
        user={userData}
        getNews={getNews}
      />
      <ModalEditNews
        show={show5}
        onHide={handleClose5}
        user={userData}
        news={currentNews}
        getNews={getNews}
      />
    </div>
  );
};
export default NewsPage;
