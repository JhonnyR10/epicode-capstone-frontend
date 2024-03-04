import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUtente = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setPassword("");
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        navigate("/me");
      })
      .catch((err) => console.log("ERRORE!", err));
  };
  return (
    <form id="login-form" className="bg-section">
      <h2 className="text-center">Login</h2>
      <InputGroup className="d-flex flex-column w-100">
        <Form.Label className="text-center fs-5">Email</Form.Label>
      </InputGroup>
      <Form.Control
        className="w-100 m-auto"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></Form.Control>
      <InputGroup className="d-flex flex-column w-100">
        <Form.Label className="text-center fs-5 mt-3">Password</Form.Label>
      </InputGroup>
      <Form.Control
        className="w-100 m-auto"
        type="password"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></Form.Control>
      <div className="text-center mt-3">
        <Button className="save-button rounded-5 px-3" onClick={loginUtente}>
          Login
        </Button>
      </div>
    </form>
  );
}
