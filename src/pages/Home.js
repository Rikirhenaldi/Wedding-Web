import React from 'react'
import '../index.css'
import '../App.css'
import Navbar from '../components/Navbar'
import InvitationCard from '../components/InvitationCard'
import CardAcara from '../components/CardAcara'
import Makbul from '../assets/makbul.png'
import Riana from '../assets/riana.png'
import Heart from '../assets/heart.png'
import { ucapan } from '../data/data'

function Home() {
  return (
    <div className="App h-screen w-full">
      <section className='section1Mobile md: section1'>
        <Navbar />
        <div className='containerCardMobile md: containerCard lg: containerCard'>
          <InvitationCard />
        </div>
      </section>
      {/* <<<<<<<<< End of section 1 >>>>>>>>>>>>>>>>> */}
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
      {/* <<<<<<<<< End of section 2 >>>>>>>>>>>>>>>>> */}
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
            <CardAcara Acara={"Akad Nikah"} Hour={"09:00 - 11:00"} Date={'13 November 2022'} />
          </div>
          <div className='cardAcaraWrapper'>
            <CardAcara Acara={"Resepsi Pernikahan"} Hour={"11:00 - 15:00"} Date={'13 November 2022'} />
          </div>
        </div>

        <div className='beginingPart'>
          <h1 className='greeting'>Lokasi Acara</h1>
          <div className='descripitionWrapper'>
            <h2 className='descriptionFont16'>Untuk memudahkan anda datang ketempat Acara diselenggarakan, silahkan Klik peta Google maps yang kami sediakan</h2>
            <h2 className='descriptionFont16 pt-4'>Berikut Ini :</h2>
          </div>
        </div>
        <div className='mapWrapper'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.962726483584!2d107.71020289731807!3d-7.044285398359859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c11bb00b3b5b%3A0x126c492abda330a9!2sLapang%20Volly%20Iva%20Blue!5e0!3m2!1sid!2sid!4v1666797122682!5m2!1sid!2sid" width="100%" height="100%" style={{ borderWidth: 2, borderRadius: 10, }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
        </div>
      </section>
      {/* <<<<<<<<< End of section 3 >>>>>>>>>>>>>>>>> */}
      <section className='section4'>
        <div className='beginingPart'>
          <h1 className='greeting'>Doa Dan Ucapan</h1>
          <div className='descripitionWrapper'>
            <h2 className='descriptionFont16'>Dari yang terkasih untuk kami:</h2>
          </div>
        </div>
        <div className='boxScWrapper'>
          <div className='scrollWrapper'>
            {ucapan.map((item) => {
              return (
                <div className='listBox'>
                  <div className='boxNama'>
                    <img className='iconHeart' src={Heart} alt="heart" />
                    <h1 className='name'>{item.nama}</h1>
                    <h1>:</h1>
                  </div>
                  <div className='boxUcapan'>
                    <h2 className='ucapan'>{item.ucapan}</h2>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <<<<<<<<< End of section 4 >>>>>>>>>>>>>>>>> */}
      <section className='section5'>
        <div className='beginingPart'>
          <h1 className='greeting'>Kirim Ucapan</h1>
          <div className='descripitionWrapper'>
            <h2 className='descriptionFont16'>Masukan ucapan dan doa kalian lewat form berikut:</h2>
          </div>
        </div>
        {/* <!-- Load Facebook SDK for JavaScript --> */}
        <div class="fb-comments" data-href="https://makbul-riana-undangan-nikah.netlify.app" data-width="100%" data-numposts="100"></div>
      </section>
    </div>
  )
}
export default Home