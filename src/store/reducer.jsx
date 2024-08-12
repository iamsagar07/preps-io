import {
    ADDING_TO_CART,
    GET_PRODUCTS_SUCCESS,

    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_USER_DATA_SUCCESS,
    GET_USER_SUCCESS,

} from "./constants";

const myFirstReducer = (
    state = { users: [], products: [], singleProduct: {}, singleUser: [], myCart: [] },
    action
) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return { ...state, users: action.payload };
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.products };
        case GET_SINGLE_PRODUCT_SUCCESS:
            return { ...state, singleProduct: action.payload };
        case GET_SINGLE_USER_DATA_SUCCESS:
            return { ...state, singleUser: action.payload };
        case ADDING_TO_CART:
            return { ...state, myCart: action.payload}
        default:
            return state;
    }
};
export default myFirstReducer;
