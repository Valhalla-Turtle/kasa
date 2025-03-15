import Banner from "../comonents/Banner"
import Footer from "../comonents/Footer"
import Header from "../comonents/Header"
import Card from "../comonents/Card"
import "../styles/global.scss"
import houses from "../../houses.json"; // Import the JSON data

function Home() {

  return (
    <div className="background">
      <Header />
      <Banner quote={"Chez vous, partout et ailleurs"} image={"./banner.jpeg"}/>
      <div className="houses-list">
        {houses.map((house) => <Card key={house.id} cover={house.cover} title={house.title} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Home

