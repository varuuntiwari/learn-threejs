import { tileSize } from "../constants/globals";

const Tree = ({ tileIndex, height }: { tileIndex: number, height: number }) => {
    return (
        <group position-x={tileIndex * tileSize}>
            <mesh position-z={height / 2 + 20} receiveShadow castShadow>
                <boxGeometry args={[30, 30, height]} />
                <meshLambertMaterial color={"green"} flatShading />
            </mesh>
            <mesh position-z={10} receiveShadow castShadow>
                <boxGeometry args={[15, 15, 20]} />
                <meshLambertMaterial color={"saddlebrown"} flatShading />
            </mesh>
        </group>
    );
}

export default Tree;