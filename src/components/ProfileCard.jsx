import logoImg from "../logoMP.png";
import { useLocation, useNavigate } from "react-router";

const ProfileCard = ({ utente, setView, setStat }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const logoutFunction = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  return (
    <div className="cardUser">
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
            {utente.nome} {utente.cognome}
            <br />{" "}
            {location.pathname === "/me" ? (
              <span className="" onClick={logoutFunction}>
                <i className="bi bi-door-closed-fill nav-link"> Logout</i>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="text-center gold">Username: {utente.username} </div>
        <div className="row cardUser1 w-75 align-items-center justify-content-center my-3">
          {utente.statisticheGiochi.map((statistica) => (
            <div
              key={statistica.idStatisticaGioco}
              className=" row rounded p-2 my-2 cardUserGame cursorPFA"
              onClick={() => {
                setView(statistica.nomeGioco);
                setStat(statistica);
              }}
            >
              {statistica.nomeGioco === "Fortnite" ? (
                <div className="col-1 ps-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3.885 9.629"
                    className="trn-game-bar-title__icon"
                    data-v-9d6878b4=""
                  >
                    <path d="M3.883.016C3.713-.005.127-.005 0 .016v9.613h.106a10.284 10.284 0 0 1 1.125-.17 1.08 1.08 0 0 0 .467-.106c.106-.064.255 0 .361-.106V5.788a.078.078 0 0 1 .085-.085h.212a3.417 3.417 0 0 1 .806 0h.255c0-.658.042-1.316.042-1.995H2.186c-.085 0-.106-.021-.106-.106V2.286a.527.527 0 0 1 .021-.17h1.592c.063-.763.127-1.421.19-2.1Z"></path>
                  </svg>
                </div>
              ) : (
                <div className="col-1">
                  <svg
                    data-v-9d6878b4=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="trn-game-bar-title__icon"
                  >
                    <path d="M5.6 2a.458.458 0 0 0-.4.5.367.367 0 0 0 .1.3l1.3 1.7v15.2l-1.7 1.7a.377.377 0 0 0 .1.6h13.4a.758.758 0 0 0 .4-.2l2.3-2.3a.377.377 0 0 0-.1-.6.367.367 0 0 0-.3-.1h-9.5V2.5a.472.472 0 0 0-.5-.5ZM12 3.8v.9a8.237 8.237 0 0 1 8.2 8.2 7.955 7.955 0 0 1-1.7 5h1.1a8.9 8.9 0 0 0 1.5-5A9.133 9.133 0 0 0 12 3.8Zm0 1.8v12.3h5.3a7.479 7.479 0 0 0 2-5A7.341 7.341 0 0 0 12 5.6Zm-6.4.8a9.519 9.519 0 0 0-2.7 6v1.3a9.269 9.269 0 0 0 2.7 5.7V18a8.147 8.147 0 0 1-1.8-5.1 7.754 7.754 0 0 1 1.8-5.1V6.4Zm0 3a7.3 7.3 0 0 0-.9 3.5 6.756 6.756 0 0 0 .9 3.5v-7Z"></path>
                  </svg>
                </div>
              )}
              <div className="col-auto">
                {statistica.usernameGioco || "N/A"}
              </div>
            </div>
          ))}
          {location.pathname === "/me" ? (
            <>
              <div
                className=" row rounded p-2 my-2 cardUserGame cursorPFA"
                onClick={() => setView("Match")}
              >
                <div className="col-1">
                  <i className="bi bi-controller"></i>
                </div>
                <div className="col-auto">Match</div>
              </div>
              <div
                className=" row rounded p-2 my-2 cardUserGame cursorPFA"
                onClick={() => setView("impostazioni")}
              >
                <div className="col-1">
                  <i className="bi bi-gear-fill"></i>
                </div>
                <div className="col-auto">Impostazioni</div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
