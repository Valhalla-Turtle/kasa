import Banner from "../comonents/Banner"
import Footer from "../comonents/Footer"
import Header from "../comonents/Header"
import Card from "../comonents/Card"
import "../styles/global.scss"
import houses from "../../houses.json"; // Import the JSON datata

function Home() {

  return (
    <body className="background">
      <Header />
      <Banner quote={"Chez vous, partout et ailleurs"} image={"./banner.jpeg"}/>
      <div className="houses-list">
        {houses.map((house) => <Card key={house.id} cover={house.cover} title={house.title} />)}
      </div>
      <Footer />
    </body>
  )
}

export default Home

