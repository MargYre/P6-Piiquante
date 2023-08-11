import { useState } from 'react';

export default function Accordion(props) {
    const [open, setOpen] = useState(false)

    return (
        <div className={`accordion${open ? ' open' : ''}`}>
            <button className="accordion-header" onClick={() => setOpen(!open)}>
                {props.title}
            </button>
            <div className="accordion-content" style={{ maxHeight: open ? `500px` : '0' }}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
