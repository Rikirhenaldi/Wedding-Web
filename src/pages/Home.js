import React from 'react'
import '../index.css'
import '../App.css'
import Navbar from '../components/Navbar'
import InvitationCard from '../components/InvitationCard'
import CardAcara from '../components/CardAcara'
import Makbul from '../assets/makbul.png'
import Riana from '../assets/riana.png'

function Home() {
  return (
    <div className="App h-screen w-full">
      <section className='section1Mobile md: section1'>
        <Navbar />
        <div className='containerCardMobile md: containerCard lg: containerCard'>
          <InvitationCard />
        </div>
      </section>
      <section className='section2'>
        <div className='beginingPart'>
          <h1 className='greeting'>Asslammualaikum</h1>
          <h2 className='descriptionFont16'>Dengan Rahmat Allah yang Maha Kuasa</h2>
          <h2 className='descriptionFont16'>InsyaAllah kami akan melangsungkan pernikahan pada:</h2>
          <h2 className='weddingDate'>Minggu, 13 November 2022</h2>
        </div>
        <div className='containerCouple'>
          <div className='boxLeftMale'>
            <div className='NameContainerMale'>
              <h1 className='coupleFullname'>Riana Dwiarti</h1>
              <h2 className='familyNameMale'>
                <span>Putri dari:</span>
                <span>Dodo Setiana (Alm) & Titin Haryanti</span>
              </h2>
            </div>
            <div>
              <img className='couplePicture' src={Riana} alt="makbul" />
            </div>
          </div>
          <div className='boxRightFemale'>
            <div>
              <img className='couplePicture' src={Makbul} alt="riana" />
            </div>
            <div className='NameContainerFemale'>
              <h1 className='coupleFullname'>Makbul Azis Setiabudi</h1>
              <h2 className='familyNameFemale'>
                <span>Putra dari:</span>
                <span>Ajan & Ai Sukarsih</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className='section3'>
      <div className='beginingPart mb-6'>
          <h1 className='greeting'>Acara</h1>
          <div className='descripitionWrapper'>
          <h2 className='descriptionFont16'>Kami Menyampaikan Kabar Bahagia Ini Dan Akan Lengkap Apabila Anda Berkenan Memberikan Doa Restu Kepada Kami Dalam Acara Pernikahan Kami</h2>
          <h2 className='descriptionFont16 pt-4'>Berikut Ini :</h2>
          </div>
        </div>
        <div className='containerCardAcara'>
          <div className='cardAcaraWrapper'>
            <CardAcara Acara={"Akad Nikah"} Hour={"09:00 - 11:00"} Date={'13 November 2022'}/>
          </div>
          <div className='cardAcaraWrapper'>  
            <CardAcara Acara={"Resepsi Pernikahan"} Hour={"11:00 - 15:00"} Date={'13 November 2022'}/>
          </div>
        </div>
      </section>
      <section className='section3'></section>
    </div>
  )
}
export default Home