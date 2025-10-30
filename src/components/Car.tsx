import { ColorRepresentation, Group } from "three";
import { tileSize } from "../constants/globals";
import Wheel from "./Wheel";
import { useRef } from "react";
import { useVehicleAnimation } from "../hooks/animations";

interface CarProps {
    rowIndex: number,
    initialTileIndex: number,
    direction: boolean,
    speed: number,
    color: ColorRepresentation
}

const Car = ({ initialTileIndex, direction, speed, color }: CarProps) => {
    const car = useRef<Group>(null);
    useVehicleAnimation(car, direction, speed);

    return (
        <group
            position-x={initialTileIndex * tileSize}
            rotation-z={direction ? 0 : Math.PI}
            ref={car}
        >
            <mesh position={[0, 0, 12]} receiveShadow castShadow>
                <boxGeometry args={[60, 30, 15]} />
                <meshLambertMaterial color={color} flatShading />
            </mesh>
            <mesh position={[-6, 0, 25.5]} receiveShadow castShadow>
                <boxGeometry args={[33, 24, 12]} />
                <meshLambertMaterial color={0xffffff} flatShading />
            </mesh>
            <Wheel x={-18} />
            <Wheel x={18} />
        </group>
    );
}

export default Car;