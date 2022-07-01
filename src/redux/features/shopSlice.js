import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    loading: false,
    err:{}
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers:{
        addProduct : () => {
            console.log('add produc')
        }
    }
})

export const { addProduct } = shopSlice.actions

export default shopSlice.reducer

