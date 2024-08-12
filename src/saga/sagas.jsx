import { call, put, takeEvery } from "redux-saga/effects"
import { ADDING_TO_CART, ADDING_TO_CART_FAILIURE, ADDING_TO_CART_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_USER_DATA, GET_SINGLE_USER_DATA_FAILURE, GET_SINGLE_USER_DATA_SUCCESS, GET_USER, GET_USER_DATA, GET_USER_DATA_FAILED, GET_USER_DATA_SUCCESS, GET_USER_SUCCESS, UPDATE_USER_DATA, UPDATE_USER_DATA_FAILURE, UPDATE_USER_DATA_SUCCESS, USER_DELETE, USER_DELETE_FAILIURE, USER_DELETE_SUCCESS } from "../store/constants";
import axios from "axios";
import { BASE_URL } from "../API/api";
import { getUserFetch } from "../store/action";



const productFetch = () => {
    return axios.get(`https://fakestoreapi.com/products`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        })

}



function* workGetUsersFetch() {
    
    try {
        const response = yield call(axios.get, BASE_URL)
        yield put({ type: GET_USER_SUCCESS, payload: response.data });
        console.log(response.data)
    } catch (error) {
        console.error('Failed to upload user:', error);
        yield put({ type: GET_USER_DATA_FAILED, payload: error.message });
    }
}
function* workFetchProducts() {
    const products = yield call(productFetch)
    yield put({ type: GET_PRODUCTS_SUCCESS, products })
}

function* fetchSingleProduct(action) {
    try {
        const response = yield call(axios.get, `https://fakestoreapi.com/products/${action.id}`);
        console.log("Added item")
        yield put({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Failed to fetch single product:', error);
    }
}

function* workUploadUser(action) {
    const url = BASE_URL;
    const { username, password } = action.body;
    try {
        const response = yield call(axios.post, url, {
            username,
            password
        });
        console.log("Added user with", username);
        yield put({ type: GET_USER_DATA_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Failed to upload user:', error);
        yield put({ type: GET_USER_DATA_FAILED, payload: error.message });
    }
}

function* workGetSingleUser(action) {
    
    try {
        const response = yield call(axios.get, BASE_URL +"/" +action.id)
        yield put({ type: GET_SINGLE_USER_DATA_SUCCESS, payload: response.data });
        console.log(response.data)
    } catch (error) {
        console.error('Failed to upload user:', error);
        yield put({ type: GET_SINGLE_USER_DATA_FAILURE, payload: error.message });
    }
}

function* workUpdateUser(action) {
    console.log("updatinng...")
    const {id, username, password } = action.body;
    try {
        const response = yield call(axios.put, BASE_URL +"/" +id, {
            username,
            password
        });
        console.log("Updated user with : ", username);
        yield put({ type: UPDATE_USER_DATA_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Failed to upload user:', error);
        yield put({ type: UPDATE_USER_DATA_FAILURE, payload: error.message });
    }
}

function* workDeleteUser(action) {
    try {
        const response = yield call(axios.delete, BASE_URL  + "/" + action.id);
        yield put({ type: USER_DELETE_SUCCESS, payload: response.data });
        console.log("User deleted with id : ", action.id);
        yield put(getUserFetch())
    } catch (error) {
        console.error('Failed to delete user:', error);
        yield put({ type: USER_DELETE_FAILIURE, payload: error.message });
    }
}

function* workAddToCart(action) {
    const url = BASE_URL;
    const { id, title, price, image, description } = action.body;
    try {
        const response = yield call(axios.post, url, {
            id,
            title,
            price,
            image,
            description
        });
        console.log("Added to cart with", title);
        yield put({ type: ADDING_TO_CART_SUCCESS, payload: response.data });
    } catch (error) {
        console.error('Failed to upload user:', error);
        yield put({ type: ADDING_TO_CART_FAILIURE, payload: error.message });
    }
}

function* mySaga() {
    yield takeEvery(GET_USER, workGetUsersFetch)
    yield takeEvery(GET_PRODUCTS, workFetchProducts)
    yield takeEvery(GET_SINGLE_PRODUCT, fetchSingleProduct)
    yield takeEvery(GET_USER_DATA, workUploadUser)
    yield takeEvery(GET_SINGLE_USER_DATA, workGetSingleUser)
    yield takeEvery(UPDATE_USER_DATA, workUpdateUser)
    yield takeEvery(USER_DELETE, workDeleteUser)
    yield takeEvery(ADDING_TO_CART, workAddToCart)
}

export default mySaga;