import Banner from "../comonents/Banner";
import Collapsible from "../comonents/Collapsible";
import Header from "../comonents/Header";
import "../styles/global.scss";

function About() {
  return (
    <div className="background">
      <Header />
      <Banner image={"./banner2.png"} />
      <Collapsible title={'titre'} contente={'contenu du bouton a la con'}/>
    </div>
  );
}

export default About;
