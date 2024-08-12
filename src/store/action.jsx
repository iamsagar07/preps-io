import { ADDING_TO_CART, GET_PRODUCTS, GET_SINGLE_PRODUCT, GET_SINGLE_USER_DATA, GET_USER, GET_USER_DATA, UPDATE_USER_DATA, USER_DELETE } from "./constants";

export const getUserFetch = () => ({
    type: GET_USER,
})

export const GetProducts = () => ({
    type: GET_PRODUCTS
})

export const GetSingleProduct = (id) => ({

    type: GET_SINGLE_PRODUCT,
    id
})

export const GetUserData = (body) => ({
    type: GET_USER_DATA,
    body
})

export const GetSingleUser = (id) => ({
    type: GET_SINGLE_USER_DATA,
    id
})

export const UpdateUserData = (body) => ({
    type: UPDATE_USER_DATA,
    body
})

export const DeleteUser = (id) => {
    console.log("Action called: ", id)
    return {

        type: USER_DELETE,
        id

    }
}

export const AddToCart = (body) => {
    console.log("My body is", body)
    return {
        type: ADDING_TO_CART,
        body
    }
}