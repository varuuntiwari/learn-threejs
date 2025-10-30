import Chicken from './components/Chicken';
import GameScreen from './components/GameScreen';
import Map from './components/Map';

import './Game.scss';
import Controls from './utils/Controls/Controls';

const Game = () => {
  return (
    <div className='game'>
      <GameScreen>
        <Chicken />
        <Map />
      </GameScreen>
      <Controls />
    </div>
  )
}

export default Game;
