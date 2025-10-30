import { Bounds } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import { usePlayerAnimation } from "../hooks/animations";

const Chicken = () => {
    const chicken = useRef<Group>(null);
    usePlayerAnimation(chicken);

    return (
        <Bounds observe fit clip margin={15}>
            <group ref={chicken}>
                {/* Eyes */}
                <group position={[-2, 7, 15]}>
                    <mesh>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshLambertMaterial color={"black"} flatShading />
                    </mesh>
                    <mesh position={[5, 0, 0]}>
                        <boxGeometry args={[2, 2, 2]} />
                        <meshLambertMaterial color={"black"} flatShading />
                    </mesh>
                </group>
                {/* Comb */}
                <mesh position={[0, 0, 21]} castShadow receiveShadow>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshLambertMaterial color={"red"} flatShading />
                </mesh>
                {/* Body */}
                <mesh position={[0, 0, 10]} castShadow receiveShadow>
                    <boxGeometry args={[15, 15, 20]} />
                    <meshLambertMaterial color={"white"} flatShading />
                </mesh>
            </group>
        </Bounds>
    );
}

export default Chicken;