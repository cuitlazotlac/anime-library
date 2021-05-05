import logo from "../assets/images/logo.svg"

function Header() {
    return (
        <header>
            <img src={logo}></img>
            <h1>The<strong>Anime</strong>Database</h1>
        </header>
    )
}

export default Header
