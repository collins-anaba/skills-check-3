import  { createStore } from "redux"
let initialState = {
    name: "",
    address: "",
    city: "",
    State: "",
    zip: 0,
    img: "",
    mortgageAmount: 0,
    monthlyRent: 0,
    products: [],

}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_CITY = "UPDATE_CITY"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_ZIP = "UPDATE_ZIP"
export const UPDATE_IMG = "UPDATE_IMG"
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
export const UPDATE_RENT = "UPDATE_RENT"
export const PRODUCTS = "PRODUCTS"

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: payload
            }
        case UPDATE_CITY:
            return {
                ...state,
                city: payload
            }
        case UPDATE_STATE:
            return {
                ...state,
                State: payload
            }
        case UPDATE_ZIP:
            return {
                ...state,
                zip: payload
            }
        case UPDATE_IMG:
            return {
                ...state,
                img: payload
            }
        case UPDATE_MORTGAGE:
            return {
                ...state,
                mortgageAmount: payload
            }
        case UPDATE_RENT:
            return {
                ...state,
                monthlyRent: payload
            }
        case PRODUCTS:
            const { name,
                address,
                city,
                State,
                zip,
                img,
                mortgageAmount,
                monthlyRent } = state;
            const product = { name,
                address,
                city,
                State,
                zip,
                img,
                mortgageAmount,
                monthlyRent };
            const newProduct = [...state.products, product]
            return {
                ...state,
                products: newProduct
            }
        default:
            return state

    }
}

export default createStore(reducer)