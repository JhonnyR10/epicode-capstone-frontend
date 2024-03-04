import { useNavigate } from "react-router";

const ButtonDeleteMatch = ({ user, match, getUtente }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleDelete = () => {
    fetch(
      `${process.env.REACT_APP_BACKEND}/user/${user.id}/matches/${match.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("eliminazione completata");

          getUtente();
          alert("Eliminazione completata");
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  return (
    <i
      className="bi bi-heartbreak cursorPFA"
      onClick={() => {
        handleDelete();
      }}
    ></i>
  );
};
export default ButtonDeleteMatch;
