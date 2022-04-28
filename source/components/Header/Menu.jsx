import React from "react";


function Menu({items}) {

    const [activeItem, setActiveItem] = React.useState(null);


    const onSelectItem = (index) => {
        setActiveItem(index);
    };

    const activeName = items[activeItem];



    return <>
            <div className="hs-p1__menu">
                <li onClick={() => onSelectItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
                {items.map((name, index) => (
                    <li 
                    onClick={() => onSelectItem(index)}
                    className={activeItem === index ? 'active' : ''} 
                    key={`${name}_${index}`}
                    >
                        {name}
                    </li>
                ))}
            </div>
    </>
};


export default Menu;