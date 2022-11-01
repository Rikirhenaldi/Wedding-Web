import React, { useState } from 'react'
import "../index.css"
import "../App.css"
import Link from "react-scroll/modules/components/Link";
import CompenentMobileNav from './CompenentMobileNav';

export default function Navbar({NavList, NavActive, Action}) {
  const [activeToggle, setActiveToggle] = useState(false)
  return (
    <ul className='navbar flex w-full h-14 pb-6 pr-16 pt-6 justify-between md:navbar flex w-full h-16 md:pl-6 pb-6 pr-16 pt-2 justify-between'>
      <div className='preciousFont24 ml-4 logoWrapperMobile preciousFont34 logoWrapper'>Riana & Makbul</div>
      {NavList.map((item) => {
        return (
          <li className='App hidden md:flex poppinsFont pt-4 lg:flex poppinsFont pt-4 xl:flex poppinsFont pt-4 '>
            <Link
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}>
                <button onClick={() => Action(item)}>
                  {NavActive === item ? 
                  <span style={{color: '#586032', fontFamily: "Poppins-Bold"}}>{item}</span>
                  :
                  <span style={{color: 'gray', fontFamily: "Poppins-Bold"}}>{item}</span>
                  }
                </button>
            </Link>
          </li>
        )
      })}
      <button onClick={() => setActiveToggle(!activeToggle)}  className='toggle'>
      <span className='rectangle'></span>
      <span className='rectangle'></span>
      <span className='rectangle'></span>
      </button>
      {activeToggle ? <CompenentMobileNav Action={() => setActiveToggle(!activeToggle)} Navbarlist={NavList} NavbarActive={NavActive}/> : null}
    </ul>
  )
}
