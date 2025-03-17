import { useState } from "react";
import "../styles/collapse.scss";

function Collapsible({ title, contente }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`collapsible ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)} className="toggle-btn">
                {title}
            </button>
            <div className="content">
                <p>{contente}</p>
            </div>
        </div>
    );
}

export default Collapsible;
