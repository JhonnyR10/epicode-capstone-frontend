import { useNavigate } from "react-router";
import logoImg from "../logoMP.png";
import scrittaImg from "../scrittaMP.png";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import ProfileStat from "./ProfileStat";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const token = localStorage.getItem("authToken");
  const [mostraStatistiche, setMostraStatistiche] = useState("impostazioni");
  const [userStat, setUserStat] = useState();

  const handleToggleView = (impostazione) => {
    setMostraStatistiche(impostazione);
  };
  const handleToggleStat = (stat) => {
    setUserStat(stat);
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
    getUtente();
  }, [userStat]);

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

              <li
                className="nav-item nav-link "
                onClick={() => navigate("/shop")}
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
      <div className="container-fluid mb-5">
        <div className="row sezioneProfilo">
          <div className="col col-12 col-md-4 col-lg-3 col-xl-4 col-xxl-3  navbar-nav pe-0 pe-md-3">
            {userData ? (
              <ProfileCard
                utente={userData}
                setView={handleToggleView}
                setStat={handleToggleStat}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col col-12 col-md-8 col-lg-9 col-xl-8 col-xxl-9 navbar-nav pe-0">
            {userData ? (
              <ProfileStat
                utente={userData}
                view={mostraStatistiche}
                stat={userStat}
                getUtente={getUtente}
                setView={handleToggleView}
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
};
export default ProfilePage;
