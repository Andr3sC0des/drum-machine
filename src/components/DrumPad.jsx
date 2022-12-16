import React, { useEffect, useRef } from 'react'

const DrumPad = ({ setSoundName, name, letter, sound, volume, power }) => {
  const button = useRef(null)
  const audio = useRef(null)

  const handleAudio = () => {
    audio.current.currentTime = 0
    audio.current.volume = Number(volume)
    if (power) {
      audio.current.play()
    }
    setSoundName(name)
    button.current.style.transform = 'scale(1.1)'
    button.current.style.boxShadow = '0px 0px 10px 1px #0053ee'
    setTimeout(() => {
      button.current.style.transform = 'scale(1)'
      button.current.style.boxShadow = 'none'
    }, 200)
  }

  const eventKeydown = (e) => {
    if (e.key === letter || e.key === letter.toLowerCase()) {
      handleAudio()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', eventKeydown)
    return () => {
      window.removeEventListener('keydown', eventKeydown)
    }
  }, [volume, power])

  return (
    <>
      <button onClick={handleAudio} id='drum-pad' ref={button} className='drum-pad'>{letter}
        <audio ref={audio} className='clip' id={letter} src={sound} />
      </button>
    </>
  )
}

export default DrumPad
