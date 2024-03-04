import { Modal } from "react-bootstrap";
import logoImg from "../logoMP.png";
import WinRateChart from "./WinRateChart";
import bronzo from "../data/lol_league/Rank=Bronze.png";
import silver from "../data/lol_league/Rank=Silver.png";
import iron from "../data/lol_league/Rank=Iron.png";
import gold from "../data/lol_league/Rank=Gold.png";
import emerald from "../data/lol_league/Rank=Emerald.png";
import diamond from "../data/lol_league/Rank=Diamond.png";
import platinum from "../data/lol_league/Rank=Platinum.png";
import master from "../data/lol_league/Rank=Master.png";
import granmaster from "../data/lol_league/Rank=Grandmaster.png";
import challenger from "../data/lol_league/Rank=Challenger.png";

const ModalDettagliLol = ({ show, onHide, user, getUtente }) => {
  const totalMatches = user.league ? user.league.wins + user.league.losses : 0;
  const winRate =
    totalMatches > 0 ? (user.league.wins / totalMatches) * 100 : 0;

  const getRankImage = (rank) => {
    switch (rank) {
      case "BRONZE":
        return bronzo;
      case "SILVER":
        return silver;
      case "IRON":
        return iron;
      case "GOLD":
        return gold;
      case "EMERALD":
        return emerald;
      case "DIAMOND":
        return diamond;
      case "PLATINUM":
        return platinum;
      case "MASTER":
        return master;
      case "GRANDMASTER":
        return granmaster;
      case "CHALLENGER":
        return challenger;
      default:
        return bronzo; // Default a bronzo se il valore di rank non corrisponde a nessun caso
    }
  };

  const rankImage = getRankImage(user.league ? user.league.tier : "");
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-xl"
      data-bs-theme="dark"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="pt-0">
        {user && user.league && (
          <span className="row justify-content-around">
            <div className="col-12">
              <div className=" row rounded p-2 my-2 cardUserGame">
                <div className="col-12 text-center">
                  <svg
                    data-v-9d6878b4=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="trn-game-bar-title__icon me-1"
                  >
                    <path d="M5.6 2a.458.458 0 0 0-.4.5.367.367 0 0 0 .1.3l1.3 1.7v15.2l-1.7 1.7a.377.377 0 0 0 .1.6h13.4a.758.758 0 0 0 .4-.2l2.3-2.3a.377.377 0 0 0-.1-.6.367.367 0 0 0-.3-.1h-9.5V2.5a.472.472 0 0 0-.5-.5ZM12 3.8v.9a8.237 8.237 0 0 1 8.2 8.2 7.955 7.955 0 0 1-1.7 5h1.1a8.9 8.9 0 0 0 1.5-5A9.133 9.133 0 0 0 12 3.8Zm0 1.8v12.3h5.3a7.479 7.479 0 0 0 2-5A7.341 7.341 0 0 0 12 5.6Zm-6.4.8a9.519 9.519 0 0 0-2.7 6v1.3a9.269 9.269 0 0 0 2.7 5.7V18a8.147 8.147 0 0 1-1.8-5.1 7.754 7.754 0 0 1 1.8-5.1V6.4Zm0 3a7.3 7.3 0 0 0-.9 3.5 6.756 6.756 0 0 0 .9 3.5v-7Z"></path>
                  </svg>
                  League of Legends
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className=" row rounded p-2 my-4 mb-4 cardUserGame">
                <div className="col-12">
                  <span className="fs-4"> {user.usernameGioco}</span>
                  <div className="d-flex flex-row  align-items-center">
                    <div className="me-3">
                      <img src={logoImg} alt="..." className="logoImgStat" />
                    </div>
                    <div className="me-3">
                      <p className="mb-0">Current Season</p>
                    </div>
                    <div className="me-1 "></div>
                    <div className="ms-auto">
                      {/* <p className="mb-0">
                  {stat.league.wins + stat.league.losses} Total matches
                </p> */}
                      <p>Total matches: {totalMatches}</p>
                      <p>Win Rate: {winRate.toFixed(2)}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="cardUser1">
                <div className="row align-items-center justify-content-around">
                  {/* <h3>Dettagli account</h3>{" "} */}
                  <div className="col-3">
                    <div className="row text-center justify-content-around">
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-person-fill"> SummonerName</i>
                        </div>
                        {user.league.summonerName}
                      </div>
                      <div className="row ">
                        <div className="col col-md-6 mb-2">
                          <div className="cardUserGame   rounded mb-2">
                            <i className="bi bi-trophy-fill"> Wins</i>
                          </div>

                          {user.league.wins}
                        </div>
                        <div className="col col-md-6 mb-2">
                          <div className="cardUserGame   rounded mb-2">
                            <i className="bi bi-x-circle-fill"> Losses</i>
                          </div>
                          {user.league.losses}
                        </div>
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame   rounded mb-2">
                          {user.league.hotStreak ? (
                            <i className="bi bi-fire text-danger">
                              {" "}
                              Hot Streak
                            </i>
                          ) : (
                            <i className="bi bi-fire"> Hot Streak</i>
                          )}
                        </div>

                        {user.league.hotStreak}
                      </div>
                      {user.league.veteran && (
                        <div className="col col-md-12 mb-2">
                          <div className="cardUserGame  rounded mb-2">
                            <i className="bi bi-crosshair"> Veteran</i>
                          </div>
                          {user.league.veteran}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="row text-center justify-content-center">
                      <div className="col-12">
                        {" "}
                        <img src={rankImage} alt=".." className="img-fluid" />
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-arrow-clockwise"> Queue</i>
                        </div>
                        {user.league.queueType}
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-bar-chart-line-fill"> Rank</i>
                        </div>
                        {user.league.rank}
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-award-fill "> League</i>
                        </div>
                        {user.league.tier}
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-trophy-fill"> LP</i>
                        </div>
                        {user.league.leaguePoints}
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <WinRateChart winRatePercentage={winRate} />
                  </div>
                </div>
              </div>
            </div>
          </span>
        )}
      </Modal.Body>{" "}
    </Modal>
  );
};
export default ModalDettagliLol;
