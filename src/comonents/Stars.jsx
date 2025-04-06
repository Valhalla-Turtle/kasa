import "../styles/stars.scss";
const Stars = ({ rating }) => {
  const maxStars = 5;
  return (
    <div className="stars">
      {[...Array(maxStars)].map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}><i class="fa-solid fa-star"></i></span>
      ))}
    </div>
  );
};

export default Stars;
