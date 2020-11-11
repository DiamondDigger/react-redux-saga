import { CREATE_POST, FETCH_POST, HIDE_LOADER, SHOW_LOADER } from "./types"

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

export const fetchPost = () => {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        const json = await response.json()
        console.log('fetch data from server')
        setTimeout(() => {
            dispatch({
                type: FETCH_POST,
                payload: json
            })
            dispatch(hideLoader())
        }, 1000)
    }
}