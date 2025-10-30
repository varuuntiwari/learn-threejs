import { Lane } from "../types/gamescreen.types";
import Grass from "./Grass";
import Tree from "./Tree";

interface ForestProps {
    rowIndex: number,
    rowData: Extract<Lane, {type: "forest"}>
}

const Forest = ({ rowIndex, rowData }: ForestProps) => {
    return (
        <Grass rowInd={rowIndex}>
            {rowData.trees.map((tree, index) => (
                <Tree
                    key={index}
                    tileIndex={tree.tileIndex}
                    height={tree.height}
                />
            ))}
        </Grass>
    );
}

export default Forest;