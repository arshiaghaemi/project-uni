import reduxCall from "@/utils/reduxCall"

const GET_LIST_TOPIC_ACTION = () => {
    return async (dispatch) => {
        return reduxCall(dispatch,{
            url:'/topic.json',
            method: 'GET',
            name: 'GET_LIST_TOPIC'
        })
    }
}

export { GET_LIST_TOPIC_ACTION }