import { Modal } from "react-bootstrap";
import logoImg from "../logoMP.png";

const ModalDettagliFortnite = ({ show, onHide, user, getUtente }) => {
  const convertiMinutiInOreEMinuti = (minuti) => {
    if (typeof minuti !== "number") {
      throw new Error("Il parametro deve essere un numero di minuti.");
    }

    const ore = Math.floor(minuti / 60);
    const restoMinuti = minuti % 60;

    const oreFormattate = ore < 10 ? `0${ore}` : ore;
    const minutiFormattati = restoMinuti < 10 ? `0${restoMinuti}` : restoMinuti;

    return `${oreFormattate}h ${minutiFormattati}m Play Time`;
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-lg"
      data-bs-theme="dark"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="pt-0">
        {user && (
          <span className="row justify-content-around">
            <div className="col-12">
              <div className=" row rounded p-2 my-4 mb-4 cardUserGame">
                <div className="col-12">
                  <span className="fs-4"> {user.usernameGioco}</span>
                  <div className="d-flex flex-row  align-items-center">
                    <div className="me-3">
                      <img src={logoImg} alt="..." className="logoImgStat" />
                    </div>
                    <div className="me-3">
                      <p className="mb-0">OverAll</p>
                    </div>
                    <div className="me-1 ">
                      <p className="p2stat ">
                        {convertiMinutiInOreEMinuti(user.overall.minutesPlayed)}
                      </p>
                    </div>
                    <div className="ms-auto">
                      <p className="mb-0">
                        {user.overall.matches} Total matches
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="containerStat">
                  <div className="cardUser1">
                    <p className="p1stat">{user.overall.winRate}%</p>
                    <p className="p2stat ">Win %</p>
                  </div>
                  <div className="cardUser1">
                    {" "}
                    <p className="p1stat">{user.overall.wins}</p>
                    <p className="p2stat">Win</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.overall.kd}</p>
                    <p className="p2stat">K/D</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.overall.kills}</p>
                    <p className="p2stat">Kills</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.overall.top10}</p>
                    <p className="p2stat">Top 10</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.overall.top25}</p>
                    <p className="p2stat">Top 25</p>
                  </div>
                </div>
              </div>
              <div className=" row  rounded p-2 my-4 mb-4 cardUserGame">
                <div className="col-12">
                  <div className="d-flex flex-row align-items-center">
                    <div className="me-3">
                      <img src={logoImg} alt="..." className="logoImgStat" />
                    </div>
                    <div className="me-3">
                      <p className="mb-0">Solo</p>
                    </div>
                    <div className="me-1">
                      <p className="mb-0 p2stat ">
                        {convertiMinutiInOreEMinuti(user.solo.minutesPlayed)}
                      </p>
                    </div>
                    <div className="ms-auto">
                      <p className="mb-0">{user.solo.matches} Total matches</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="containerStat">
                  <div className="cardUser1">
                    <p className="p1stat">{user.solo.winRate}%</p>
                    <p className="p2stat">Win %</p>
                  </div>
                  <div className="cardUser1">
                    {" "}
                    <p className="p1stat">{user.solo.wins}</p>
                    <p className="p2stat">Win</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.solo.kd}</p>
                    <p className="p2stat">K/D</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.solo.kills}</p>
                    <p className="p2stat">Kills</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.solo.top10}</p>
                    <p className="p2stat">Top 10</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.solo.top25}</p>
                    <p className="p2stat">Top 25</p>
                  </div>
                </div>
              </div>
              <div className=" row  rounded p-2 my-4 mb-4 cardUserGame">
                <div className="col-12">
                  <div className="d-flex flex-row align-items-center">
                    <div className="me-3">
                      <img src={logoImg} alt="..." className="logoImgStat" />
                    </div>
                    <div className="me-3">
                      <p className="mb-0">Duo</p>
                    </div>
                    <div className="me-1">
                      <p className="mb-0 p2stat ">
                        {convertiMinutiInOreEMinuti(user.duo.minutesPlayed)}
                      </p>
                    </div>
                    <div className="ms-auto">
                      <p className="mb-0">{user.duo.matches} Total matches</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="containerStat">
                  <div className="cardUser1">
                    <p className="p1stat">{user.duo.winRate}%</p>
                    <p className="p2stat">Win %</p>
                  </div>
                  <div className="cardUser1">
                    {" "}
                    <p className="p1stat">{user.duo.wins}</p>
                    <p className="p2stat">Win</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.duo.kd}</p>
                    <p className="p2stat">K/D</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.duo.kills}</p>
                    <p className="p2stat">Kills</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.duo.top10}</p>
                    <p className="p2stat">Top 10</p>
                  </div>
                  <div className="cardUser1">
                    <p className="p1stat">{user.duo.top25}</p>
                    <p className="p2stat">Top 25</p>
                  </div>
                </div>
              </div>
            </div>
          </span>
        )}
      </Modal.Body>
    </Modal>
  );
};
export default ModalDettagliFortnite;
