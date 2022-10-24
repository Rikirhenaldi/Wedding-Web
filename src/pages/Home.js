import React from 'react'
import '../index.css'
import '../App.css'
import Navbar from '../components/Navbar'
import InvitationCard from '../components/InvitationCard'

function Home() {
  return (
    <div className="App h-screen w-full">
        <section className='section1Mobile md: section1'>
          <Navbar/>
          <div className='containerCardMobile md: containerCard lg: containerCard'>
          <InvitationCard/>
          </div>
        </section>
        <section className='section2'>
          
        </section>
    </div>
  )
}
export default Home