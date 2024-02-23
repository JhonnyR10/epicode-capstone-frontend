import { useNavigate } from "react-router";
import logoImg from "../logoMP.png";
import scrittaImg from "../scrittaMP.png";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import ProfileStat from "./ProfileStat";

function ProfilePage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const token = localStorage.getItem("authToken");
  const [mostraStatistiche, setMostraStatistiche] = useState("impostazioni");

  const handleToggleView = (impostazione) => {
    // Cambia lo stato per alternare tra impostazioni e statistiche
    setMostraStatistiche(impostazione);
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
        console.log("Dati dell'utente:", userData);
        setUserData(userData);
        // Gestisci i dati dell'utente come preferisci
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        // Gestisci l'errore
      });
  };
  useEffect(() => {
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
              <li className="nav-item nav-link" onClick={() => navigate("/me")}>
                Profilo
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="asd">
                  Match
                </a>
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
      <div className="container-fluid mb-5">
        <div className="row sezioneProfilo">
          <div className="col col-12 col-md-4 col-lg-3 col-xl-4 col-xxl-3  navbar-nav pe-0 pe-md-3">
            {userData ? (
              <ProfileCard utente={userData} setView={handleToggleView} />
            ) : (
              ""
            )}
          </div>
          <div className="col col-12 col-md-8 col-lg-9 col-xl-8 col-xxl-9 navbar-nav pe-0">
            {userData ? (
              <ProfileStat
                utente={userData}
                view={mostraStatistiche}
              ></ProfileStat>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default ProfilePage;
