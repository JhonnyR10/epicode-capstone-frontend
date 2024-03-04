import { useNavigate } from "react-router";
import logoImg from "../logoMP.png";
import scrittaImg from "../scrittaMP.png";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import ProfileStat from "./ProfileStat";
import ProfileMatch from "./ProfileMatch";
import ModalDettagliFortnite from "./ModalDettagliFortnite";
import ModalDettagliLol from "./ModalDettagliLol";
import IconAddMatch from "./IconAddMatch";

// const MatchPage = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState();
//   const [listUser, setListUser] = useState();
//   const token = localStorage.getItem("authToken");
//   const [mostraStatistiche, setMostraStatistiche] = useState("");
//   const [userStat, setUserStat] = useState();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isClicked, setIsClicked] = useState(true);

//   const [show7, setShow7] = useState(false);
//   const handleClose7 = () => setShow7(false);
//   const handleShow7 = () => setShow7(true);
//   const [show8, setShow8] = useState(false);
//   const handleClose8 = () => setShow8(false);
//   const handleShow8 = () => setShow8(true);

//   const toggleClicked = () => {
//     setIsClicked(!isClicked);
//   };
//   const handleCurrentIndex = () => {
//     setCurrentIndex(currentIndex + 1);
//   };
//   const handleToggleView = (impostazione) => {
//     setMostraStatistiche(impostazione);
//   };
//   const handleToggleStat = (stat) => {
//     setUserStat(stat);
//   };
//   const getUtente = () => {
//     fetch(`${process.env.REACT_APP_BACKEND}/user/profile`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Errore nella richiesta");
//         }
//         return response.json();
//       })
//       .then((userData) => {
//         console.log("ciaociao");
//         console.log("Dati dell'utente:", userData);
//         setUserData(userData);
//         // Gestisci i dati dell'utente come preferisci
//       })
//       .catch((error) => {
//         console.error("Errore:", error.message);
//         // Gestisci l'errore
//       });
//   };
//   const fetchData = async () => {
//     try {
//       const matchResponse = await fetch(
//         `${process.env.REACT_APP_BACKEND}/statistiche/gioco/${mostraStatistiche}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const listUser = await matchResponse.json();
//       setListUser(listUser);
//     } catch (error) {
//       console.error("Errore:", error.message);
//     }
//   };

//   useEffect(() => {
//     if (!mostraStatistiche) {
//       getUtente();
//     } else {
//       fetchData();
//     }
//   }, [mostraStatistiche, userData]);
//   console.log(userData);
//   console.log(mostraStatistiche);
//   console.log(listUser);

//   return (
//     <div className="">
//       <nav id="navbar1" className="navbar navbar-expand-lg ">
//         <div className="container-fluid ">
//           <ul className="navbar-nav mb-2 mb-lg-0  navSpan rounded-bottom">
//             <li className="nav-item" onClick={() => navigate("/")}>
//               <span className="nav-link">
//                 <img src={logoImg} alt="..." className="logoImg" />
//               </span>
//             </li>
//           </ul>
//           <button
//             className="navbar-toggler hamburger rounded-bottom border-0 mb-2"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="">
//               <i className="nav-link bi bi-list text-white iconaH"></i>
//             </span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0  navSpan rounded-bottom">
//               <li className="nav-item nav-link" onClick={() => navigate("/me")}>
//                 Profilo
//               </li>
//               <li
//                 className="nav-item nav-link "
//                 onClick={() => navigate("/match")}
//               >
//                 Match
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="asd">
//                   News
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="asd">
//                   Forum
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="asd">
//                   Shop
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <i className="bi bi-door-closed-fill nav-link"></i>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           <div className="col-2 col-xl-2"></div>
//           <div className="col-2 col-xl-2"></div>
//           <div className="col-2 col-xl-2">
//             <div className="card scrittaCard">
//               <img src={scrittaImg} className="card-img img-fluid" alt="..." />
//             </div>
//           </div>
//           <div className="col-2 col-xl-2"></div>
//           <div className="col-2 col-xl-2 "></div>
//         </div>
//       </div>
//       <div className="container-fluid mb-5">
//         <div className="row sezioneProfilo justify-content-around align-items-center">
//           <div className="col col-4 navbar-nav pe-0 pe-md-3">
//             {userData ? (
//               <ProfileMatch
//                 utente={userData}
//                 setView={handleToggleView}
//                 setIndex={setCurrentIndex}
//                 toggleClicked={toggleClicked}
//               />
//             ) : (
//               ""
//             )}
//           </div>
//           {/* --------------- LOGO--------- */}

//           {/* --------------- MATCH CARD--------- */}

//           {mostraStatistiche === "Fortnite" ? (
//             <>
//               <div className="col col-1 align-self-center align-items-center navbar-nav">
//                 <img
//                   src={logoImg}
//                   alt="..."
//                   className="logoImg cursorPFA"
//                   onClick={() => {
//                     handleCurrentIndex();
//                     toggleClicked();
//                   }}
//                 />
//               </div>
//               <div
//                 className={`card-container1 ${
//                   isClicked ? "" : "clicked"
//                 } col col-4 navbar-nav pe-0 pe-md-3`}
//               >
//                 <span className="cardLR">
//                   <span className="card-inner">
//                     <span className={`card-face1 card-front1`}>
//                       {listUser &&
//                         listUser.length > 0 &&
//                         listUser[currentIndex] &&
//                         userData &&
//                         ((() => {
//                           if (
//                             listUser[currentIndex].utente.id === userData.id
//                           ) {
//                             console.log("ciao");
//                             setCurrentIndex(
//                               (prevIndex) => (prevIndex + 1) % listUser.length
//                             );
//                           }
//                           if (currentIndex >= listUser.length) {
//                             setCurrentIndex(0);
//                             console.log("ciao");
//                           }
//                         })(),
//                         listUser[currentIndex] && (
//                           <>
//                             <div className="cardUser">
//                               <div className="row justify-content-center">
//                                 <div className="text-center my-3">
//                                   <img
//                                     src={logoImg}
//                                     alt="..."
//                                     className="logoImg"
//                                   />
//                                 </div>
//                                 <div className="row cardUser1 w-75 align-items-center justify-content-center mb-3">
//                                   <div className="col col-md-12 text-center align-content-center my-md-2">
//                                     <img
//                                       src={listUser[currentIndex].utente.avatar}
//                                       alt="user_avatar"
//                                       className="rounded imgImp"
//                                     />
//                                   </div>
//                                   <div className="col col-md-12 text-center">
//                                     {listUser[currentIndex].utente.nome}{" "}
//                                     {listUser[currentIndex].utente.cognome}
//                                   </div>
//                                   <div className="text-center gold">
//                                     <span
//                                       className="cursorPFA"
//                                       onClick={() =>
//                                         navigate(
//                                           `/user/${listUser[currentIndex].utente.id}/${listUser[currentIndex].idStatisticaGioco}`
//                                         )
//                                       }
//                                     >
//                                       Username:{" "}
//                                       {listUser[currentIndex].utente.username}
//                                     </span>
//                                   </div>
//                                 </div>
//                                 <div className="text-center gold">
//                                   In Game:{" "}
//                                   {listUser[currentIndex].usernameGioco}{" "}
//                                 </div>
//                                 <div className="row cardUser1 w-75 align-items-center justify-content-center my-3">
//                                   <p className="text-center mb-0">
//                                     <i
//                                       className="bi bi-search"
//                                       onClick={() => handleShow7()}
//                                     >
//                                       {" "}
//                                       OverAll
//                                     </i>
//                                   </p>
//                                   <div className="containerStat1">
//                                     <div className="cardUser">
//                                       <p className="">
//                                         {
//                                           listUser[currentIndex].overall
//                                             ?.winRate
//                                         }
//                                         %
//                                       </p>
//                                       <p className=" ">Win %</p>
//                                     </div>
//                                     <div className="cardUser">
//                                       {" "}
//                                       <p className="">
//                                         {listUser[currentIndex].overall?.wins}
//                                       </p>
//                                       <p className="">Win</p>
//                                     </div>
//                                     <div className="cardUser">
//                                       <p className="">
//                                         {listUser[currentIndex].overall?.kd}
//                                       </p>
//                                       <p className="">K/D</p>
//                                     </div>
//                                     <div className="cardUser">
//                                       <p className="">
//                                         {listUser[currentIndex].overall?.kills}
//                                       </p>
//                                       <p className="">Kills</p>
//                                     </div>
//                                     <div className="cardUser">
//                                       <p className="">
//                                         {listUser[currentIndex].overall?.top10}
//                                       </p>
//                                       <p className="">Top 10</p>
//                                     </div>
//                                     <div className="cardUser">
//                                       <p className="">
//                                         {listUser[currentIndex].overall?.top25}
//                                       </p>
//                                       <p className="">Top 25</p>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </>
//                         ))}
//                     </span>
//                   </span>
//                 </span>
//               </div>
//             </>
//           ) : mostraStatistiche === "League of Legends" ? (
//             <>
//               <div className="col col-1 align-self-center align-items-center navbar-nav">
//                 <img
//                   src={logoImg}
//                   alt="..."
//                   className="logoImg cursorPFA"
//                   onClick={() => {
//                     handleCurrentIndex();
//                     toggleClicked();
//                   }}
//                 />
//               </div>
//               <div
//                 className={`card-container1 ${
//                   isClicked ? "" : "clicked"
//                 } col col-4 navbar-nav pe-0 pe-md-3`}
//               >
//                 <span className="cardLR">
//                   <span className="card-inner">
//                     <span className={`card-face1 card-front1`}>
//                       {listUser &&
//                         listUser.length > 0 &&
//                         listUser[currentIndex] &&
//                         listUser[currentIndex].league &&
//                         userData &&
//                         ((() => {
//                           if (
//                             listUser[currentIndex].utente.id === userData.id
//                           ) {
//                             console.log("ciao");
//                             setCurrentIndex(
//                               (prevIndex) => (prevIndex + 1) % listUser.length
//                             );
//                           }
//                           if (currentIndex >= listUser.length) {
//                             setCurrentIndex(0);
//                             console.log("ciao");
//                           }
//                         })(),
//                         listUser[currentIndex] && (
//                           <>
//                             <div className="cardUser">
//                               <div className="row justify-content-center">
//                                 <div className="text-center my-3">
//                                   <img
//                                     src={logoImg}
//                                     alt="..."
//                                     className="logoImg"
//                                   />
//                                 </div>
//                                 <div className="row cardUser1 w-75 align-items-center justify-content-center mb-3">
//                                   <div className="col col-md-12 text-center align-content-center my-md-2">
//                                     <img
//                                       src={listUser[currentIndex].utente.avatar}
//                                       alt="user_avatar"
//                                       className="rounded imgImp"
//                                     />
//                                   </div>
//                                   <div className="col col-md-12 text-center">
//                                     {listUser[currentIndex].utente.nome}{" "}
//                                     {listUser[currentIndex].utente.cognome}
//                                   </div>
//                                   <div className="text-center gold">
//                                     <span
//                                       className="cursorPFA"
//                                       onClick={() =>
//                                         navigate(
//                                           `/user/${listUser[currentIndex].utente.id}/${listUser[currentIndex].idStatisticaGioco}`
//                                         )
//                                       }
//                                     >
//                                       Username:{" "}
//                                       {listUser[currentIndex].utente.username}
//                                     </span>
//                                   </div>
//                                 </div>
//                                 <div className="row cardUser1 w-75 align-items-center justify-content-center my-3">
//                                   <p className="text-center mb-0">
//                                     <i
//                                       className="bi bi-search"
//                                       onClick={() => handleShow8()}
//                                     >
//                                       {" "}
//                                       Dettagli
//                                     </i>
//                                   </p>
//                                   <div className="containerStat1">
//                                     <div className="row text-center justify-content-around">
//                                       <div className="col col-md-12 mb-2">
//                                         <div className="cardUserGame  rounded mb-2">
//                                           <i className="bi bi-person-fill">
//                                             {" "}
//                                             SummonerName
//                                           </i>
//                                         </div>
//                                         {
//                                           listUser[currentIndex].league
//                                             .summonerName
//                                         }
//                                       </div>
//                                       <div className="row ">
//                                         <div className="col col-md-6 mb-2">
//                                           <div className="cardUserGame   rounded mb-2">
//                                             <i className="bi bi-trophy-fill">
//                                               {" "}
//                                               Wins
//                                             </i>
//                                           </div>

//                                           {listUser[currentIndex].league.wins}
//                                         </div>
//                                         <div className="col col-md-6 mb-2">
//                                           <div className="cardUserGame   rounded mb-2">
//                                             <i className="bi bi-x-circle-fill">
//                                               {" "}
//                                               Losses
//                                             </i>
//                                           </div>
//                                           {listUser[currentIndex].league.losses}
//                                         </div>
//                                       </div>
//                                       <div className="col col-md-12 mb-2">
//                                         <div className="cardUserGame   rounded mb-2">
//                                           <i className="bi bi-award-fill">
//                                             League
//                                           </i>
//                                         </div>

//                                         {listUser[currentIndex].league.tier}
//                                       </div>
//                                       <div className="col col-md-12 mb-2">
//                                         <div className="cardUserGame  rounded mb-2">
//                                           <i className="bi bi-bar-chart-line-fill">
//                                             {" "}
//                                             Rank
//                                           </i>
//                                         </div>
//                                         {listUser[currentIndex].league.rank}
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </>
//                         ))}
//                     </span>
//                   </span>
//                 </span>
//               </div>
//             </>
//           ) : (
//             ""
//           )}
//         </div>
//         {listUser && (
//           <ModalDettagliFortnite
//             show={show7}
//             onHide={handleClose7}
//             user={listUser[currentIndex]}
//             getUtente={getUtente}
//           />
//         )}
//         {listUser && (
//           <ModalDettagliLol
//             show={show8}
//             onHide={handleClose8}
//             user={listUser[currentIndex]}
//             getUtente={getUtente}
//           />
//         )}
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };
// export default MatchPage;

const MatchPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [listUser, setListUser] = useState();
  const token = localStorage.getItem("authToken");
  const [mostraStatistiche, setMostraStatistiche] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(true);

  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);
  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const toggleClicked = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };
  const handleCurrentIndex = () => {
    console.log("Current Index before update:", currentIndex);
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (listUser ? listUser.length : 1)
    );
    console.log("Current Index after update:", currentIndex);
  };
  const handleToggleView = (impostazione) => {
    setMostraStatistiche(impostazione);
  };

  const fetchData = async () => {
    try {
      const matchResponse = await fetch(
        `${process.env.REACT_APP_BACKEND}/statistiche/gioco/${mostraStatistiche}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const listUser = await matchResponse.json();
      setListUser(listUser);
    } catch (error) {
      console.error("Errore:", error.message);
    }
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
    if (!mostraStatistiche) {
      getUtente();
    } else {
      fetchData();
    }
  }, [mostraStatistiche]); // Ho rimosso listUser dal dipendency array

  useEffect(() => {
    if (listUser && listUser.length > 0 && userData) {
      const isCurrentUser = listUser[currentIndex].utente.id === userData.id;
      if (isCurrentUser) {
        handleCurrentIndex();
      }
    }
  }, [listUser, currentIndex, userData]);

  const renderFortniteStats = () => {
    if (!listUser || listUser.length === 0 || !listUser[currentIndex]) {
      return null;
    }

    const isCurrentUser = listUser[currentIndex].utente.id === userData?.id;

    if (isCurrentUser) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listUser.length);
    }

    return (
      <div className="cardUser">
        <div className="row justify-content-center">
          <div className="text-center my-3">
            <img src={logoImg} alt="..." className="logoImg" />
          </div>
          <div className="row cardUser1 w-75 align-items-center justify-content-center mb-3">
            <div className="col col-md-12 text-center align-content-center my-md-2">
              <img
                src={listUser[currentIndex].utente.avatar}
                alt="user_avatar"
                className="rounded imgImp"
              />
            </div>
            <div className="col col-md-12 text-center">
              {listUser[currentIndex].utente.nome}{" "}
              {listUser[currentIndex].utente.cognome}
            </div>
            <div className="text-center gold">
              <span
                className="cursorPFA"
                onClick={() =>
                  navigate(
                    `/user/${listUser[currentIndex].utente.id}/${listUser[currentIndex].idStatisticaGioco}`
                  )
                }
              >
                Username: {listUser[currentIndex].utente.username}
              </span>
            </div>
          </div>
          <div className="text-center gold">
            In Game: {listUser[currentIndex].usernameGioco}{" "}
            <IconAddMatch
              userData={userData}
              userMatch={listUser[currentIndex]}
            ></IconAddMatch>
          </div>
          <div className="row cardUser1 w-75 align-items-center justify-content-center my-3">
            <p className="text-center mb-0">
              <i
                className="bi bi-search cursorPFA"
                onClick={() => handleShow7()}
              >
                {" "}
                OverAll
              </i>
            </p>
            <div className="containerStat1">
              <div className="cardUser">
                <p className="">{listUser[currentIndex].overall?.winRate}%</p>
                <p className=" ">Win %</p>
              </div>
              <div className="cardUser">
                {" "}
                <p className="">{listUser[currentIndex].overall?.wins}</p>
                <p className="">Win</p>
              </div>
              <div className="cardUser">
                <p className="">{listUser[currentIndex].overall?.kd}</p>
                <p className="">K/D</p>
              </div>
              <div className="cardUser">
                <p className="">{listUser[currentIndex].overall?.kills}</p>
                <p className="">Kills</p>
              </div>
              <div className="cardUser">
                <p className="">{listUser[currentIndex].overall?.top10}</p>
                <p className="">Top 10</p>
              </div>
              <div className="cardUser">
                <p className="">{listUser[currentIndex].overall?.top25}</p>
                <p className="">Top 25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeagueOfLegendsStats = () => {
    if (
      !listUser ||
      listUser.length === 0 ||
      !listUser[currentIndex] ||
      !listUser[currentIndex].league
    ) {
      return null;
    }

    const isCurrentUser = listUser[currentIndex].utente.id === userData?.id;

    if (isCurrentUser) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % listUser.length);
    }

    return (
      <div className="cardUser">
        <div className="row justify-content-center">
          <div className="text-center my-3">
            <img src={logoImg} alt="..." className="logoImg" />
          </div>
          <div className="row cardUser1 w-75 align-items-center justify-content-center mb-3">
            <div className="col col-md-12 text-center align-content-center my-md-2">
              <img
                src={listUser[currentIndex].utente.avatar}
                alt="user_avatar"
                className="rounded imgImp"
              />
            </div>
            <div className="col col-md-12 text-center">
              {listUser[currentIndex].utente.nome}{" "}
              {listUser[currentIndex].utente.cognome}
            </div>
            <div className="text-center gold">
              <span
                className="cursorPFA"
                onClick={() =>
                  navigate(
                    `/user/${listUser[currentIndex].utente.id}/${listUser[currentIndex].idStatisticaGioco}`
                  )
                }
              >
                Username: {listUser[currentIndex].utente.username}{" "}
                <IconAddMatch
                  userData={userData}
                  userMatch={listUser[currentIndex]}
                ></IconAddMatch>
              </span>
            </div>
          </div>
          <div className="row cardUser1 w-75 align-items-center justify-content-center my-3">
            <p className="text-center mb-0">
              <i
                className="bi bi-search cursorPFA"
                onClick={() => handleShow8()}
              >
                {" "}
                Dettagli
              </i>
            </p>
            <div className="containerStat1">
              <div className="row text-center justify-content-around">
                <div className="col col-md-12 mb-2">
                  <div className="cardUserGame  rounded mb-2">
                    <i className="bi bi-person-fill"> SummonerName</i>
                  </div>
                  {listUser[currentIndex].league.summonerName}
                </div>
                <div className="row ">
                  <div className="col col-md-6 mb-2">
                    <div className="cardUserGame   rounded mb-2">
                      <i className="bi bi-trophy-fill"> Wins</i>
                    </div>

                    {listUser[currentIndex].league.wins}
                  </div>
                  <div className="col col-md-6 mb-2">
                    <div className="cardUserGame   rounded mb-2">
                      <i className="bi bi-x-circle-fill"> Losses</i>
                    </div>
                    {listUser[currentIndex].league.losses}
                  </div>
                </div>
                <div className="col col-md-12 mb-2">
                  <div className="cardUserGame   rounded mb-2">
                    <i className="bi bi-award-fill">League</i>
                  </div>

                  {listUser[currentIndex].league.tier}
                </div>
                <div className="col col-md-12 mb-2">
                  <div className="cardUserGame  rounded mb-2">
                    <i className="bi bi-bar-chart-line-fill"> Rank</i>
                  </div>
                  {listUser[currentIndex].league.rank}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const CardContainer = () => {
    if (!listUser || listUser.length === 0 || !listUser[currentIndex]) {
      return null;
    }

    return (
      <div
        className={`card-container1 ${
          isClicked ? "" : "clicked"
        } col col-4 navbar-nav pe-0 pe-md-3`}
      >
        <span className="cardLR">
          <span className="card-inner">
            <span className={`card-face1 card-front1`}>
              {/* Se mostraStatistiche è "Fortnite", chiama renderFortniteStats */}
              {mostraStatistiche === "Fortnite" && renderFortniteStats()}
              {/* Se mostraStatistiche è "League of Legends", chiama renderLeagueOfLegendsStats */}
              {mostraStatistiche === "League of Legends" &&
                renderLeagueOfLegendsStats()}
            </span>
          </span>
        </span>
      </div>
    );
  };
  const UserCard = () => {
    if (!listUser || listUser.length === 0 || !listUser[currentIndex]) {
      return null;
    }

    return (
      <div className="col col-1 align-self-center align-items-center navbar-nav">
        <img
          src={logoImg}
          alt="..."
          className="logoImg cursorPFA"
          onClick={() => {
            handleCurrentIndex();
            toggleClicked();
          }}
        />
      </div>
    );
  };
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
        <div className="row sezioneProfilo justify-content-around align-items-center">
          <div className="col col-4 navbar-nav pe-0 pe-md-3">
            {userData ? (
              <ProfileMatch
                utente={userData}
                setView={handleToggleView}
                setIndex={setCurrentIndex}
                toggleClicked={toggleClicked}
              />
            ) : (
              ""
            )}
          </div>
          <>
            {UserCard()}
            {CardContainer()}
          </>
        </div>
        {listUser && (
          <ModalDettagliFortnite
            show={show7}
            onHide={handleClose7}
            user={listUser[currentIndex]}
            getUtente={getUtente}
          />
        )}
        {listUser && (
          <ModalDettagliLol
            show={show8}
            onHide={handleClose8}
            user={listUser[currentIndex]}
            getUtente={getUtente}
          />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};
export default MatchPage;
