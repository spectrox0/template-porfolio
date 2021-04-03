import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchDataFirebase} from '../redux/actions/firebase'

interface Input {
    nameCollection: string,

}

interface Output {
    loading: boolean,
    collection: any[]
    error: boolean,
}

export const useFirebase = ({nameCollection}: Input): Output => {
    const dispatch = useDispatch()
    // @ts-ignore
    const {loading, error, ...rest} = useSelector(state => ({
        ...state,
    }))

    useEffect(() => {
        if (!rest[nameCollection]) {
            dispatch(fetchDataFirebase({collectionName: nameCollection}))
        } else if (!rest[nameCollection].length) {
            dispatch(fetchDataFirebase({collectionName: nameCollection}))
        }
    }, [])

    return {
        loading,
        collection: [nameCollection],
        error,
    }
}