import bedsOnline from "../api/bedsonline/bedsonline";
import { types } from "../types/types";
import { handleModalProduct, uiShowBarLoading } from "./ui";


export const getDetailsProduct = (id) => {
    return async(dispatch) => {
        dispatch( uiShowBarLoading(true) )
        const request = {
            endpoint: `/hotel-content-api/1.0/hotels/${id}/details?language=CAS&useSecondaryLanguage=False`
        }
        bedsOnline.post('/apicontent', request).then((res) => {
            dispatch( uiShowBarLoading(false) )

            console.log('details hotel', res)

            dispatch(handleGetProduct(res.hotel))
            dispatch(handleModalProduct(true))
            
        })
        .catch((e)=>{
            dispatch( uiShowBarLoading(false) )
            return false;
        })
       
    }
}

export const handleGetProduct = (state) => ({
    type: types.productSelected,
    payload: state
})