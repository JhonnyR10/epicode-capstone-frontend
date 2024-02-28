import { useState } from "react";
import logoImg from "../logoMP.png";
import ModalEditProfile from "./ModalEditProfile";
import FormImgProfilo from "./FormImgProfilo";
import ButtonDeleteProfile from "./ButtonDeleteProfile";
import ModalAddGameAccount from "./ModalAddGameAccount";
import ButtonDeleteStat from "./ButtonDeleteStat";
import FortniteStatView from "./FortniteStatView";
import LolStatView from "./LolStatView";

function ProfileStat({ utente, view, getUtente, stat }) {
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  return (
    <div className=" cardUser row justify-content-center">
      <div className="row   align-items-center justify-content-center ">
        {view === "impostazioni" ? (
          <span className="row justify-content-around">
            <div className="col-12">
              <div className=" row rounded p-2 my-2 cardUserGame">
                <div className="col-12 text-center">
                  <i className="bi bi-gear-fill"> Impostazioni</i>
                </div>
                {/* <div className="col-6">Impostazioni</div> */}
              </div>
            </div>
            <div className="col-12 col-xxl-5">
              <div className=" row rounded p-2 my-2 cardUserGame">
                <div className="col-12 text-center">
                  <i className="bi bi-gear-fill"> Profilo</i>
                </div>
              </div>
              <div className="row cardUser1 align-items-center justify-content-center mb-3 wCard">
                <div className="row ">
                  <div className="col col-md-6 text-center align-self-center">
                    <div>
                      <div>
                        <img
                          src={utente.avatar}
                          alt="user_avatar"
                          className="rounded imgImp2"
                        />
                      </div>
                      <div>
                        <button
                          className="border-0 mt-2 rounded btnImg cardUserGame"
                          onClick={handleShow5}
                        >
                          Cambia Immagine
                        </button>
                      </div>
                      {show5 ? (
                        <FormImgProfilo
                          user={utente}
                          getUtente={getUtente}
                          show={show5}
                          onHide={handleClose5}
                        ></FormImgProfilo>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col col-md-6 my-3">
                    <div className="row">
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-person-fill"> Nome</i>
                        </div>
                        {utente.nome}
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-person-fill"> Cognome</i>
                        </div>

                        {utente.cognome}
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <img
                            src={logoImg}
                            alt="..."
                            className="logoImgStat"
                          />{" "}
                          Username
                        </div>
                        {utente.username}
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-envelope-fill"> Email</i>
                        </div>

                        {utente.email}
                      </div>
                      <div className="col col-md-12 mb-2">
                        <div className="cardUserGame  rounded mb-2">
                          <i className="bi bi-key"> Password</i>
                        </div>
                        ********
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col col-6" onClick={handleShow4}>
                    <button className="border-0 mt-2 rounded btnEdit cardUserGame">
                      <i className="bi bi-pencil-fill"> Modifica Profilo</i>
                    </button>
                  </div>
                  <div className="col col-6">
                    {/* <button className="border-0 mt-2 rounded btnEdit cardUserGame">
                      <i className="bi bi-trash3-fill text-danger">
                        {" "}
                        Elimina Profilo
                      </i>
                    </button> */}
                    <ButtonDeleteProfile user={utente}></ButtonDeleteProfile>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xxl-5">
              <div className=" row rounded p-2 my-2 cardUserGame">
                <div className="col-12 text-center">
                  <i className="bi bi-gear-fill"> Impostazioni</i>
                </div>
              </div>
              <div className="row cardUser1 mb-3 wCard">
                <div className=" col-12">
                  <p className="cardUserGame  rounded my-3 mb-2">
                    Game's Profile
                  </p>
                </div>
                <div className="col col-md-12 d-flex justify-content-center">
                  <div className="row w-75 align-items-center justify-content-center my-3">
                    {utente.statisticheGiochi.map((statistica) => (
                      <div
                        key={statistica.idStatisticaGioco}
                        className=" row rounded p-2 my-2 cardUserGame justify-content-between"
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
                        <div className="col-auto">
                          <ButtonDeleteStat
                            user={utente}
                            statistica={statistica}
                            getUtente={getUtente}
                          ></ButtonDeleteStat>
                        </div>
                      </div>
                    ))}
                    <div
                      className=" row rounded p-2 my-2 cardUserGame"
                      onClick={setShow6}
                    >
                      <div className="col-1">
                        <i className="bi bi-plus"></i>
                      </div>
                      <div className="col-auto">Aggiungi Account</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        ) : view === "Fortnite" ? (
          <FortniteStatView stat={stat} />
        ) : (
          <LolStatView stat={stat} />
        )}
      </div>
      <ModalEditProfile
        show={show4}
        onHide={handleClose4}
        user={utente}
        getUtente={getUtente}
      />
      <ModalAddGameAccount
        show={show6}
        onHide={handleClose6}
        user={utente}
        getUtente={getUtente}
      ></ModalAddGameAccount>
    </div>
  );
}
export default ProfileStat;
