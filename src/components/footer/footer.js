import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__wrapper  container">
                <div className="footer__question">Остались вопросы?</div>
                <div className="footer__block"><span className="footer__call">Звоните</span> <a href="tel:89634575432" className="footer__phone">8 (963) 457-54-32</a></div>

                <ul className="footer__social ">
                    <li className="top-banner__contacts-item  top-banner__contacts-item--inst"><a href="https://www.instagram.com/schaste.tmn/" rel="noopener noreferrer" target="_blank">@schaste.tmn</a></li>
                    <li className="top-banner__contacts-item  top-banner__contacts-item--vk"><a href="https://www.youtube.com/channel/UCQoy0pZgoff4szzLe2mhzCw" rel="noopener noreferrer" target="_blank">Детский клуб «Счастье»</a></li>
                    <li className="top-banner__contacts-item  top-banner__contacts-item--email"><a href="mailto:info@schaste-club.ru" >info@schaste-club.ru</a></li>
                    <li className="top-banner__contacts-item  top-banner__contacts-item--address"><Link to="/contacts" >Вербовая, 4</Link></li>
                    <li className="top-banner__contacts-item"><Link to="/policy" >Пользовательское соглашение</Link></li>
                    <li className="top-banner__contacts-item"><Link to="/offer" >Договор оферты</Link></li>
                </ul>

                {/* <div className="footer__wrapper ">
                    <div className="footer__coopiright">
                        Разработка сайта <a href="https://wowsling.ru" target="_blank">WoWSling</a> © 2013-<?//= date('Y') ?>
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
