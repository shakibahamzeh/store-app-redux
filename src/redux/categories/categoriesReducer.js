const initialState = {
    loading: false,
    categories: [],
}

export const categoriesReducer = (state = initialState , action) => { 
    switch(action.type){
        case "FETCH_CATEGORY_REQUEST":
            return {
                ...state,
                loading:true
            }
        case "FETCH_CATEGORY_SUCCESS":
            return {
                loading:false,
                categories: action.payload
            } 
       
        default :
        return state    
    }
}
