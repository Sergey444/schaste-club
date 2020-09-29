const setName = (userName) => {
    return {
        type: `SET_NAME`,
        payload: userName
    };
};

const setPhone = (userPhone) => {
    return {
        type: `SET_PHONE`,
        payload: userPhone
    };
};

const setEmail = (userEmail) => {
    return {
        type: `SET_EMAIL`,
        payload: userEmail
    };
};

const setMessage = (userMessage) => {
    return {
        type: `SET_MESSAGE`,
        payload: userMessage
    };
};

const setDirection = (userDirection) => {
    return {
        type: `SET_DIRECTION`,
        payload: userDirection
    };
};

const setContactsFormIsSubmited = () => {
    return {
        type: `CONTACTS_FORM_IS_SUBMITED`,
        payload: true
    };
};

const setDiscountFormIsSubmited = () => {
    return {
        type: `DISCOUNT_FORM_IS_SUBMITED`,
        payload: true
    };
};

const reviewsLoaded = (reviews) => {
    return {
        type: `REVIEWS_LOADED`,
        payload: reviews
    };
};

export {
    setName,
    setEmail,
    setPhone,
    setMessage,
    setDirection,
    setContactsFormIsSubmited,
    setDiscountFormIsSubmited,
    reviewsLoaded
};
