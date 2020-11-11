import { 
    CREATE_POST, 
    FETCH_POST,
    HIDE_LOADER,
    SHOW_LOADER, 
    SHOW_ALERT, 
    HIDE_ALERT 
} from "./types"

export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
})

export const showLoader = () => ({
    type: SHOW_LOADER
})

export const hideLoader = () => ({
    type: HIDE_LOADER
})

export const showAlert = (text) => {
    return dispatch =>{
        dispatch({
            type: SHOW_ALERT,
            payload: text
            })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export const hideAlert = () => ({
    type: HIDE_ALERT
})

export const fetchPost = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch('htps://jsonplaceholder.typicode.com/posts?_limit=3')
            const json = await response.json()
            console.log('fetch data from server')
            // setTimeout only for the educational purposes 
            setTimeout(() => {                     
                dispatch({
                    type: FETCH_POST,
                    payload: json
                })
                dispatch(hideLoader())
            }, 1000) 
        }catch (e) {
            dispatch(hideLoader())
            dispatch(showAlert('Something went wrong'))
            console.log(e)
        }
    }
}