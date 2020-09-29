import React from 'react';
// import Map from '../map';
import Postcard from '../postcard';
import {connect} from 'react-redux';
import AppService from '../../servises/app-service';
import MetaTags from 'react-meta-tags';

import PropTypes from 'prop-types';

const ContactsPage = (props) => {

    const appService = new AppService();
    const {contactsFormIsSubmited} = props;

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const {userName, userPhone, userMessage, setContactsFormIsSubmited} = props;

        const data = {
            title: `Форма со страницы «Контакты»`,
            name: userName,
            phone: userPhone,
            message: userMessage
        };
        // eslint-disable-next-line no-console
        console.log(`data`, data);

        appService.sendMessage(data)
            .then((resolve) => {
                if (resolve) {
                    return setContactsFormIsSubmited();
                }
                return onError();
            })
            .catch(onError);
    };

    const onError = () => {
        // setError(true);
        // console.log('Error');
    };

    const content = contactsFormIsSubmited ?
        <h3 className="contacts__is-submited">Форма успешно отправлена!</h3> :
        <Postcard />;

    return (
        <section className="contacts">
            <MetaTags>
                <title>Контакты детского центра Счастье, официальный сайт детского сада</title>
                <meta name="description" content="Детский клуб Счастье Тюмень, войновка, восточный микрорайон, сайт детского сада, детские сады тюмень, адрес детского центра" />
            </MetaTags>
            <h1 className="title__hidden">Сайт детского центра</h1>
            <div className="contacts__wrapper container">

                {/* <Map /> */}

                <div className="contacts__block">
                    <div className="contacts__info">
                        <div className="contacts__item"><b>Адрес:</b> Тюмень, ул. Вербовая 4 </div>
                        <div className="contacts__item"><b>Руководитель клуба:</b> <a href="tel:89220700090">8 (922) 07-000-90</a></div>
                        <div className="contacts__item"><b>Администратор:</b> <a href="tel:89634575432">8 (963) 457-54-32</a></div>
                        <div className="contacts__item"><b>Email:</b> <a href="mailto:info@schaste-club.ru">info@schaste-club.ru</a></div>
                        <div className="contacts__item"><b>Режим работы:</b> с 9:00 до 20:00</div>
                    </div>
                    <div className="contacts__call">
                        <div className="contacts__title">Уточните интересующие вас вопросы:</div>
                        <form className="postcard" onSubmit={handleSubmit}>
                            {content}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

ContactsPage.propTypes = {
    userName: PropTypes.string,
    userPhone: PropTypes.string,
    userMessage: PropTypes.string,
    setContactsFormIsSubmited: PropTypes.func,
    contactsFormIsSubmited: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        userPhone: state.userPhone,
        userMessage: state.userMessage,
        contactsFormIsSubmited: state.contactsFormIsSubmited
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        setContactsFormIsSubmited: () => {
            dispatch({
                type: `CONTACTS_FORM_IS_SUBMITED`,
                payload: true
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);


