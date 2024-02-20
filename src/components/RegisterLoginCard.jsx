import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Card } from "react-bootstrap";

function RegisterLoginCard() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  // return (
  //   <div className={`flip-container ${isLoginForm ? "" : "clicked"}`}>
  //     <div className="flipper ">
  //       <div className="front text-center">
  //         <Login></Login>
  //         <button onClick={toggleForm}>
  //           Hai bisogno di un account? Registrati
  //         </button>
  //       </div>
  //       <div className="back text-center">
  //         <Register></Register>
  //         <button onClick={toggleForm}>
  //           Sei già registrato? Effettua il login
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className={`card-container ${isLoginForm ? "" : "clicked"}`}>
      <div className="cardLR">
        <div className="card-inner">
          <div className={`card-face card-front`}>
            <Login></Login>
            <p>
              Non sei registrato? <span onClick={toggleForm}>Registrati!</span>
            </p>
          </div>
          <div className={`card-face card-back`}>
            <Register></Register>
            <p>
              Sei già registrato?{" "}
              <span onClick={toggleForm}>Fai il login!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLoginCard;