import { RobotDirection } from '../types/RobotDirection'
import { RobotPosition } from '../types/RobotPosition'

export const isValidPosition = (x: number, y: number): boolean => {
  return x >= 0 && x < 5 && y >= 0 && y < 5
}

export const moveRobot = (
  position: RobotPosition,
): [RobotPosition | null, string | null] => {
  let { x, y, direction } = position
  switch (direction) {
    case RobotDirection.NORTH:
      y += 1
      break
    case RobotDirection.EAST:
      x += 1
      break
    case RobotDirection.SOUTH:
      y -= 1
      break
    case RobotDirection.WEST:
      x -= 1
      break
  }

  if (isValidPosition(x, y)) {
    return [{ x, y, direction }, null]
  }
  // Invalid move
  return [null, 'Invalid move: The robot would fall off the table.']
}

export const rotateRobot = (
  position: RobotPosition,
  directionChange: number,
): RobotPosition => {
  const directions = [
    RobotDirection.NORTH,
    RobotDirection.EAST,
    RobotDirection.SOUTH,
    RobotDirection.WEST,
  ]
  const currentIndex = directions.indexOf(position.direction)
  const newIndex = (currentIndex + directionChange + 4) % 4 // Circular rotation
  return { ...position, direction: directions[newIndex] }
}

export const getRotation = (direction: RobotDirection): string => {
  switch (direction) {
    case RobotDirection.NORTH:
      return 'rotate(0deg)'
    case RobotDirection.EAST:
      return 'rotate(90deg)'
    case RobotDirection.SOUTH:
      return 'rotate(180deg)'
    case RobotDirection.WEST:
      return 'rotate(270deg)'
    default:
      return 'rotate(0deg)'
  }
}

export const placeRobot = (
  x: number,
  y: number,
  direction: RobotDirection,
): [RobotPosition | null, string | null] => {
  if (isValidPosition(x, y)) {
    return [{ x, y, direction }, null]
  }

  return [null, 'Invalid placement: The position is out of bounds.'] // Invalid placement
}
