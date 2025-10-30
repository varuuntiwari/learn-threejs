import { ReactNode } from "react"
import { tileSize, tilesPerRow } from "../constants/globals";

interface RoadProps {
    rowIndex: number,
    children: ReactNode
}

const Road = ({ rowIndex, children }: RoadProps) => {
    return (
        <group position-y={rowIndex * tileSize}>
            <mesh receiveShadow>
                <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
                <meshLambertMaterial color={"grey"} flatShading />
            </mesh>
            {children}
        </group>
    );
}

export default Road;