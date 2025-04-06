import { useState } from "react";
import "../styles/collapse.scss";

function Collapsible({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(Array.isArray(content));
    console.log(content)

    return (
        <div className={`collapsible ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="toggle-btn">
                {title}<i className={`fas fa-chevron-up ${isOpen ? "open" : ""}`}></i>
            </button>
            <div className={'content'}>
                {Array.isArray(content) ?
                    <ul>
                        {content.map(equipement => <li key={equipement}>{equipement}</li>)}
                    </ul> :
                    <p>{content}</p>
                }
            </div>
        </div>

    );
}

export default Collapsible;