const ButtonDeleteNews = ({ user, news, getNews }) => {
  const token = localStorage.getItem("authToken");

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/user/${user.id}/news/${news.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("eliminazione completata");
          getNews();
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
    <>
      {news.id && (
        <button
          className="border-0 rounded btnEdit bgBN"
          onClick={handleDelete}
        >
          <i className="bi bi-trash3-fill text-danger"></i>
        </button>
      )}
    </>
  );
};
export default ButtonDeleteNews;
