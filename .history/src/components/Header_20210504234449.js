import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
