import React, { useState, useEffect } from 'react'
import '../index.css'
import '../App.css'
import Navbar from '../components/Navbar'
import InvitationCard from '../components/InvitationCard'
import CardAcara from '../components/CardAcara'
import Makbul from '../assets/makbul.png'
import Riana from '../assets/riana.png'
import Heart from '../assets/heart.png'
import Ornamen1 from '../assets/ornament1.png'
import Ornamen2 from '../assets/ornament2.png'
import { ucapan } from '../data/data'
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import ReactHowler from 'react-howler'
import Audio_wedding from '../assets/audioclips/wedding2.mp3'
import BackToUp from '../components/BackToUp'
import SoundButton from '../components/SoundButton'



function Home() {
  const [navList, setNavList] = useState(["Beranda", "Tentang Kami", "Undangan", "Doa & Ucapan"])
  const [navActive, setNavActive] = useState("Beranda")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [deliver, setDeliver] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activatedSound, setActivatedSound] = useState(false)


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const playMusic = () => {
    setIsPlaying(true)
    setActivatedSound(true)
    console.log("play music");
  }

  const pauseMusic = () => {
    setIsPlaying(false)
    console.log("pause music");
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // console.log(window.scrollY, "<<<<<<<<<<<<");
      if (window.scrollY < 500) {
        setNavActive(navList[0])
      }
      else if (lastScrollY > 550 && lastScrollY < 1270) {
        if(activatedSound === false && isPlaying === false){
          setNavActive(navList[1])
          playMusic()
        }else{
          setNavActive(navList[1])
        }
      }
      else if (lastScrollY > 1270 && lastScrollY < 2579) {
        setNavActive(navList[2])
      }
      else if (lastScrollY > 2580) {
        setNavActive(navList[3])
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
      // console.log(window.scrollY, " <<<<<window", lastScrollY, "<<<<<<last");
    }
  }

  const onHandleNavActive = (item) => {
    setNavActive(item)
  }

  const onhandleMessage = () => {
    if (name === "" || message === "") {
      return null
    } else {
      setDeliver(true)
      setName("")
      setMessage("")
      setTimeout(() => {
        setDeliver(false)
      }, 1000);
    }
  }
  return (
    <div className="App h-screen w-full">
      <section className='section1Mobile md: section1' id={navList[0]}>
        <Navbar NavList={navList} NavActive={navActive} Action={onHandleNavActive} />
        <div className='containerCardMobile md: containerCard lg: containerCard'>
          <Slide top>
            <ReactHowler
              src={Audio_wedding}
              playing={isPlaying}
              volume={0.5}
            />
            <InvitationCard DirectTo={navList[1]} Action={isPlaying ? pauseMusic : playMusic} />
          </Slide>
        </div>
        <div>
          {activatedSound ?
            <SoundButton Isplaying={isPlaying} Action={isPlaying ? pauseMusic : playMusic} />
            :
            null
          }
        </div>
        <div>
          {
            window.scrollY > 100 ?
              <BackToUp />
              :
              null
          }
        </div>
      </section>
      {/* <<<<<<<<< End of section 1 >>>>>>>>>>>>>>>>> */}
      <section className='section2' >
        <Slide top>
          <div className='beginingPart' >
            <h1 className='greeting' id={navList[1]}>Asslammualaikum</h1>
            <h2 className='descriptionFont16'>Dengan Rahmat Allah yang Maha Kuasa</h2>
            <h2 className='descriptionFont16'>InsyaAllah kami akan melangsungkan pernikahan pada:</h2>
            <h2 className='weddingDate'>Minggu, 13 November 2022</h2>
          </div>
        </Slide>
        <div className='containerCouple'>
          <div className='boxLeftMale'>
            <Slide bottom>
              <div className='NameContainerMale'>
                <h1 className='coupleFullname'>Riana Dwiarti</h1>
                <h2 className='familyNameMale'>
                  <span>Putri dari:</span>
                  <span>Dodo Setiana (Alm) & Titin Haryanti</span>
                </h2>
              </div>
            </Slide>
            <Slide left>
              <div>
                <img className='couplePicture' src={Riana} alt="makbul" />
              </div>
            </Slide>
          </div>
          <div className='boxRightFemale'>
            <Slide right>
              <div>
                <img className='couplePicture' src={Makbul} alt="riana" />
              </div>
            </Slide>
            <Slide bottom>
              <div className='NameContainerFemale'>
                <h1 className='coupleFullname'>Makbul Azis Setiabudi</h1>
                <h2 className='familyNameFemale'>
                  <span>Putra dari:</span>
                  <span>Ajan & Ai Sukarsih</span>
                </h2>
              </div>
            </Slide>
          </div>
        </div>
      </section>
      {/* <<<<<<<<< End of section 2 >>>>>>>>>>>>>>>>> */}
      <section className='section3'>
        <Slide right>
          <div className='beginingPart mb-6'>
            <h1 className='greeting' id={navList[2]}>Acara</h1>
            <div className='descripitionWrapper'>
              <h2 className='descriptionFont16'>Kami Menyampaikan Kabar Bahagia Ini Dan Akan Lengkap Apabila Anda Berkenan Memberikan Doa Restu Kepada Kami Dalam Acara Pernikahan Kami</h2>
              <h2 className='descriptionFont16 pt-4'>Berikut Ini :</h2>
            </div>
          </div>
        </Slide>
        <div className='containerCardAcara'>
          <div className='cardAcaraWrapper'>
            <Slide left>
              <CardAcara Acara={"Akad Nikah"} Hour={"09:00 - 11:00"} Date={'13 November 2022'} />
            </Slide>
          </div>
          <div className='cardAcaraWrapper'>
            <Slide right>
              <CardAcara Acara={"Resepsi Pernikahan"} Hour={"11:00 - 15:00"} Date={'13 November 2022'} />
            </Slide>
          </div>
        </div>

        <Slide right>
          <div className='beginingPart'>
            <h1 className='greeting'>Lokasi Acara</h1>
            <div className='descripitionWrapper'>
              <h2 className='descriptionFont16'>Untuk memudahkan anda datang ketempat Acara diselenggarakan, silahkan Klik peta Google maps yang kami sediakan</h2>
              <h2 className='descriptionFont16 pt-4'>Berikut Ini :</h2>
            </div>
          </div>
        </Slide>
        <Flip left>
          <div className='mapWrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.962726483584!2d107.71020289731807!3d-7.044285398359859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c11bb00b3b5b%3A0x126c492abda330a9!2sLapang%20Volly%20Iva%20Blue!5e0!3m2!1sid!2sid!4v1666797122682!5m2!1sid!2sid" width="100%" height="100%" style={{ borderWidth: 2, borderRadius: 10, }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
          </div>
        </Flip>
      </section>
      {/* <<<<<<<<< End of section 3 >>>>>>>>>>>>>>>>> */}
      <section className='section4'>
        <div className='beginingPart'>
          <h1 className='greeting' id={navList[3]}>Doa Dan Ucapan</h1>
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
          <h1 className='greeting' id={navList[4]}>Kirim Ucapan</h1>
          <div className='descripitionWrapper'>
            <h2 className='descriptionFont16'>Masukan ucapan dan doa kalian lewat form berikut:</h2>
          </div>
        </div>

        {/* <<<<<<<<<< Message Box >>>>>>>>>>> */}
        <div className='w-full flex justify-center items-center mt-8'>
          <div style={{ display: deliver ? "flex" : "none", width: "60%", paddingTop: 20, paddingBottom: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: "#586032", borderRadius: 20 }}>
            <h1 className='messageAlert'>Pesan anda terkirim</h1>
          </div>
        </div>
        {/* <<<<<<<<<< End of Message Box >>>>>>>>>>> */}
        <div className='formWrapper'>
          <div className='formBox'>
            <div className='inputWrapper'>
              <input className='input' type="text" placeholder='Nama Anda' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className='inputWrapper'>
              <textarea className='input' id="w3review" name="w3review" rows="4" cols="50" placeholder='Masukan Ucapan dan Doa' value={message} onChange={e => setMessage(e.target.value)} >
              </textarea>
            </div>
            <div className='buttonWrapper'>
              <button className='greenButton' onClick={() => onhandleMessage()}>Kirim</button>
            </div>
          </div>
        </div>
      </section>
      <section className='section6'>
        <div className='beginingPart'>
          <h1 className='greeting'>Protokol Kesehatan</h1>
          <Slide left>
            <div className='descripitionWrapper'>
              <h2 className='descriptionFont16'>Mohon untuk anda sahabat/kerabat dan saudara kami yang akan datang ke Akad maupun resepsi pernikahan kami untuk tetap memperhatikan protokol kesehatan yaitu Menggunakan Masker, Menjaga Jarak, Mencuci Tangan dan selalu menjaga kesehatan dan juga imun tubuh. Terima kasih</h2>
            </div>
          </Slide>
        </div>
      </section>
      <footer className='footer'>
        <div className='undanganDigital'>
          <h1>Undangan Digital</h1>
          <h2 className='coupleNameFooter'>Makbul & Riana</h2>
        </div>
        <img className='ornament1' src={Ornamen1} alt="ornament1" />
        <img className='ornament2' src={Ornamen2} alt="ornament2" />

      </footer>
    </div>
  )
}
export default Home