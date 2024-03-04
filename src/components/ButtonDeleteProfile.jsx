import { useNavigate } from "react-router";

const ButtonDeleteProfile = ({ user }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/user/${user.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("eliminazione completata");
          navigate("/");
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  return (
    <button
      className="border-0 mt-2 rounded btnEdit cardUserGame"
      onClick={handleDelete}
    >
      <i className="bi bi-trash3-fill text-danger"> Elimina Profilo</i>
    </button>
  );
};

export default ButtonDeleteProfile;
