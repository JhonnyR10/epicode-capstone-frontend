import React from "react";
import logoImg from "../logoMP.png";
import logovip from "../LOGO_FUOCO.png";
import { useNavigate } from "react-router";
import ButtonDeleteMatch from "./ButtonDeleteMatch";

const MatchView = ({ stat, utente, getUtente, setView }) => {
  const navigate = useNavigate();
  return (
    <span className="row justify-content-around">
      <div className="col-12">
        <div className=" row rounded p-2 my-2 cardUserGame">
          <div className="col-12 text-center">
            <img src={logoImg} alt="..." className="logoImgStat me-2" />I tuoi
            Match
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="row rounded p-2 my-4 mb-4 cardUserGame">
          <div className="col-12">
            <span className="fs-4"> </span>
            <div className="table-responsive ">
              {utente && utente.matches && utente.matches.length > 0 ? (
                <table className="table table-bg table-rounded my-2">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th></th>
                      <th></th>
                      <th>Dettagli</th>
                      <th>Elimina</th>
                    </tr>
                  </thead>
                  <tbody>
                    {utente.matches.map((match, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            {match.vip ? (
                              <img
                                src={logovip}
                                alt="..."
                                className="logoImgStat me-2"
                              />
                            ) : (
                              <img
                                src={logoImg}
                                alt="..."
                                className="logoImgStat me-2"
                              />
                            )}
                            <p className="mb-0">{match.username}</p>
                          </div>
                        </td>
                        {match.statisticheGiochi.length > 1 &&
                          match.statisticheGiochi
                            .slice(0, 2)
                            .map((statistica, statIndex) => (
                              <React.Fragment key={statIndex}>
                                <td>{statistica.usernameGioco || "N/A"}</td>
                              </React.Fragment>
                            ))}
                        {match.statisticheGiochi.length <= 1 &&
                          match.statisticheGiochi
                            .slice(0, 2)
                            .map((statistica, statIndex) => (
                              <React.Fragment key={statIndex}>
                                <td>{statistica.usernameGioco || "N/A"}</td>
                                <td>"N/A"</td>
                              </React.Fragment>
                            ))}

                        <td>
                          {" "}
                          <i
                            className="bi bi-search cursorPFA"
                            onClick={() => navigate(`/user/${match.id}/1`)}
                          ></i>
                        </td>
                        <td>
                          <ButtonDeleteMatch
                            user={utente}
                            match={match}
                            getUtente={getUtente}
                          ></ButtonDeleteMatch>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Nessun match disponibile.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};
export default MatchView;

//  <div className="col-12">
//    <div className=" row rounded p-2 my-4 mb-4 cardUserGame">
//      <div className="col-12">
//        <span className="fs-4"> {}</span>
//        <div className="d-flex flex-column  align-items-center">
//          {utente && utente.matches && utente.matches.length > 0 ? (
//            utente.matches.map((match, index) => (
//              <div key={index} className="col-12 cardUser1 rounded mb-2">
//                <div className="row">
//                  <div className="col me-3">
//                    <div className="d-flex">
//                      <img
//                        src={logoImg}
//                        alt="..."
//                        className="logoImgStat me-2"
//                      />
//                      <p className="mb-0">{match.username}</p>
//                    </div>
//                  </div>
//                  <div className="col me-3"></div>
//                  <div className="col me-1 "></div>
//                  <div className="col ms-auto">
//                    {/* Alcune informazioni sul match */}
//                  </div>
//                </div>
//              </div>
//            ))
//          ) : (
//            <p>Nessun match disponibile.</p>
//          )}
//        </div>
//      </div>
//    </div>
//  </div>;
