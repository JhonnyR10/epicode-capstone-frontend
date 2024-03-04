// const IconAddMatch = ({ userData, userMatch }) => {
//   const token = localStorage.getItem("authToken");
//   const addMatch = () => {
//     fetch(
//       `${process.env.REACT_APP_BACKEND}/user/${userData.id}/matches/${userMatch.utente.id}`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Errore nella richiesta");
//         }
//         return response.json();
//       })
//       .then((userData) => {
//         console.log("Dati dell'utente:", userData);
//         // Gestisci i dati dell'utente come preferisci
//       })
//       .catch((error) => {
//         console.error("Errore:", error.message);
//         // Gestisci l'errore
//         alert(
//           "Si è verificato un errore durante l'aggiunta dell'amico: " +
//             error.message
//         );
//       });
//   };
//   return (
//     <>
//       <i className="bi bi-person-heart text-white" onClick={() => addMatch()}>
//         {" "}
//       </i>
//     </>
//   );
// };
// export default IconAddMatch;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const IconAddMatch = ({ userData, userMatch }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  // Stato per gestire se l'amico è già presente nella lista
  const [isMatched, setIsMatched] = useState(false); // Inizializzato a false, cambialo in base alle tue esigenze

  const addMatch = () => {
    // Se l'amico è già presente, non fare nulla
    if (isMatched) {
      return;
    }

    fetch(
      `${process.env.REACT_APP_BACKEND}/user/${userData.id}/matches/${userMatch.utente.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((userData) => {
        console.log("Dati dell'utente:", userData);
        // Aggiorna lo stato per indicare che l'amico è stato aggiunto
        setIsMatched(true);
      })
      .then(() => {
        navigate(`/user/${userMatch.utente.id}/${userMatch.idStatisticaGioco}`);
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        // Gestisci l'errore
        alert(
          "Si è verificato un errore durante l'aggiunta dell'amico: " +
            error.message
        );
      });
  };
  useEffect(() => {
    // Verifica se l'amico è già presente nella lista
    setIsMatched(
      userData.matches.some((match) => match.id === userMatch.utente.id)
    );
    console.log(isMatched);
  }, [userData, userMatch]);
  return (
    <>
      <i
        className={`bi bi-person-heart text-${isMatched ? "danger" : "white"}`}
        onClick={() => !isMatched && addMatch()}
      />
    </>
  );
};

export default IconAddMatch;
