import { useParams } from 'react-router-dom';
import houses from "../../houses.json"; // Or use an API to get the data dynamically
import Header from '../comonents/Header';
import "../styles/global.scss"
import Footer from '../comonents/Footer';
import SlideShow from '../comonents/SlideShow';
import Property from '../comonents/Property';

function Logement() {
  const { id } = useParams();
  const house = houses.find((h) => h.id === id)

  return (
    <div className='background'>
      <Header />
      <main>
        <SlideShow pictures={house.pictures} />
        <Property house={house} />
      </main>
      <Footer />
    </div>
  )
}

export default Logement;
