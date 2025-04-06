import HouseIfonTag from "./HouseInfoTag";
import OwnerStars from "./OwnerStars";

function HouseOwnerInfo({house}) {
    return (
        <div className='houseownerinfo'>
            <HouseIfonTag house={house} />
            <OwnerStars house={house} />
        </div>
    );
}

export default HouseOwnerInfo