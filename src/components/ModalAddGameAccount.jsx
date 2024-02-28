import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";

function ModalAddGameAccount({ show, onHide, user, getUtente }) {
  const token = localStorage.getItem("authToken");
  const [gameSelected, setGameSelected] = useState("");
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState(null);

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
    // Esegui fetch per Fortnite API
    fetch(
      `${process.env.REACT_APP_API_URL_FORTNITE}?name=${username}&timeWindows=season`,
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
        setProfile(userData);
        setError(null);
        fetchToDatabase(userData);
        onHide();
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        setError(error.message);
      });
  };

  const fetchLeagueOfLegendsAPI = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND}/statistiche/salva-lol?userId=${user.id}&usernameGioco=${username}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          return response.text().then((errorMessage) => {
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        onHide();
        getUtente();
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  const fetchToDatabase = (userData) => {
    fetch(`${process.env.REACT_APP_BACKEND}/statistiche/${user.id}`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Errore nella richiesta al database");
        }
        return res;
      })
      .then(() => {
        getUtente();
      })
      .catch((error) => {
        console.error("Errore nel salvataggio nel database:", error);
        // Gestisci l'errore
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
          {error && <Alert variant="danger">{error.message || error}</Alert>}
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
