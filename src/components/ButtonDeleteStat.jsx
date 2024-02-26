function ButtonDeleteStat({ user, statistica, getUtente }) {
  const token = localStorage.getItem("authToken");

  const handleDelete = () => {
    console.log(statistica.idStatisticaGioco);
    fetch(
      `${process.env.REACT_APP_BACKEND}/user/${user.id}/${statistica.idStatisticaGioco}`,
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
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };
  return (
    <button className="border-0 rounded btnEdit bgBN" onClick={handleDelete}>
      <i className="bi bi-trash3-fill text-danger"></i>
    </button>
  );
}
export default ButtonDeleteStat;
