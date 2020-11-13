import { showAlert } from "../redux/actions"
import { CREATE_POST } from "../redux/types"

const forbiddenWords = ['fuck', 'suck', 'duck']

export const forbiddenWord = ({dispatch}) => (next) => (action) => {
    if (action.type === CREATE_POST) {
        const found = forbiddenWords.filter( word => action.payload.title.includes(word))
        if (found.length) {
            return dispatch(showAlert('You use incorrect words. Change your sentence.'))
        }
    } 
    return next(action)
}