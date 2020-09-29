import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import InputMask from 'react-input-mask';
import {setName, setPhone, setMessage} from '../../actions';

import PropTypes from 'prop-types';

const Postcard = (props) => {

    const {userName, userPhone, userMessage} = props;

    const handleChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;

        switch (name) {
        case `userName`:
            return props.setName(value);
        case `userPhone`:
            return props.setPhone(value);
        case `userMessage`:
            return props.setMessage(value);
        default:
            return false;
        }
    };

    return (
        <React.Fragment>
            <div className="form-row">
                <input type="text" id="name" name="userName" onChange={handleChange} value={userName} required />
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
            <div className="form-row">
                <textarea rows="3" name="userMessage" onChange={handleChange} value={userMessage} ></textarea>
                <label>Ваше сообщение</label>
            </div>
            <div className="form-agree">
                <input type="checkbox" name="agree" id="agree" value="on" required/>
                <label htmlFor="agree" className="postcard__checkbox"><a href="/#">Cогласен</a> на обработку и передачу персональных данных в соответствии с <NavLink to="/policy">пользовательским соглашением</NavLink></label>
            </div>
            <div className="form-row">
                <input type="submit" className="btn" value="Отправить сообщение" />
            </div>
        </React.Fragment>
    );
};

Postcard.propTypes = {
    userName: PropTypes.string,
    userPhone: PropTypes.string,
    userMessage: PropTypes.string,
    setName: PropTypes.func,
    setPhone: PropTypes.func,
    setMessage: PropTypes.func,
};


const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        userPhone: state.userPhone,
        userMessage: state.userMessage
    };
};

const mapDispatchToProps = {
    setName,
    setPhone,
    setMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Postcard);
