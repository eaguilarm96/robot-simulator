import React, { useState } from 'react'

import { RobotPosition, RobotDirection, Command } from '@astrazeneca-eric/types'
import { moveRobot, rotateRobot, placeRobot } from '@astrazeneca-eric/utils/robotLogic'

import { Controls } from './components/Controls/Controls'
import { Tabletop } from './components/TableTop/TableTop'

import './Robot.css'

export const Robot: React.FC = () => {
  const [robotPosition, setRobotPosition] = useState<RobotPosition | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCommand = (command: string) => {
    if (command.startsWith(Command.PLACE)) {
      const [, args] = command.split(' ')
      if (args) {
        const [x, y, dir] = args.split(',')
        const parsedX = parseInt(x, 10)
        const parsedY = parseInt(y, 10)
        const parsedDirection = dir as RobotDirection

        const [newPosition, placementError] = placeRobot(
          parsedX,
          parsedY,
          parsedDirection,
        )
        if (placementError) {
          setError(placementError)
        } else {
          setRobotPosition(newPosition)
          setError(null)
        }
      }
    } else if (robotPosition) {
      switch (command) {
        case Command.MOVE:
          const [movedPosition, moveError] = moveRobot(robotPosition)
          if (moveError) {
            setError(moveError)
          } else {
            setRobotPosition(movedPosition)
            setError(null)
          }
          break
        case Command.LEFT:
          setRobotPosition(rotateRobot(robotPosition, -1))
          break
        case Command.RIGHT:
          setRobotPosition(rotateRobot(robotPosition, 1))
          break
        case Command.REPORT:
          console.log(
            `Output: ${robotPosition.x},${robotPosition.y},${robotPosition.direction}`,
          )
          break
        default:
          setError('Invalid command')
          break
      }
    } else {
      setError('Use PLACE command first')
    }
  }

  return (
    <div>
      {error && <div className='error'>{error}</div>}
      <Tabletop position={robotPosition} />
      <Controls onCommand={handleCommand} />
    </div>
  )
}
