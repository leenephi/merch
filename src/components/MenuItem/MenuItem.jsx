import React from "react";
import './menu-item.scss';


const MenuItem = ({title, imageUrl, size}) => {

    return (
        <div className={`directory-menu__menu-item menu-item ${size}`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>
            <div className="menu-item__content">
                <h1 className="menu-item__title">{title.toUpperCase()}</h1>
                <span className="menu-item__subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;