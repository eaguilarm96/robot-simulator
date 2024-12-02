import { placeRobot, moveRobot, rotateRobot } from '../utils/robotLogic'
import { RobotDirection } from '../types'

describe('Robot Logic', () => {
  test('PLACE 0,0,NORTH and MOVE should result in 0,1,NORTH', () => {
    const [initialPosition] = placeRobot(0, 0, RobotDirection.NORTH)
    expect(initialPosition).toEqual({ x: 0, y: 0, direction: RobotDirection.NORTH })

    const [newPosition] = moveRobot(initialPosition!)
    expect(newPosition).toEqual({ x: 0, y: 1, direction: RobotDirection.NORTH })
  })

  test('PLACE 0,0,NORTH and LEFT should result in 0,0,WEST', () => {
    const [initialPosition] = placeRobot(0, 0, RobotDirection.NORTH)
    expect(initialPosition).toEqual({ x: 0, y: 0, direction: RobotDirection.NORTH })

    const rotatedPosition = rotateRobot(initialPosition!, -1)
    expect(rotatedPosition).toEqual({ x: 0, y: 0, direction: RobotDirection.WEST })
  })

  test('MOVE beyond table bounds should return null and error', () => {
    const [initialPosition] = placeRobot(0, 4, RobotDirection.NORTH)
    const [newPosition, error] = moveRobot(initialPosition!)
    expect(newPosition).toBeNull()
    expect(error).toBe('Invalid move: The robot would fall off the table.')
  })

  test('PLACE out of bounds should return null and error', () => {
    const [position, error] = placeRobot(5, 5, RobotDirection.NORTH)
    expect(position).toBeNull()
    expect(error).toBe('Invalid placement: The position is out of bounds.')
  })

  test('ROTATE robot correctly', () => {
    const [initialPosition] = placeRobot(1, 1, RobotDirection.NORTH)

    const rotatedRight = rotateRobot(initialPosition!, 1)
    expect(rotatedRight).toEqual({ x: 1, y: 1, direction: RobotDirection.EAST })

    const rotatedLeft = rotateRobot(rotatedRight, -1)
    expect(rotatedLeft).toEqual({ x: 1, y: 1, direction: RobotDirection.NORTH })
  })
})
