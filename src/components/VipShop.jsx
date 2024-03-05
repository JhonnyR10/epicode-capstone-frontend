import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import logoImg from "../logoMP.png";
import vip from "../VIP.png";
import scrittaImg from "../scrittaMP.png";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import { Button, Card, ListGroup } from "react-bootstrap";

const VipShop = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const [userData, setUserData] = useState(null); // Inizializza a null
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
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
      .then((data) => {
        console.log("Dati dell'utente:", data);
        setUserData(data);
      })
      .catch((error) => {
        console.error("Errore:", error.message);
      });
  }, [token]); // useEffect dipende dal token per essere eseguito

  const handleClick = async (event) => {
    event.preventDefault();

    const stripe = await stripePromise;
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND}/create-checkout-session?userId=${userData.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      console.error("Errore nella creazione della sessione di checkout");
      return;
    }

    const data = await response.json(); // Assumi che questa sia una risposta JSON valida
    const sessionUrl = data.url; // Accedi all'URL della sessione da oggetto JSON

    // Verifica l'URL prima del reindirizzamento
    if (sessionUrl.startsWith("https://checkout.stripe.com")) {
      window.location.href = sessionUrl; // Reindirizza l'utente all'URL di checkout
    } else {
      console.error("URL di checkout non valido.");
    }
  };
  const logoutFunction = () => {
    localStorage.removeItem("authToken");
    navigate("/");
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

              <li
                className="nav-item nav-link "
                onClick={() => navigate("/shop")}
              >
                Shop
              </li>
              <li className="nav-item">
                <span className="" onClick={logoutFunction}>
                  <i className="bi bi-door-closed-fill nav-link"></i>
                </span>
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

      <div className="container-fluid asjbajs">
        <div className="row sezioneCentrale">
          <div className="mt-5 mb-5">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <span className="">
                  <img src={vip} alt="..." className="w-50 h-50" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <Card className="bg-section1">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <h1 className="h1lp">
                  <Card.Text className="ms-3">
                    {" "}
                    Eleva la tua esperienza di gioco con il nostro Pass VIP.
                    Dimentica i limiti: goditi matchmaking illimitati e la
                    libertà di aggiungere più account per gioco.
                  </Card.Text>
                </h1>
              </Card.Body>
            </Card>
          </div>
          <div className="welM1 mb-5">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4  justify-content-evenly g-4">
              <div className="col gameCardN cursorPFA">
                <div className="card h-100 cardUser">
                  <span className="text-center">
                    <img
                      src={logoImg}
                      className="card-img-top logoImg1 mb-3"
                      alt="..."
                    />
                  </span>
                  <div className="card-body cardUser2 text-center rounded">
                    <h5 className="card-title text-center mt-2">Match Play</h5>
                    <ListGroup className="" variant="flush">
                      <ListGroup.Item className="border-0 bg-transparent">
                        Due Account: Due account per gioco per iniziare.
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        Limiti sui Match: Scopri il gioco con restrizioni
                        moderate.
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        Esperienza Standard: Goditi il gioco con le funzionalità
                        base.
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="card-footer cardUser1 fs-5 text-center ">
                    GRATIS
                  </div>
                </div>
              </div>

              <div className="col gameCardN">
                <div className="card h-100 cardUserX cursorPFA">
                  <span className="text-center mb-3">
                    <img
                      src={vip}
                      className="card-img-top logoImg1"
                      alt="..."
                    />
                  </span>
                  <div className="card-body cardUser2 text-center rounded">
                    <h5 className="card-title text-center mt-2">Match VIP</h5>
                    <ListGroup className="" variant="flush">
                      <ListGroup.Item className="border-0 bg-transparent">
                        Match Illimitati: Gioca senza limiti.
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        Multi-Account: Gestisci più account per ciascun gioco.
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        Novità in Anteprima: Sii il primo a scoprire contenuti
                        esclusivi e novità.
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent">
                        Esperienza Premium: Vivi il gioco al massimo con
                        funzionalità avanzate.
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="card-footer cardUser1 fs-5 text-center text-danger">
                    7.99€
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <h5 className="card-title text-center h1lp ">
              Trasforma il tuo modo di giocare e accedi a un mondo di privilegi
              esclusivi. Diventa VIP oggi per esperienze senza limiti e vantaggi
              unici.
            </h5>
            <Button
              className="mt-5 rounded-3 px-3 btnEdit cardUserGame btnLR"
              role="link"
              onClick={handleClick}
              disabled={!userData}
            >
              Acquista
            </Button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default VipShop;
