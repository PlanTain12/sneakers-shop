import React from "react";


function Filter({items}) {

    const [visPop, setVisPop] = React.useState(false);

    const [activeItem, setActiveItem] = React.useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisPop(false);
    };

    const activeName = items[activeItem].name;

    const toggleVisPop = () => {
        setVisPop(!visPop)
    };


    return <>
                    <div className="hs-p1__sort s-p1">
                        <div className={visPop ? "s-p1__area active" : "s-p1__area"}></div>
                        <div className="s-p1__type" onClick={toggleVisPop}>
                            <p>сначала: </p>
                            <span>{activeName}</span>
                        </div>
                        <div className={visPop ? "s-p1__popup active" : "s-p1__popup"}>
                        {items.map((obj, index) => (
                            <li 
                            onClick={() => onSelectItem(index)}
                            className={activeItem === index ? 'active' : ''} 
                            key={`${obj.type}_${index}`}
                            >
                                {obj.name}
                            </li>
                        ))}
                        </div>
                    </div>
    </>
};


export default Filter;