import { Lane } from "../types/gamescreen.types";

export const rows: Lane[] = [
    {
        type: "forest",
        trees: [
            { tileIndex: -3, height: 40 },
            { tileIndex: 2, height: 25 },
            { tileIndex: 5, height: 50 },
        ]
    }
];

export const carLanes: Lane[] = [
    {
        type: "car",
        direction: false,
        speed: 50,
        vehicles: [{
            initialTileIndex: -1,
            color: 0xff0000
        }]
    }
];

export const truckLanes: Lane[] = [
    {
        type: "truck",
        direction: true,
        speed: 25,
        vehicles: [{
            initialTileIndex: 2,
            color: 'orange'
        }]
    }
];