import { PlayerMove } from "../constants/globals"

export const ChickenState: {
    currentRow: number,
    currentTile: number,
    moveQueue: PlayerMove[]
} = {
    currentRow: 0,
    currentTile: 0,
    moveQueue: []
};

export const MoveChicken = (move: PlayerMove) => {
    ChickenState.moveQueue.push(move);
}

export const stepCompleted = () => {
    const move = ChickenState.moveQueue.shift();

    switch (move) {
        case 'forward':
            ChickenState.currentRow += 1;
            break;
        case 'backward':
            ChickenState.currentRow -= 1;
            break;
        case 'left':
            ChickenState.currentTile -= 1;
            break;
        case 'right':
            ChickenState.currentTile += 1;
            break;
    }
}