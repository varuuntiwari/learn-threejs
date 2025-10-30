import { Canvas } from "@react-three/fiber"
import { ReactNode } from "react"
import DirectionalLight from "../utils/DirectionalLight";

interface GameScreenProps {
    children: ReactNode
}

const GameScreen = ({ children }: GameScreenProps) => {
    return (
        <Canvas
            orthographic={true}
            shadows={true}
            camera={{
                up: [0, 0, 1],
                position: [300, -300, 300]
            }}
        >
            <ambientLight />
            <DirectionalLight />
            {children}
        </Canvas>
    );
}

export default GameScreen;