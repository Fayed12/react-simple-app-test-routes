import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span>mohamed fayed</span> All rights
        reserved.
      </p>
    </footer>
  );
}
export default Footer;
