import reduxCall from "@/utils/reduxCall"

const LOGIN_ACTION = () => {
    return async (dispatch) => {
        return reduxCall(dispatch,{
            url:'/login.json',
            method: 'GET',
            name: 'LOGIN'
        })
    }
}

const REGISTER_ACTION = (body) => {
    return async (dispatch) => {
        return reduxCall(dispatch,{
            url:'/user/register',
            method: 'POST',
            name: 'REGISTER',
            body: body
        })
    }
}

export { LOGIN_ACTION, REGISTER_ACTION }