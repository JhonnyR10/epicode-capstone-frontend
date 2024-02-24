import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ModalAddGameAccount({ show, onHide, user, getUtente }) {
  const token = localStorage.getItem("authToken");
  const [gameSelected, setGameSelected] = useState("");
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState();

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleGameSelectChange = (e) => {
    setGameSelected(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (gameSelected === "Fortnite") {
      // Esegui fetch per Fortnite API
      fetchFortniteAPI();
    } else if (gameSelected === "LeagueOfLegends") {
      // Esegui fetch per League of Legends API
      fetchLeagueOfLegendsAPI();
    } else {
      // Gestisci il caso in cui non ci sia un gioco selezionato
      console.error("Seleziona un gioco valido");
    }
  };

  const fetchFortniteAPI = () => {
    console.log(process.env.REACT_APP_API_URL_FORTNITE);
    console.log(process.env.REACT_APP_API_FORTNITE_TOKEN);
    // Esegui fetch per Fortnite API
    fetch(
      `${process.env.REACT_APP_API_URL_FORTNITE}?name=${username}&timeWindows=season`,
      {
        method: "GET",
        headers: {
          Authorization: `${process.env.REACT_APP_API_FORTNITE_TOKEN}`,
        },
      }
    ).then((data) => {
      const { status, data: userData } = data;

      if (status === 200) {
        // Verifica che userData sia definito prima di tentare la destrutturazione
        if (userData) {
          const { account, stats } = userData;
          // Ora puoi accedere ai dati utente in account e stats
          console.log("Dati dell'utente:", account, stats);
        } else {
          console.error("Errore: userData è undefined");
        }
      } else {
        // Gestisci il caso in cui la richiesta non ha restituito uno stato di successo
        console.error("Errore nella richiesta. Codice di stato:", status);
      }
    });
  };

  const fetchLeagueOfLegendsAPI = () => {
    // Esegui fetch per League of Legends API
    fetch("URL_della_tua_API_LeagueOfLegends")
      .then((res) => res.json())
      .then((data) => {
        // Gestisci la risposta della chiamata API per League of Legends
        console.log("Dati da API League of Legends:", data);
      })
      .catch((error) => {
        console.error("Errore nella chiamata API League of Legends:", error);
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-md"
      data-bs-theme="dark"
    >
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi Game's Account</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Form onSubmit={handleFormSubmit}>
          <p className="mt-2 pmodalprof">* Indica che è obbligatorio</p>
          <Form.Group className="mb-3">
            <Form.Label>Game*</Form.Label>
            <Form.Select
              aria-label="Seleziona un gioco"
              onChange={handleGameSelectChange}
              value={gameSelected}
            >
              <option value="">Seleziona un gioco</option>
              <option value="Fortnite">Fortnite</option>
              <option value="LeagueOfLegends">League of Legends</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              //   onClick={onHide}
              className="rounded-pill"
            >
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default ModalAddGameAccount;
