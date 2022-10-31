import React from 'react'
import SoundOn from '../assets/soundOn.png'
import SoundOff from '../assets/noSound.png'

export default function SoundButton({Isplaying, Action}) {
  return (
    <button onClick={Action} className='SoundControl'>
        {Isplaying ?
        <img className='iconButton2' src={SoundOn} alt="soundOn" />
        :
        <img className='iconButton2' src={SoundOff} alt="soundOff" />
    }
    </button>
  )
}
