import Banner from "../comonents/Banner";
import Collapsible from "../comonents/Collapsible";
import Header from "../comonents/Header";
import "../styles/global.scss";

function About() {
  return (
    <div className="background">
      <Header />
      <Banner image={"./banner2.png"} />
      <Collapsible title={'Fiabilité'} contente={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'}/>
      <Collapsible title={'Respect'} contente={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} />
    </div>
  );
}

export default About;
