import logoImg from "../logoMP.png";

function ProfileStat({ utente, view }) {
  console.log(view);

  return (
    <div className="cardUser row justify-content-center">
      <div className="row cardUser1  align-items-center justify-content-center ">
        {view === "impostazioni" ? (
          <span className="row">
            <div className="col-12">
              <div className=" row rounded p-2 my-2 cardUserGame">
                <div className="col-12 text-center">
                  <i className="bi bi-gear-fill"> Impostazioni</i>
                </div>
                {/* <div className="col-6">Impostazioni</div> */}
              </div>
            </div>
            <div className="col-6">
              <div className=" row rounded p-2 my-2 cardUserGame">
                <div className="col-6 text-end">
                  <i className="bi bi-gear-fill"></i>
                </div>
                <div className="col-6">Profilo</div>
              </div>
              <div className="row cardUser1 align-items-center justify-content-center mb-3">
                <div className="col col-md-12 text-center align-content-center my-md-2">
                  <img
                    src={utente.avatar}
                    alt="user_avatar"
                    className="rounded"
                  />
                </div>
                <div className="col col-md-12 mb-2">
                  <i class="bi bi-person-fill"> Nome</i>
                  <br />
                  {utente.nome}
                </div>
                <div className="col col-md-12 mb-2">
                  <i class="bi bi-person-fill"> Cognome</i>
                  <br />
                  {utente.cognome}
                </div>
                <div className="col col-md-12 mb-2">
                  <img src={logoImg} alt="..." className="logoImgStat" />{" "}
                  Username
                  <br />
                  {utente.username}
                </div>
                <div className="col col-md-12 mb-2">
                  <i class="bi bi-envelope-fill"> Email</i>
                  <br />
                  {utente.email}
                </div>
                <div className="col col-md-12 mb-2">
                  <i class="bi bi-key"></i>
                  <br />
                  {utente.password}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className=" row rounded p-2 my-2 cardUserGame">
                <div className="col-6 text-end">
                  <i className="bi bi-gear-fill"></i>
                </div>
                <div className="col-6">Impostazioni</div>
              </div>
            </div>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default ProfileStat;
