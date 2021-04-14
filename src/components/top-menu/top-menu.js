import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

// import NextParticle from '../next-partical';
import PropTypes from 'prop-types';

const TopMenu = (props) => {

    const isMainClass = props.location.pathname === `/` ? `top-menu top-menu--main` : `top-menu`;

    return (
        <section className={isMainClass}>
            <div className="top-menu__wrapper container">
                <div className="top-menu__logo">
                    <NavLink to="/">
                        {/* <NextParticle /> */}
                        <img src="/images/logo/logo.png" alt="Детский центр Счастье" />
                    </NavLink>
                </div>

                <ul className="top-menu__list">
                    <li className="top-menu__item"><NavLink to="/about" activeClassName="active">Про клуб</NavLink></li>
                    <li className="top-menu__item"><NavLink to="/news" activeClassName="active">Новости</NavLink></li>
                    <li className="top-menu__item"><NavLink to="/price" activeClassName="active">Прайс-лист</NavLink></li>
                    {/* <li className="top-menu__item"><NavLink to="/gallery" activeClassName="active">Фотогалерея</NavLink></li> */}
                    <li className="top-menu__item"><NavLink to="/contacts" activeClassName="active">Контакты</NavLink></li>
                </ul>

                <div className="top-menu__contacts">
                    <a href="tel:89634575432" className="top-menu__phone">8 (963) 457-54-32</a>
                    <NavLink to="/contacts" className="top-menu__address">Вербовая, 4 Тюмень</NavLink>
                    <ul className="top-menu__contacts-list">
                        <li className="top-menu__contacts-item  top-menu__contacts-item--inst">Инстаграмм: <a href="https://www.instagram.com/schaste_tmn/" target="_blank" rel="noopener noreferrer">@schaste_tmn</a></li>
                        <li className="top-menu__contacts-item  top-menu__contacts-item--email">Email: <a href="mailto:info@schaste-club.ru">info@schaste-club.ru</a></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

TopMenu.propTypes = {
    location: PropTypes.object
};

export default withRouter(TopMenu);
