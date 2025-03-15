import "../styles/banner.scss"

function Banner({quote,image}) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1>{quote}</h1>
        </div>
    )
}

export default Banner

