const ButtonRefreshFortniteStat = ({ stat, utente, getUtente, setView }) => {
  const token = localStorage.getItem("authToken");
  const fetchFortniteAPI = () => {
    // Esegui fetch per Fortnite API
    fetch(
      `${process.env.REACT_APP_API_URL_FORTNITE}?name=${stat.usernameGioco}&timeWindows=season`,
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.REACT_APP_API_FORTNITE_TOKEN}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Utente non trovato");
          } else {
            throw new Error("Errore nella richiesta");
          }
        }
        return response.json();
      })
      .then((userData) => {
        console.log("Dati dell'utente:", userData);

        handleClick(userData);
      })
      .catch((error) => {
        console.error("Errore:", error.message);
      });
  };

  const handleClick = (userData) => {
    fetch(
      `${process.env.REACT_APP_BACKEND}/statistiche/${utente.id}?statisticaId=${stat.idStatisticaGioco}`,
      {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nella richiesta al database");
        }
        return res;
      })
      .then(() => {
        setView("impostazioni");
      })
      .catch((error) => {
        console.error("Errore nel salvataggio nel database:", error);
        // Gestisci l'errore
      });
  };

  return (
    <i
      className="bi bi-arrow-clockwise cursorPFA"
      onClick={fetchFortniteAPI}
    ></i>
  );
};
export default ButtonRefreshFortniteStat;
