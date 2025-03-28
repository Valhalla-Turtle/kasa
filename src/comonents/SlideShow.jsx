import { useState } from 'react';
import "../styles/slider.scss";

function SlideShow({pictures}) {
    const nbimage = pictures.length;
    const [index, setIndex] = useState(0);
    const nextImage = () => { setIndex((prevIndex) => (prevIndex + 1) % pictures.length); }
    const prevImage = () => { setIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length); }

    return (
        <div className='slider'>
            <div className='sliderimage' style={{ backgroundImage: `url(${pictures[index]})` }}>
                <div className='sliderbutton'>
                    <button className='prevbutton' onClick={prevImage}><i className="fas fa-chevron-left" /></button>
                    <div className='index'>{index + 1}/{pictures.length}</div>
                    <button className='nextbutton' onClick={nextImage}><i className="fas fa-chevron-right" /></button>
                </div>
            </div>
        </div>
    )
}

export default SlideShow

