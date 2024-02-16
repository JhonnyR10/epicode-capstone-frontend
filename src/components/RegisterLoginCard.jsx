import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function RegisterLoginCard() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  return (
    <div className={`flip-container ${isLoginForm ? "" : "clicked"}`}>
      <div className="flipper">
        <div className="front">
          <h2 className="text-center">Login</h2>
          <Login></Login>
          <button onClick={toggleForm}>
            Hai bisogno di un account? Registrati
          </button>
        </div>
        <div className="back">
          <h2 className="text-center">Register</h2>

          <Register></Register>
          <button onClick={toggleForm}>
            Sei già registrato? Effettua il login
          </button>
        </div>
      </div>
    </div>
  );
}
export default RegisterLoginCard;
