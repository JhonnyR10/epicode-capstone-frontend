import logoImg from "../logoMP.png";

function FortniteStatView({ stat }) {
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

  console.log(stat);
  return (
    <span className="row justify-content-around">
      <div className="col-12">
        <div className=" row rounded p-2 my-2 cardUserGame">
          <div className="col-12 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3.885 9.629"
              className="trn-game-bar-title__icon me-1"
              data-v-9d6878b4=""
            >
              <path d="M3.883.016C3.713-.005.127-.005 0 .016v9.613h.106a10.284 10.284 0 0 1 1.125-.17 1.08 1.08 0 0 0 .467-.106c.106-.064.255 0 .361-.106V5.788a.078.078 0 0 1 .085-.085h.212a3.417 3.417 0 0 1 .806 0h.255c0-.658.042-1.316.042-1.995H2.186c-.085 0-.106-.021-.106-.106V2.286a.527.527 0 0 1 .021-.17h1.592c.063-.763.127-1.421.19-2.1Z"></path>
            </svg>
            Fortnite
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className=" row rounded p-2 my-4 mb-4 cardUserGame">
          <div className="col-12">
            <span className="fs-4"> {stat.usernameGioco}</span>
            <div className="d-flex flex-row  align-items-center">
              <div className="me-3">
                <img src={logoImg} alt="..." className="logoImgStat" />
              </div>
              <div className="me-3">
                <p className="mb-0">OverAll</p>
              </div>
              <div className="me-1 ">
                <p className="p2stat ">
                  {convertiMinutiInOreEMinuti(stat.overall.minutesPlayed)}
                </p>
              </div>
              <div className="ms-auto">
                <p className="mb-0">{stat.overall.matches} Total matches</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="containerStat">
            <div className="cardUser1">
              <p className="p1stat">{stat.overall.winRate}%</p>
              <p className="p2stat ">Win %</p>
            </div>
            <div className="cardUser1">
              {" "}
              <p className="p1stat">{stat.overall.wins}</p>
              <p className="p2stat">Win</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.overall.kd}</p>
              <p className="p2stat">K/D</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.overall.kills}</p>
              <p className="p2stat">Kills</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.overall.top10}</p>
              <p className="p2stat">Top 10</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.overall.top25}</p>
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
                  {convertiMinutiInOreEMinuti(stat.solo.minutesPlayed)}
                </p>
              </div>
              <div className="ms-auto">
                <p className="mb-0">{stat.solo.matches} Total matches</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="containerStat">
            <div className="cardUser1">
              <p className="p1stat">{stat.solo.winRate}%</p>
              <p className="p2stat">Win %</p>
            </div>
            <div className="cardUser1">
              {" "}
              <p className="p1stat">{stat.solo.wins}</p>
              <p className="p2stat">Win</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.solo.kd}</p>
              <p className="p2stat">K/D</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.solo.kills}</p>
              <p className="p2stat">Kills</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.solo.top10}</p>
              <p className="p2stat">Top 10</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.solo.top25}</p>
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
                  {convertiMinutiInOreEMinuti(stat.duo.minutesPlayed)}
                </p>
              </div>
              <div className="ms-auto">
                <p className="mb-0">{stat.duo.matches} Total matches</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="containerStat">
            <div className="cardUser1">
              <p className="p1stat">{stat.duo.winRate}%</p>
              <p className="p2stat">Win %</p>
            </div>
            <div className="cardUser1">
              {" "}
              <p className="p1stat">{stat.duo.wins}</p>
              <p className="p2stat">Win</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.duo.kd}</p>
              <p className="p2stat">K/D</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.duo.kills}</p>
              <p className="p2stat">Kills</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.duo.top10}</p>
              <p className="p2stat">Top 10</p>
            </div>
            <div className="cardUser1">
              <p className="p1stat">{stat.duo.top25}</p>
              <p className="p2stat">Top 25</p>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}
export default FortniteStatView;
