import Footer from "../comonents/Footer";
import Header from "../comonents/Header";
import "../styles/global.scss";
import "../styles/Error.scss";

function Error() {
    return (
        <div className="background">
            <Header />
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a href="../">Retourner sur la page d'accueil</a>
            <Footer />
        </div>
    )
}

export default Error

