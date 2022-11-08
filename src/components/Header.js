import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import logo from "../assets/images/logo.svg";
import github from "../assets/images/github.png";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} width="50" height="50" /> Anime Library
          </Navbar.Brand>
          <Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <a
                  href="https://github.com/cuitlazotlac/anime-library"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt=""
                    src={github}
                    className="github"
                    width="30"
                    height="30"
                  />
                </a>{" "}
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
