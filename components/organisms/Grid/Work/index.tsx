import * as React from 'react';
import {WorkDesign} from "../../../../models/WorkDesign";
import {CardWork} from "../../../molecules/Card/Work";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import firebase from "firebase";
const Timestamp = firebase.firestore.Timestamp;

interface Props {
    works: WorkDesign[]
    onClick?: (work: WorkDesign, coordinate: { x: number, y: number }, size: { width: number, height: number }) => void
}

export const GridWork: React.FC<Props> = ({works, onClick}) => {
    return (
        <div className={'container'}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1600: 4}}
            >
                <Masonry columnsCount={3} gutter="3px">
                    {works.map((work, i) => (
                        <CardWork key={work.id} {...work} onClick={onClick}/>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}