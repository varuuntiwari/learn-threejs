import { Lane } from "../types/gamescreen.types";
import Truck from "./Truck";
import Road from "./Road";

interface TruckLaneProps {
    rowIndex: number,
    rowData: Extract<Lane, { type: "truck" }>
}

const TruckLane = ({ rowIndex, rowData }: TruckLaneProps) => {
    return (
        <Road rowIndex={rowIndex}>
            {rowData.vehicles.map((car, ind) => (
                <Truck
                    key={ind}
                    rowIndex={rowIndex}
                    initialTileIndex={car.initialTileIndex}
                    direction={rowData.direction}
                    speed={rowData.speed}
                    color={car.color}
                />
            ))}
        </Road>
    );
}

export default TruckLane;