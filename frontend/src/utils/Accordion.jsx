import React, {useState} from 'react';

const Accordion = ({title,content}) => {
    const [isActive, setIsActive] = useState(null);
    const toggleOpen = id => () => setIsActive(
        isActive => isActive === id ? null : id,
    );
    
    return(
        <div className="accordion">
            <div className="accordion-title" onClick={() => setIsActive( (prevIsActive) => !prevIsActive)}>
                <div>{title}</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;