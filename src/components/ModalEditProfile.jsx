import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const ModalEditProfile = ({ show, onHide, user, getUtente }) => {
  const token = localStorage.getItem("authToken");
  const [profile, setProfile] = useState({
    nome: user.nome,
    cognome: user.cognome,
    email: user.email,
    username: user.username,
    password: user.password,
  });
  const handleInputChange = (property, value) => {
    setProfile({
      ...profile,
      [property]: value,
    });
  };

  // useEffect(() => {
  //   Page();
  // }, [user, accessToken]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND}/user/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(profile),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        // console.log(data._id);
        // setExpId(data._id);
        // console.log("expId", expId);
      })

      .then(() => {
        // setExperience({
        //   role: "",
        //   company: "",
        //   startDate: "",
        //   endDate: null,
        //   description: "",
        //   area: "",
        // });
        getUtente();
        onHide();
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
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
        <Modal.Title>Modifica profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Form onSubmit={handleFormSubmit}>
          <p className="mt-2 pmodalprof">* Indica che è obbligatorio</p>
          <h4>Informazioni di base</h4>
          <Form.Group className="mb-3">
            <Form.Label>Nome*</Form.Label>
            <Form.Control
              type="text"
              value={profile.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cognome*</Form.Label>
            <Form.Control
              type="text"
              value={profile.cognome}
              onChange={(e) => handleInputChange("cognome", e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username*</Form.Label>
            <Form.Control
              type="text"
              value={profile.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password*</Form.Label>
            <Form.Control
              type="text"
              value={"********"}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              //   onClick={onHide}
              className="rounded-pill  rounded-3 px-3 btnEdit cardUserGame btnLR"
            >
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ModalEditProfile;
