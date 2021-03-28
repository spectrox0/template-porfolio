import {Image} from "./Image";
import {MultiLang} from "./Multilang";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface WorkDesign {
    name: string,
    date: Timestamp,
    description: MultiLang,
    images: Image[],
    img: Image,
    link: string
}