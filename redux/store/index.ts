import {useMemo} from 'react'
import {AnyAction, applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {FAILURE_GET_DATA_FIREBASE, GET_DATA_FIREBASE, SET_LOAD, SUCCESS_GET_DATA_FIREBASE, SET_ALERT} from '../actionTypes'
import {WorkDesign} from '../../models/WorkDesign'
import {Certificate} from "../../models/Certificate"

interface Alert {
    type: string
    message: string
}
interface State {
    work?: WorkDesign,
    loading: boolean,
    errorWorks: boolean,
    isOpen: false,
    worksDesign: WorkDesign[]
    certificates: Certificate[]
    alert?: Alert | null
}

const initialState: State = {
    loading: false,
    errorWorks: false,
    isOpen: false,
    worksDesign: [],
    certificates: [],
    alert: undefined
}


const reducer = (state: State & any = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_DATA_FIREBASE: {
            return {
                ...state,
                loading: true,
            }
        }
        case SUCCESS_GET_DATA_FIREBASE: {
            const data = action.payload
            return {
                ...state,
                ...data,
                loading: false,
            }
        }
        case FAILURE_GET_DATA_FIREBASE: {
            return {
                ...state,
                loading: false,
            }
        }
        case SET_LOAD: {
            const {loading} = action.payload
            return {
                ...state,
                loading
            }
        }
        case SET_ALERT: {
            const {alert} = action.payload
            return {
                ...state,
                alert
            }
        }
        default:
            return state
    }
}


let store: any

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = (preloadedState: State) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState: State) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}


export default useStore
