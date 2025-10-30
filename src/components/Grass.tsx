import { ReactNode } from "react";
import { tileSize, tilesPerRow } from "../constants/globals";

interface GrassProps {
    rowInd: number,
    children?: ReactNode
};

const Grass = ({ rowInd, children }: GrassProps) => {
    return (
        <group position-y={rowInd * tileSize}>
            <mesh receiveShadow>
                <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
                <meshLambertMaterial color={'lightgreen'} flatShading />
            </mesh>
            {children}
        </group>
    );
}

export default Grass;