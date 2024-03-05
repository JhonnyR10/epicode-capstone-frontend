import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const NewsViewAll = () => {
  const [listNews, setListNews] = useState();

  const [newsToShow, setNewsToShow] = useState(8);

  const handleShowMoreNews = () => {
    setNewsToShow((prevNewsToShow) => prevNewsToShow + 8);
  };
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const getNews = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/news/getall`, {
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
      .then((listNews) => {
        console.log("Dati dell'utente:", listNews);
        setListNews(listNews.reverse());
        // Gestisci i dati dell'utente come preferisci
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        // Gestisci l'errore
      });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      {listNews && (
        <div className="container-fluid mb-5 sezioneNews ">
          <div className="row row-cols-1  justify-content-center g-4">
            {(listNews ?? [])
              .slice(0, newsToShow)

              .map((news, index) => (
                <div className="col gameCardN cursorPFA" key={index}>
                  <div
                    className="card h-100 cardUser"
                    onClick={() => navigate(`/news/${news.id}`)}
                  >
                    <img
                      src={news.coverImageLink}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body cardUser2  ">
                      <h6 className="card-title mt-2">{news.title}</h6>
                      <p className="card-text truncate-text p3stat mb-2 ">
                        {news.text}
                      </p>
                    </div>
                    <div className="card-footer cardUser1 ">
                      <div className="d-flex justify-content-between">
                        <small className="text-white p3stat">
                          Last updated {news.creationDate}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {listNews && listNews.length > newsToShow && (
              <div className="col gameCardN">
                <div
                  className="card h-100 cardUser cursorPFA"
                  onClick={handleShowMoreNews}
                >
                  <div className="card-body cardUser2 text-center">
                    <div className="d-flex h-100 justify-content-center align-items-center">
                      <i className="bi bi-book-half"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default NewsViewAll;
