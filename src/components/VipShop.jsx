import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const VipShop = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const [userData, setUserData] = useState(null); // Inizializza a null
  const token = localStorage.getItem("authToken");

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

    if (!userData) {
      console.log("Dati utente non ancora caricati.");
      return;
    }

    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userData.id }), // Assicurati che userData sia definito
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <button role="link" onClick={handleClick} disabled={!userData}>
      Checkout
    </button>
  );
};

export default VipShop;
