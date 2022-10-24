import React, { useState } from 'react'
import "../index.css"
import "../App.css"

export default function Navbar() {
    const [navList, setNavList] = useState(["Beranda", "Tentang Kami", "Undangan", "Doa & Ucapan"])
  return (
    <ul className='navbar flex w-full h-14 pl-2 pb-6 pr-16 pt-6 justify-between md:navbar flex w-full h-16 pl-6 pb-6 pr-16 pt-2 justify-between'>
        <div className='preciousFont24 logoWrapperMobile preciousFont34 logoWrapper'>Makbul & Riana</div>
       {navList.map((item) => {
        return(
            <li className='App hidden md:flex poppinsFont pt-4 lg:flex poppinsFont pt-4 xl:flex poppinsFont pt-4 '>
              <button>{item}</button>
            </li>
        )
    })}
    </ul>
  )
}
