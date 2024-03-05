const Footer = () => {
  return (
    <footer className="text-center text-lg-start  ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/giovanni.longo.98837399/"
            className="me-4 text-reset"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/gio_longo/"
            className="me-4 text-reset"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a href="as" className="me-4 text-reset">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/JhonnyR10" className="me-4 text-reset">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="bi bi-gem me-3"></i> MATCH POINT
              </h6>
              <p>
                Match Point è la tua destinazione definitiva nel mondo del
                gaming: connettiti, gioca e cresci insieme a noi. Unisciti alla
                rivoluzione del gioco online.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Java
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Spring Boot
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  PostgreSQL
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-house me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="bi bi-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="bi bi-phone me-3"></i> + 39 123 4567 890
              </p>
              <p>
                <i className="bi bi-printer me-3"></i> + 39 123 4567 890
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://google.com/">
          giovannilongo.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
