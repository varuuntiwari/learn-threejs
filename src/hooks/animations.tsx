import { useFrame } from "@react-three/fiber"
import { RefObject } from "react"
import { Clock, Group, MathUtils } from "three"
import { maxTileIndex, minTileIndex, tileSize } from "../constants/globals";
import { ChickenState, stepCompleted } from "../store/player";

const useVehicleAnimation = (ref: RefObject<Group | null>, direction: boolean, speed: number) => {
    useFrame((_, delta) => {
        if (!ref.current) return;
        const vehicle = ref.current;

        const rowStart = (minTileIndex - 2) * tileSize;
        const rowEnd = (maxTileIndex + 2) * tileSize;

        if (direction) {
            vehicle.position.x = vehicle.position.x > rowEnd ? rowStart : vehicle.position.x + speed * delta;
        } else {
            vehicle.position.x = vehicle.position.x < rowStart ? rowEnd : vehicle.position.x - speed * delta;
        }
    });
}

const setPosition = (player: Group, progress: number) => {
    const startX = ChickenState.currentTile * tileSize;
    const startY = ChickenState.currentRow * tileSize;

    let endX = startX, endY = startY;

    switch(ChickenState.moveQueue[0]) {
        case 'forward':
            endY += tileSize;
            break;
        case 'backward':
            endY -= tileSize;
            break;
        case 'left':
            endX -= tileSize;
            break;
        case 'right':
            endX += tileSize;
            break;
    }

    player.position.x = MathUtils.lerp(startX, endX, progress);
    player.position.y = MathUtils.lerp(startY, endY, progress);
    player.position.z = Math.sin(progress * Math.PI) * 8;
}

const setRotation = (player: Group, progress: number) => {
    let endRotation = 0;

    switch(ChickenState.moveQueue[0]) {
        case 'forward':
            endRotation = 0;
            break;
        case 'backward':
            endRotation = Math.PI;
            break;
        case 'left':
            endRotation = Math.PI / 2;
            break;
        case 'right':
            endRotation = -Math.PI / 2;
            break;
    }

    player.rotation.z = MathUtils.lerp(player.rotation.z, endRotation, progress);
}

const usePlayerAnimation = (ref: RefObject<Group | null>) => {
    const moveClock = new Clock(false);
    useFrame(() => {
        if (!ref.current) return;
        if (!ChickenState.moveQueue.length) return;

        const player = ref.current;
        const stepTime = 0.15;

        if (!moveClock.running) moveClock.start();
        const progress = Math.min(1, moveClock.getElapsedTime() / stepTime);

        setPosition(player, progress);
        setRotation(player, progress);

        if (progress >= 1) {
            stepCompleted();
            moveClock.stop();
        }
    });
}

export {
    useVehicleAnimation,
    usePlayerAnimation
};