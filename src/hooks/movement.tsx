import { useEffect } from "react";
import { MoveChicken } from "../store/player";

const useMovementButtons = () => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch ((event.key).toLowerCase()) {
                case 'arrowup':
                case 'w':
                    event.preventDefault();
                    MoveChicken('forward');
                    break;
                case 'arrowdown':
                case 's':
                    event.preventDefault();
                    MoveChicken('backward');
                    break;
                case 'arrowleft':
                case 'a':
                    event.preventDefault();
                    MoveChicken('left');
                    break;
                case 'arrowright':
                case 'd':
                    event.preventDefault();
                    MoveChicken('right');
                    break;
            }
        }

        window.addEventListener('keypress', handleKeyDown);

        return () => {
            window.removeEventListener('keypress', handleKeyDown);
        }
    }, []);
}

export default useMovementButtons;