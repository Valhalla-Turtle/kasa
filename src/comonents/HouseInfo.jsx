function HouseInfo({house}) {
    return (
        <div>
            <h1>
                {house.title}
            </h1>
            <p className="location">{house.location}</p>
        </div>
    );
}

export default HouseInfo