import React, {useState} from 'react';

import Modal from 'react-modal';
import Salecard from '../salecard/salecard';
import AppService from '../../servises/app-service';
import directionsData from '../../servises/directions-data';

import {connect} from 'react-redux';

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

const Directions = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formIsOpen, setFormIsOpen] = useState([]);
    const [modalTitle, setModalTitle] = useState(``);
    const [modalContent, setModalContent] = useState(``);
    const [currentDirection, setCurrentDirection] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const openForm = () => {
        setFormIsOpen([...formIsOpen, currentDirection]);
    };

    const directionOpen = (id) => {

        const direction = directionsData.find((item) => item.id === id);

        setModalTitle(direction.title);
        setModalContent(direction.description);
        setCurrentDirection(direction.id);
        openModal();
    };


    const appService = new AppService();

    const {
        userName,
        userPhone,
        setDirectionFormIsSubmited} = props;

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const data = {
            title: `Форма записи на занятие, ${modalTitle}`,
            name: userName,
            phone: userPhone,
            message: ``
        };

        appService.sendMessage(data)
            .then((resolve) => resolve ? setDirectionFormIsSubmited([...directionFormIsSubmited, currentDirection]) : onError())
            .catch(onError);
    };

    const onError = () => {
        // console.info('Error');
    };

    const {directionFormIsSubmited} = props;

    const formContent = directionFormIsSubmited.find((item) => item === currentDirection) ? <div className="contacts__is-submited">Заявка отправлена</div>
        : <form className="postcard__form" onSubmit={handleSubmit}>
            <div className="postcard__subtitle">Заполните форму и мы с вами свяжемся</div>
            <Salecard />
        </form>;

    return (
        <section className="directions">
            <div className="directions__wrap container">

                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    onRequestClose={closeModal}
                    ariaHideApp={false}>
                    <div className="postcard">
                        <h2 className="postcard__title">{modalTitle}</h2>
                        <div className="postcard__content">{modalContent}</div>

                        { directionFormIsSubmited.find((item) => item === currentDirection) || formIsOpen.find((item) => item === currentDirection) ?
                            formContent
                            : <div className="postcard__control"><span onClick={openForm} className="btn">Записаться</span></div> }
                    </div>
                </Modal>

                <div className="directions__list">

                    {directionsData.map((direction) => {
                        return (
                            <div className="directions__item" key={`direction-${direction.id}`}>
                                <div className="directions__info">
                                    <h2 className="directions__title">{direction.title}</h2>
                                    <div className="direction__price">
                                        {direction.prices.map((item, i) => {
                                            return <div key={`price-${i}`} className="directions__single">{item.type} <span>{item.price}р</span></div>;
                                        })}
                                    </div>
                                </div>
                                <div className="directions__more">
                                    <span onClick={() => directionOpen(direction.id)} className="directions__more-btn">Подробнее</span>
                                </div>
                                <p className="directions__description">
                                    {direction.description}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

Directions.propTypes = {
    userName: PropTypes.string,
    userPhone: PropTypes.string,
    userDirection: PropTypes.string,
    directionFormIsSubmited: PropTypes.array,
    setDirectionFormIsSubmited: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        userPhone: state.userPhone,
        directionFormIsSubmited: state.directionFormIsSubmited
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        setDirectionFormIsSubmited: (array) => {
            dispatch({
                type: `DIRECTION_FORM_IS_SUBMITED`,
                payload: array
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
