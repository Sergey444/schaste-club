import React from 'react';


const Envelope = () => {
    return (
        <section className="send">
            <div className="container">
                <div className="envelope" id="envelope">
                    <div className="envelope_close">
                        <img src="images/envelope/envelope_cover_in.png" className="envelope_cover_in" alt="" />
                        <img src="images/envelope/envelope_cover_in2.png" className="envelope_cover_in_back" alt="" />
                    </div>

                    <img src="images/envelope/envelope_in.png" className="envelope_in" alt="" />
                    <img src="images/envelope/envelope_out_top.png" className="envelope_out_top" alt="" />
                    <img src="images/envelope/envelope_out_bottom.png" className="envelope_out_bottom" alt="" />

                    <div className="letter" id="letter">
                        <img src="images/envelope/letter.png" className="letter_img" alt="" />
                        <div className="letter_content">

                            <form action="/" className="envelope_form" autoComplete="off">
                                <div>Заполните форму и получите материалы для подготовки к школе на Ваш email </div>
                                <div className="form_controll">
                                    <label htmlFor="">Меня зовут:</label>
                                    <input type="text" name="name" onFocus="this.removeAttribute('readonly')" autoComplete="off" className="envelope__input input_name" />
                                    <span></span>
                                </div>

                                <div className="form_controll">
                                    <label htmlFor="">Мой телефон:</label>
                                    <input type="text" name="phone" onFocus="this.removeAttribute('readonly')" autoComplete="off" className="envelope__input" />
                                </div>
                                <div className="form_controll">
                                    <label htmlFor="">Мой email:</label>
                                    <input type="text" name="email" onFocus="this.removeAttribute('readonly')" autoComplete="off" className="envelope__input" />
                                </div>
                                <div className="form_control form_control--btn">
                                    <span className="envelope_btn" id="envelope-send">Отправить</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Envelope;
