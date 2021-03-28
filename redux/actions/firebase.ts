import { GET_DATA_FIREBASE, SUCCESS_GET_DATA_FIREBASE, FAILURE_GET_DATA_FIREBASE} from '../actionTypes'
import { db } from '../../firebase.config'
export const getDataFirebase = (payload = {}) => ({
    type: GET_DATA_FIREBASE,
    ...payload,
})

export const failureGetDataFirebase = (payload ={}) => ({
    type: FAILURE_GET_DATA_FIREBASE,
    ...payload,
})

export const successGetDataFirebase = (payload: object = {}) => ({
    type: SUCCESS_GET_DATA_FIREBASE,
    ...payload,
})
interface ParamsFetchData {
    collectionName: string
}
export const fetchDataFirebase = ({collectionName} : ParamsFetchData) => {
    return (dispatch: (action) => void) => {
        dispatch(getDataFirebase())
        try {
            db.collection(collectionName).onSnapshot(snapshots => {
                const arr: any[] = []
                snapshots.forEach(doc => arr.push({ ...doc.data(), id: doc.id }))
                dispatch(successGetDataFirebase({ payload: { [collectionName]: arr } }))
            })
        } catch (error) {
            console.log(error)
            dispatch(failureGetDataFirebase({ payload: { error: 'Error '} }))
        }

    }
}
