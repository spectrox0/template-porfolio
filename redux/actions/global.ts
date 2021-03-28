import {SET_LOAD} from '../actionTypes'


export const setLoading = (payload = {}) => ({
    type: SET_LOAD,
    ...payload,
})

export const setLoad = ({value}: { value: boolean }) => {
    return (dispatch: (action) => void) => {
        dispatch(setLoading({loading: value}))
    }
}