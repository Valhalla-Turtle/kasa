import "../styles/card.scss"
import { Link } from 'react-router-dom';

function Card({cover, title, id}) {
  return (
    <div className="card">
      <Link to={`/logement/${id}`}>
      <img src={cover} alt={title} id={id} className="card-image" />
      <h2 className="card-title">{title}</h2>
      </Link>
    </div>
  )
}

export default Card
