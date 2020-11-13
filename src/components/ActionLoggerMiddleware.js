export const actionLogger = ({dispatch}) => (next) => (action) => {
    console.log('action is: ', action.type)
    return next(action)
}