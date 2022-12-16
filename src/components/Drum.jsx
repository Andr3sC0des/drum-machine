import React, { useRef, useState } from 'react'
import DrumPad from './DrumPad'

const drumSamples = [
  {
    id: 1,
    name: 'Heater 1',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    letter: 'Q'
  },
  {
    id: 2,
    name: 'Heater 2',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    letter: 'W'
  },
  {
    id: 3,
    name: 'Heater 3',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    letter: 'E'
  },
  {
    id: 4,
    name: 'Heater 4',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    letter: 'A'
  },
  {
    id: 5,
    name: 'Clap',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    letter: 'S'
  },
  {
    id: 6,
    name: 'Open-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    letter: 'D'
  },
  {
    id: 7,
    name: 'Kick-n-Hat',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    letter: 'Z'
  },
  {
    id: 8,
    name: 'Kick',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    letter: 'X'
  },
  {
    id: 9,
    name: 'Closed-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    letter: 'C'
  }
]

const Drum = () => {
  const [soundName, setSoundName] = useState(null)
  const [volume, setVolume] = useState('0.7')
  const [power, setPower] = useState(true)
  const range = useRef(null)

  const settingVolume = () => {
    setVolume(range.current.value)
  }

  const handlePower = () => {
    setPower(!power)
  }

  return (
    <>
      <section id='drum-machine' className='drum'>

        <article className='drum__pads'>
          {
            drumSamples.map(({ id, name, sound, letter }) => {
              return (
                <DrumPad power={power} volume={volume} key={id} letter={letter} sound={sound} name={name} setSoundName={setSoundName} />
              )
            })
          }
        </article>

        <article id='display' className='drum__details'>
          <h1 className='drum__title'>Drum Machine</h1>

          <div className='drum__namepad'>
            <h1 className='drum__namepadtitle'>{power ? soundName : 'The drum is off'}</h1>
          </div>
          <input className='drum__range' onChange={settingVolume} ref={range} min={0} max={1} step={0.01} defaultValue={volume} type='range' />

          <label htmlFor='power'>

            <input id='power' onChange={handlePower} type='checkbox' hidden />

            <div className='drum__power'>
              <i className='fa-solid fa-power-off' />
            </div>

          </label>

          <div className={power ? 'drum__greenlight' : 'drum__redlight'} />
        </article>

      </section>
    </>
  )
}

export default Drum
