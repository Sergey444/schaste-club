import React, {Fragment, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {setName, setPhone, setDirection} from '../../actions';
import InputMask from 'react-input-mask';

import PropTypes from 'prop-types';

const Salecard = (props) => {

    const {userName, userPhone} = props;

    const inputRef = useRef(null);

    useEffect(() => {
        if (!userName) {
            inputRef.current.focus();
        }
    }, []);

    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;

        switch (name) {
        case `userName`:
            return props.setName(value);
        case `userPhone`:
            return props.setPhone(value);
        case `userDirection`:
            return props.setDirection(value);
        default:
            return false;
        }
    };

    return (
        <Fragment>
            <div className="form-row">
                <input
                    id="name"
                    type="text"
                    name="userName"
                    ref={inputRef}
                    onChange={handleChange}
                    value={userName}
                    required />
                <label>Ваше имя</label>
            </div>
            <div className="form-row">
                <InputMask
                    mask="+7 (999) 999-99-99"
                    onChange={handleChange}
                    value={userPhone}
                    name="userPhone"
                    type="text"
                    required/>
                <label>Ваш телефон</label>
            </div>
            {/* <div className="form-row">
                <select required className="postcard__select" name="userDirection" onChange={handleChange} value={userDirection}>
                    <option value="">Выберите направление</option>
                    <option value="Птенчики">Птенчики</option>
                    <option value="Умничка">Умничка</option>
                    <option value="Клуб будущего первокласника">Клуб будущего первокласcника</option>
                    <option value="Я есть">Я есть</option>
                    <option value="Арт-студия «Счастье в ладошках»">Арт-студия «Счастье в ладошках»</option>
                </select>
            </div> */}
            <div className="form-agree">
                <input type="checkbox" name="agree" id="agree" value="on" required/>
                <label htmlFor="agree" className="postcard__checkbox"><a href="/offer">Cогласен</a> на обработку и передачу персональных данных в соответствии с <NavLink to="/policy">пользовательским соглашением</NavLink></label>
            </div>
            <div className="form-row">
                <input type="submit" className="btn" value="Отправить сообщение" />
            </div>
        </Fragment>
    );
};

Salecard.propTypes = {
    userName: PropTypes.string,
    userPhone: PropTypes.string,
    userDirection: PropTypes.string,
    setName: PropTypes.func,
    setPhone: PropTypes.func,
    setDirection: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        userPhone: state.userPhone,
        userDirection: state.userDirection,
    };
};

const mapDispatchToProps = {
    setName,
    setPhone,
    setDirection
};

export default connect(mapStateToProps, mapDispatchToProps)(Salecard);
