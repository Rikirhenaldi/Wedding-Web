import React from 'react'
import "../index.css"
import "../App.css"
import DateIcon from '../assets/calendar.png'
import ClockIcon from '../assets/clock.png'

export default function CardAcara({ Acara, Date, Hour }) {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='subTitle'>{Acara}</h1>
      <div className='flex flex-row mt-6'>
        <div className='timeBox'>
          <img className='iconAcara' src={DateIcon} alt="date-icon" />
          <h2 className='descriptionFont16'>Minggu</h2>
          <h2 className='descriptionFont16'>{Date}</h2>
        </div>
        <div className='timeBox'>
          <img className='iconAcara' src={ClockIcon} alt="clock-icon" />
          <h2 className='descriptionFont16'>Pukul</h2>
          <h2 className='descriptionFont16'>{Hour}</h2>
        </div>
      </div>
    </div>
  )
}
