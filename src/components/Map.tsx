import { rows, carLanes, truckLanes } from "../constants/metadata";
import Grass from "./Grass";
import Row from "./Row";

const Map = () => {
    let i = 0;
    return (
        <>
            <Grass rowInd={0} />
            <Grass rowInd={-1} />
            <Grass rowInd={-2} />
            <Grass rowInd={-3} />
            <Grass rowInd={-4} />
            {
                rows.map((rowData, ind) => (
                    <Row key={ind} rowIndex={i++} rowData={rowData} />
                ))
            }
            {
                carLanes.map((rowData, ind) => (
                    <Row key={ind} rowIndex={i++} rowData={rowData} />
                ))
            }
            {
                truckLanes.map((rowData, ind) => (
                    <Row key={ind} rowIndex={i++} rowData={rowData} />
                ))
            }
        </>
    );
}

export default Map;