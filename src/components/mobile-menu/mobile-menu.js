import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const MobileMenu = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const mobileMenuClass = isOpenMenu ? `mobile-menu mobile-menu--open` : `mobile-menu`;
    return (
        <section className={mobileMenuClass} id="mobile-menu">
            <div className="mobile-menu__wrapper">

                <div className="mobile-menu__open" onClick={openMenu} id="mobile-menu-open">
                    <span className="">меню</span>
                </div>

                <ul className="mobile-menu__list">
                    <li ><NavLink activeClassName="active" onClick={openMenu} exact to="/" className="mobile-menu__item link-page">Главная</NavLink></li>
                    <li ><NavLink activeClassName="active" onClick={openMenu} to="/about/" className="mobile-menu__item link-page">Про клуб</NavLink></li>
                    <li ><NavLink activeClassName="active" onClick={openMenu} to="/price/" className="mobile-menu__item link-page">Прайс-лист</NavLink></li>
                    <li ><NavLink activeClassName="active" onClick={openMenu} to="/news/" className="mobile-menu__item link-page">Новости</NavLink></li>
                    {/* <li ><NavLink activeClassName="active" onClick={openMenu} to="/gallery/" className="mobile-menu__item link-page">Фотогалерея</NavLink></li> */}
                    <li ><NavLink activeClassName="active" onClick={openMenu} to="/contacts/" className="mobile-menu__item link-page" href="contacts/">Контакты</NavLink></li>
                </ul>
            </div>
        </section>
    );
};

export default withRouter(MobileMenu);
