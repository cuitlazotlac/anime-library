import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
      {/* <header>
        {/* <img src={logo}></img> */}
        <h1>
          The<strong>Anime</strong>Database
        </h1>
      </header> */}
    </>
  );
}

export default Header;
