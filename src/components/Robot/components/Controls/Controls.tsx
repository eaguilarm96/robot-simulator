import React, { useState } from 'react'
import './Controls.css'

type ControlsProps = {
  onCommand: (command: string) => void
}

export const Controls: React.FC<ControlsProps> = React.memo(({ onCommand }) => {
  const [command, setCommand] = useState('')

  const handleCommand = React.useCallback(
    (cmd: string) => {
      onCommand(cmd)
      setCommand('')
    },
    [onCommand],
  )

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value)
  }, [])

  return (
    <div className='controls'>
      <input
        type='text'
        value={command}
        onChange={handleChange}
        placeholder='Enter command'
      />
      <button onClick={() => handleCommand(command.trim())}>Submit</button>
      <div>
        {['MOVE', 'LEFT', 'RIGHT', 'REPORT'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
})
