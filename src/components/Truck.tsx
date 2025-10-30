import { ColorRepresentation, Group } from "three";
import { tileSize } from "../constants/globals";
import Wheel from "./Wheel";
import { useRef } from "react";
import { useVehicleAnimation } from "../hooks/animations";

interface TruckProps {
    rowIndex: number,
    initialTileIndex: number,
    direction: boolean,
    speed: number,
    color: ColorRepresentation
}

const Truck = ({ initialTileIndex, direction, speed, color }: TruckProps) => {
    const truck = useRef<Group>(null);
    useVehicleAnimation(truck, direction, speed);


    return (
        <group
            position-x={initialTileIndex * tileSize}
            rotation-z={direction ? 0 : Math.PI}
            ref={truck}
        >
            <mesh position={[-15, 0, 25]} receiveShadow castShadow>
                <boxGeometry args={[70, 35, 35]} />
                <meshLambertMaterial color={'lightgrey'} flatShading />
            </mesh>
            <mesh position={[35, 0, 20]} receiveShadow castShadow>
                <boxGeometry args={[30, 30, 30]} />
                <meshLambertMaterial color={color} flatShading />
            </mesh>
            <Wheel x={-35} />
            <Wheel x={5} />
            <Wheel x={37} />
        </group>
    );
}

export default Truck;