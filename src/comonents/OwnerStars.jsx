import InfoOwner from "./InfoOwner";
import Stars from "./Stars";


function OwnerStars({house}) {
  return (
    <div className='ownerstars'>
    <InfoOwner host={house.host} />
    <Stars rating={house.rating} />
    </div>
  );
}

export default OwnerStars