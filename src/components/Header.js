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
          Anime Library
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
