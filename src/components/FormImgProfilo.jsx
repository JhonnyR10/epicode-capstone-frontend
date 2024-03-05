import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormImgProfilo = ({ user, getUtente, show, onHide }) => {
  const token = localStorage.getItem("authToken");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", image);

    fetch(`${process.env.REACT_APP_BACKEND}/user/${user.id}/avatar`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
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
        getUtente();
      })

      .then(() => {
        onHide();
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  return (
    <Form onSubmit={handleFormSubmit} className="mt-2">
      <Form.Group className="mb-1">
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          size="sm"
          className="cardUserGame fcs"
        />
      </Form.Group>

      <button
        variant="primary"
        type="submit"
        className="border-0 rounded btnImg cardUserGame"
      >
        Salva
      </button>
    </Form>
  );
};
export default FormImgProfilo;
