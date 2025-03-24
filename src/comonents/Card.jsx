import "../styles/card.scss"
import houses from "../../houses.json"; // Import the JSON data

function Card({cover,title}) {
  return (
    // <div className="houses-list">
    //   {houses.map((house) => (
    //     <div key={house.id} className="house-card">
    //       <img src={house.cover} alt={house.title} className="house-image" />
    //       <h2 className="house-title">{house.title}</h2>
    //     </div>
    //   ))}
    // </div>
    <div className="card">
      <a href="./logement"><img src={cover} alt={title} className="card-image" /></a>
      <h2 className="card-title">{title}</h2>
    </div>
  )
}

export default Card
