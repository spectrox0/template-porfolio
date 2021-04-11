import axios from 'axios'
import {setAlert, setLoading} from "./global";
import {successGetData} from "./firebase";
import {WorkDesign} from "../../models/WorkDesign";
import {endpointGetWork} from "../../utils/endpoints";




export const getWorksRestAPI = () => {
    return (dispatch) => {
        dispatch(setLoading(true))
        axios.get(endpointGetWork).then(({data}: {data: WorkDesign[]}) => {

            dispatch(successGetData({works:data}))
        }).catch(err => {
            dispatch(setAlert({message: "Error", type: "error"}))
        }).finally(() => {
            dispatch(setLoading(false))
        })
    }
}
