import { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";

const ModalEditNews = ({ show, onHide, getNews, news }) => {
  const token = localStorage.getItem("authToken");
  const [notizia, setNotizia] = useState({
    title: "",
    text: "",
    readingTimeMinutes: "",
  });

  const handleInputChange = (property, value) => {
    setNotizia({
      ...notizia,
      [property]: value,
    });
  };
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND}/news/${news.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notizia),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        if (data && data.id) {
          const formData = new FormData();
          formData.append("file", image);
          fetch(
            `${process.env.REACT_APP_BACKEND}/news/${data.id}/upload-cover`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
              },
              body: formData,
            }
          )
            .then((response) => {
              if (response.ok) {
                window.alert("News Aggiunta con successo");
              } else {
                throw new Error("Errore nel caricamento dell'immagine");
              }
            })
            .then((data) => {
              getNews();
            })
            .then((data) => {
              onHide();
            })
            .catch((error) =>
              console.log("Errore nel caricamento dell'immagine:", error)
            );
        }
      })
      .catch((err) => console.log("ERRORE!", err));
  };
  useEffect(() => {
    if (news) {
      setNotizia({
        title: news.title,
        text: news.text,
        readingTimeMinutes: news.readingTimeMinutes,
      });
    }
    console.log("editnews", news);
  }, [news]);
  return (
    <>
      {news && (
        <Modal
          show={show}
          onHide={onHide}
          dialogClassName="modal-md"
          data-bs-theme="dark"
        >
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi una News</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-0">
            <Form onSubmit={handleFormSubmit}>
              <p className="mt-2 pmodalprof">* Indica che è obbligatorio</p>
              <Form.Group className="mb-3">
                <Form.Label>Titolo*</Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={notizia.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Testo*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={notizia.text}
                  onChange={(e) => handleInputChange("text", e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tempo di lettura*</Form.Label>
                <Form.Control
                  type="number"
                  value={notizia.readingTimeMinutes}
                  onChange={(e) =>
                    handleInputChange("readingTimeMinutes", e.target.value)
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  size="sm"
                  className="cardUserGame"
                  required
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
      )}
    </>
  );
};
export default ModalEditNews;
