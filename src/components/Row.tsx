import { Lane } from "../types/gamescreen.types";
import CarLane from "./CarLane";
import Forest from "./Forest";
import TruckLane from "./TruckLane";

interface RowProps {
    rowIndex: number,
    rowData: Lane
}

const Row = ({rowIndex, rowData}: RowProps) => {
    switch (rowData.type) {
        case "forest": {
            return <Forest rowIndex={rowIndex} rowData={rowData} />
        }
        case "car": {
            return <CarLane rowIndex={rowIndex} rowData={rowData} />
        }
        case "truck": {
            return <TruckLane rowIndex={rowIndex} rowData={rowData} />
        }
    }
}

export default Row;