import * as THREE from 'three';

export type LaneType = "tree" | "car" | "truck";

export type Lane = {
    type: "car",
    direction: boolean,
    speed: number,
    vehicles: {
        initialTileIndex: number;
        color: THREE.ColorRepresentation;
    }[];
} | {
    type: "truck",
    direction: boolean,
    speed: number,
    vehicles: {
        initialTileIndex: number;
        color: THREE.ColorRepresentation;
    }[];
} | {
    type: "forest",
    trees: { tileIndex: number, height: number }[];
};