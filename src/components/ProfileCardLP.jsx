import { useEffect, useState } from "react";
import logoImg from "../logoMP.png";
import { useNavigate } from "react-router";

function ProfileCardLP() {
  const navigate = useNavigate();
  const [utente, setUtente] = useState();
  const token = localStorage.getItem("authToken");
  const logoutFunction = () => {
    localStorage.removeItem("authToken");
    navigate("/");
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
        setUtente(userData);
        // Gestisci i dati dell'utente come preferisci
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        // Gestisci l'errore
      });
  };
  useEffect(() => {
    getUtente();
  }, [token]);

  return utente ? (
    <div className="cardUser w-75">
      <div className=" row justify-content-center">
        <div className="text-center my-3">
          <img src={logoImg} alt="..." className="logoImg" />
        </div>
        <div className="row cardUser1 w-75 align-items-center justify-content-center mb-3">
          <div className="col col-md-12 text-center align-content-center my-md-2">
            <img
              src={utente.avatar}
              alt="user_avatar"
              className="rounded imgImp"
            />
          </div>
          <div className="col col-md-12 text-center">
            {/* {utente.nome} {utente.cognome} */}
            GiovanniPaolo Secondigliano
            <br />
            <span className="fs-6" onClick={logoutFunction}>
              <i className="bi bi-door-closed-fill nav-link"> Logout</i>
            </span>
          </div>
        </div>
        <div className="text-center gold">Username: {utente.username} </div>
      </div>
    </div>
  ) : (
    "sdgf"
  );
}

export default ProfileCardLP;
