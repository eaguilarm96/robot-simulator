import { RobotPosition } from '../../../../types/RobotPosition'
import { getRotation } from '@astrazeneca-eric/utils/robotLogic'
import './Tabletop.css'

type TabletopProps = {
  position: RobotPosition | null
}

export const Tabletop: React.FC<TabletopProps> = ({ position }) => {
  const renderGrid = () => {
    const grid = []
    for (let y = 4; y >= 0; y--) {
      for (let x = 0; x < 5; x++) {
        const isRobot = position?.x === x && position?.y === y

        grid.push(
          <div
            key={`${x},${y}`}
            className={`cell ${isRobot ? 'robot' : ''}`}
          >
            {isRobot && (
              <span
                className='robot-icon'
                style={{ transform: getRotation(position.direction) }}
              >
                🤖
              </span>
            )}
          </div>,
        )
      }
    }
    return grid
  }

  return <div className='tabletop'>{renderGrid()}</div>
}
