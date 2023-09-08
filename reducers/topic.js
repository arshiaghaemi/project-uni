import actionTypes from "@/configs/actionTypes"

const topic = (state = [], action) => {
    switch (action.type){
        case actionTypes.GET_LIST_TOPIC_STARTED:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                }
        case actionTypes.GET_LIST_TOPIC_SUCCESS:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                topics: action.response
                }
        case actionTypes.GET_LIST_TOPIC_FAILED:
            console.log('action', action)
            return {
                ...state,
                ...action,
                }
        default:
            return state
    }
}

export default topic