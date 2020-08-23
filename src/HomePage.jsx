import React from "react";
import './homepage.scss';

const HomePage = () => {

    return (
        <div className="homepage">
            <div className="homepage__directory-menu directory-menu">
                <div className="directory-menu__menu-item menu-item">
                    <div className="menu-item__content">
                        <h1 className="menu-item__title">HATS</h1>
                        <span className="menu-item__subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="directory-menu__menu-item menu-item">
                    <div className="menu-item__content">
                        <h1 className="menu-item__title">JACKETS</h1>
                        <span className="menu-item__subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="directory-menu__menu-item menu-item">
                    <div className="menu-item__content">
                        <h1 className="menu-item__title">SNEAKERS</h1>
                        <span className="menu-item__subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="directory-menu__menu-item menu-item">
                    <div className="menu-item__content">
                        <h1 className="menu-item__title">WOMENS</h1>
                        <span className="menu-item__subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="directory-menu__menu-item menu-item">
                    <div className="menu-item__content">
                        <h1 className="menu-item__title">MENS</h1>
                        <span className="menu-item__subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;