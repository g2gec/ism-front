import { types } from "../types/types"

export const addProductToCar = (product) => {
    return async(dispatch, getState) => {

        const { products } = getState().car;

        localStorage.setItem('car', JSON.stringify([...products, product]))

        dispatch(handleAddProduct([...products, product] ))

    }
}

export const getCarProductsSave = () => {
    return async(dispatch) => {
        let car  = localStorage.getItem('car')
        if (car) {
            dispatch( handleAddProduct( JSON.parse(car) ) )
        }
    }
}

export const deleteProductToCar = (id) => {
    return async(dispatch, getState) => {

        const { products } = getState().car;

        let productList = products.filter((e, index) => {
            return index !== id - 1
        })

        localStorage.setItem('car', JSON.stringify(productList))

        dispatch(handleAddProduct(productList))

    }
}

export const clearCar = () => {
    return async(dispatch) => {

        localStorage.setItem('car', JSON.stringify([]))

        dispatch(handleAddProduct([] ))

    }
}



export const handleAddProduct = (products) => ({
    type: types.addToCar,
    payload: products
})

export const handleGetProduct = (products) => ({
    type: types.addToCar,
    payload: products
})