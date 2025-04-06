import "../styles/property.scss";
import HouseOwnerInfo from "./HouseOwnerInfo";
import Collapsible from "./Collapsible";

function Property({ house }) {
    return (
        <div className='detail'>
            <HouseOwnerInfo house={house} />
            <div className="houseCollapsible">
                <Collapsible title='Description' content={house.description} />
                <Collapsible title='Équipements' content={house.equipments} />
            </div>
        </div>)
}

export default Property

// return (
//     <div className='detail'>
//         <div className='title-host'>
//             <h1>
//                 {house.title}
//             </h1>
//             <div className='host'>
//                 <p className='hostname'>
//                     {house.host.name}
//                 </p>
//                 <img src={house.host.picture}></img>
//             </div>
//         </div>
//         {house.location}
//         <div>
//             {house.tags}
//             <Stars rating={house.rating} />
//         </div>
//         {house.description}
//         {house.equipments}
//     </div>)