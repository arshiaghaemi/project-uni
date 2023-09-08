import actionTypes from "@/configs/actionTypes"

const auth = (state = [], action) => {
    switch (action.type){
        case actionTypes.LOGIN_STARTED:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                logged: action.logged
                }
        case actionTypes.LOGIN_SUCCESS:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                logged: action.logged,
                response: action.response
                }
        case actionTypes.LOGIN_FAILED:
            console.log('action', action)
            return {
                ...state,
                ...action
                }
        case actionTypes.REGISTER_STARTED:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                logged: action.logged
                }
        case actionTypes.REGISTER_SUCCESS:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                logged: action.logged,
                response: action.response
                }
        case actionTypes.REGISTER_FAILED:
            console.log('action', action)
            return {
                ...state,
                ...action
                }
        default:
            return state
    }
}

export default auth