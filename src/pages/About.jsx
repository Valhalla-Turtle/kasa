import Banner from "../comonents/Banner"
import Header from "../comonents/Header"
import "../styles/global.scss"

function About() {
  return (
    <div className="background">
      <Header/>
      <Banner image={"./banner2.png"}/>
    </div>
  )
}

export default About

