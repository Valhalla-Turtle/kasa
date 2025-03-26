import Navigation from "./Nav"
import "../styles/header.scss"

function Header() {
    return (
        <header>
            <img src="./LOGO.png" />
            <Navigation />
        </header>
    )
}

export default Header