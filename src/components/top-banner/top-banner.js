import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import AppService from '../../servises/app-service';
import Salecard from '../salecard';

import PropTypes from 'prop-types';

const customStyles = {
    content: {
        top: `50%`,
        left: `50%`,
        right: `auto`,
        bottom: `auto`,
        marginRight: `-50%`,
        transform: `translate(-50%, -50%)`,
        maxWidth: `700px`,
    }
};

const TopBanner = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const {
        userName,
        userPhone,
        userDirection,
        discountFormIsSubmited} = props;

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const appService = new AppService();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const {setDiscountFormIsSubmited} = props;

        const data = {
            title: `Форма с главной страницы, «Получить скидку»`,
            name: userName,
            phone: userPhone,
            message: userDirection
        };

        appService.sendMessage(data)
            .then((resolve) => resolve ? setDiscountFormIsSubmited() : onError())
            .catch(onError);
    };

    const onError = () => {
        // console.info('Error');
    };

    const content = discountFormIsSubmited ?
        <h3 className="contacts__is-submited">Форма успешно отправлена!</h3> :
        <Salecard/>;


    return (
        <section className="top-banner">
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={closeModal}
                ariaHideApp={false}>
                <form className="postcard" onSubmit={handleSubmit}>
                    {content}
                </form>
            </Modal>

            <div className="top-banner__wrapper container">
                <h1 className="top-banner__title">Детский клуб &quot;Счастье&quot;</h1>

                <div className="top-banner__info">
                    <div className="top-banner__subtitle">Записывайтесь к нам на занятия</div>

                    <ul className="top-banner__list">
                        <li className="top-banner__item">Мини-сад (1,8 - 4 лет)</li>
                        <li className="top-banner__item">Подготовка к школе (6-7 лет)</li>
                        <li className="top-banner__item">Логопед (от 2 лет)</li>
                    </ul>

                    <div className="top-banner__block">
                        <span className="top-banner__btn" onClick={openModal}>Получить бесплатное занятие</span>
                        <div className="top-banner__discount"><span>Узнайте</span> как получить дополнительное<br /> <span>занятие</span> прямо сейчас</div>
                    </div>
                </div>

                <div className="top-banner__contacts">
                    <ul className="top-banner__contacts-list">
                        <li className="top-banner__contacts-item  top-banner__contacts-item--inst"><a href="https://www.instagram.com/schaste.tmn/" target="_blank" rel="noopener noreferrer">@schaste.tmn</a></li>
                        <li className="top-banner__contacts-item  top-banner__contacts-item--vk"><a href="https://www.youtube.com/channel/UCQoy0pZgoff4szzLe2mhzCw" target="_blank" rel="noopener noreferrer">Детский клуб «Счастье»</a></li>
                        <li className="top-banner__contacts-item  top-banner__contacts-item--email"><a href="mailto:info@schaste-club.ru">info@schaste-club.ru</a></li>
                        <li className="top-banner__contacts-item  top-banner__contacts-item--address"><Link to="/contacts">Вербовая, 4</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

TopBanner.propTypes = {
    userName: PropTypes.string,
    userPhone: PropTypes.string,
    userDirection: PropTypes.string,
    discountFormIsSubmited: PropTypes.bool,
    setDiscountFormIsSubmited: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        userPhone: state.userPhone,
        userDirection: state.userDirection,
        discountFormIsSubmited: state.discountFormIsSubmited
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        setDiscountFormIsSubmited: () => {
            dispatch({
                type: `DISCOUNT_FORM_IS_SUBMITED`,
                payload: true
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBanner);
