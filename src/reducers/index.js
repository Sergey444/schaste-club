const initialState = {
    userName: ``,
    userEmail: ``,
    userPhone: ``,
    userMessage: ``,
    userDirection: ``,
    contactsFormIsSubmited: false,
    discountFormIsSubmited: false,
    directionFormIsSubmited: [],
    reviews: {},
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
    case `SET_NAME`:
        return {
            ...state,
            userName: action.payload
        };
    case `SET_PHONE`:
        return {
            ...state,
            userPhone: action.payload,
        };
    case `SET_EMAIL`:
        return {
            ...state,
            userEmail: action.payload,
        };
    case `SET_MESSAGE`:
        return {
            ...state,
            userMessage: action.payload
        };
    case `SET_DIRECTION`:
        return {
            ...state,
            userDirection: action.payload
        };
    case `CONTACTS_FORM_IS_SUBMITED`:
        return {
            ...state,
            contactsFormIsSubmited: action.payload
        };
    case `DISCOUNT_FORM_IS_SUBMITED`:
        return {
            ...state,
            discountFormIsSubmited: action.payload
        };
    case `DIRECTION_FORM_IS_SUBMITED`:
        return {
            ...state,
            directionFormIsSubmited: action.payload
        };
    case `REVIEWS_LOADED`:
        return {
            ...state,
            reviews: action.payload
        };
    default:
        return state;
    }
};

export default reducer;
