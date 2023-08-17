import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <ul>
            <li>
              <div className="footer-logo">
                <img src="../images/k.png" />
                <img src="../images/home.png" />
                <img src="../images/s.png" />
                <img src="../images/a.png" />
              </div>
            </li>
            <li className="footer-copyright">
              &copy; 2020 Kasa. All rights reserved
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
