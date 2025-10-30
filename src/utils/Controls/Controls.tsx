import useMovementButtons from "../../hooks/movement";
import { MoveChicken } from "../../store/player";

import './Controls.scss';

const Controls = () => {
    useMovementButtons();

    return (
        <div id="controls">
            <div>
                <button onClick={() => MoveChicken('forward')}>▲</button>
                <button onClick={() => MoveChicken('left')}>◄</button>
                <button onClick={() => MoveChicken('backward')}>▼</button>
                <button onClick={() => MoveChicken('right')}>►</button>
            </div>
        </div>
    );
}

export default Controls;