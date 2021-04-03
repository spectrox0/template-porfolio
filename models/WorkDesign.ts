import {Image} from "./Image";
import {MultiLang} from "./Multilang";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {EnumSkill} from "./Skill";

export interface WorkDesign {
    name: string,
    id: number | string
    date: Timestamp,
    description?: MultiLang,
    images?: Image[],
    img: Image,
    skills?: EnumSkill[] | (keyof typeof EnumSkill)[],
    link?: string
}