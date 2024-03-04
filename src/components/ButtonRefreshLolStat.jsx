import { useEffect } from "react";
import { useNavigate } from "react-router";

const ButtonRefreshLolStat = ({ stat, utente, getUtente, setView }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const handleClick = async () => {
    try {
      // Esegui la chiamata al tuo database per effettuare la PUT
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/statistiche/lol/${utente.id}?statisticaId=${stat.idStatisticaGioco}&usernameGioco=${stat.usernameGioco}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Se la chiamata ha avuto successo, richiama la funzione getUtente per aggiornare i dati
        setView("impostazioni");
      } else {
        console.error("Errore durante la richiesta PUT al database");
      }
    } catch (error) {
      console.error("Errore durante la richiesta PUT:", error);
    }
  };

  return (
    <i className="bi bi-arrow-clockwise cursorPFA" onClick={handleClick}></i>
  );
};

export default ButtonRefreshLolStat;
