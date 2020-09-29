import React from 'react';

const FeedbackPage = () => {
    return (
        <section className="feedback">
            <div className="feedback__wrapper container">
                <div className="feedback__title">
                    Заполните ваши данные и вы получите единоразовую скидку на любое направление!
                </div>
                <div className="feedback__content">
                    <form className="postcard" action="https://app.schaste-club.ru/message-from-site/create/" >
                        <div className="form-row">
                            <input name="name" type="text" required />
                            <label>Ваше имя</label>
                        </div>
                        <div className="form-row">
                            <input name="name" type="text" required />
                            <label>Ваш телефон</label>
                        </div>
                        <div className="form-agree">
                            <input type="checkbox" name="agree" id="agree"/>
                            <label htmlFor="agree" className="postcard__checkbox"><a href="/#">Cогласен</a> на обработку и передачу персональных данных в соответствии с <a href="/#">пользовательским соглашением</a></label>
                        </div>
                        <div className="form-row">
                            <input type="submit" className="btn" value="Отправить сообщение" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FeedbackPage;
