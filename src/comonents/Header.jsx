import Navigation from "./Nav"
import "../styles/header.scss"

function Header() {
    return (
        <div className="header">
            <img src="./LOGO.png" />
            <Navigation />
        </div>
    )
}

export default Header