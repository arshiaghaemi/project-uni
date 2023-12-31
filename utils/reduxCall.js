import actionTypes from "@/configs/actionTypes"
import fetchUrl from "./fetchUrl"

const reduxCall = async (dispatch, { url, method, name, body }) => {
    dispatch({
        type: actionTypes[`${name}_STARTED`],
        loading: true,
        logged: true,
    })
    try {
        const response = await fetchUrl({ url, method, body})
        dispatch({
          type: actionTypes[`${name}_SUCCESS`],
          logged: true,
          loading: false,
          response,
        })
    } catch(e) {
        console.error('error', e)
        dispatch({
            type: actionTypes[`${name}_FAILED`],
            loading: false,
            logged: false,
            error: true
        })
    }
}

export default reduxCall