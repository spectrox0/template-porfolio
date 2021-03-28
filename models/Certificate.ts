import {MultiLang} from "./Multilang";
import {Image} from "./Image";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Certificate {
    name: string,
    date: Timestamp,
    description: MultiLang,
    images: Image[],
    img: Image,
    link: string
}