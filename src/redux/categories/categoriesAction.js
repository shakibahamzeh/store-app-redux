import axios from "axios";

const fetchCategoriesRequest = () => {
    return {
        type: "FETCH_CATEGORY_REQUEST"
    }
}

const fetchCategoriesSuccess = products => {
    return {
        type: "FETCH_CATEGORY_SUCCESS",
        payload: products
    }
}



export const fetchCategories = () => {
    return(dispatch) => {
        dispatch(fetchCategoriesRequest())
        axios.get("https://api.escuelajs.co/api/v1/categories")
        .then(response =>{
            const categories = response.data
            dispatch(fetchCategoriesSuccess(categories))
        })
        
    }
}