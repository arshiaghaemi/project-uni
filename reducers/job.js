import actionTypes from "@/configs/actionTypes"

const job = (state = [], action) => {
    switch (action.type){
        case actionTypes.GET_LIST_JOB_STARTED:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                }
        case actionTypes.GET_LIST_JOB_SUCCESS:
            console.log('action', action)
            return {
                ...state,
                loading: action.loading,
                jobs: action.response
                }
        case actionTypes.GET_LIST_JOB_FAILED:
            console.log('action', action)
            return {
                ...state,
                ...action,
                }
        default:
            return state
    }
}

export default job