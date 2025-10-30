import { Lane } from "../types/gamescreen.types";
import Car from "./Car";
import Road from "./Road";

interface CarLaneProps {
    rowIndex: number,
    rowData: Extract<Lane, { type: "car" }>
}

const CarLane = ({ rowIndex, rowData }: CarLaneProps) => {
    return (
        <Road rowIndex={rowIndex}>
            {rowData.vehicles.map((car, ind) => (
                <Car
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

export default CarLane;