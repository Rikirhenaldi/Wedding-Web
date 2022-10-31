import React from 'react'
import "../index.css"
import "../App.css"
import Link from "react-scroll/modules/components/Link";

export default function InvitationCard({DirectTo, Action}) {
    return (
        <div className='cardInvitation'>
            <h1 className='titleCardMobile titleCard'>Pernikahan</h1>
            <h2 className='coupleNameMobile coupleName'>
               <span>Makbul </span> 
               <span>& </span> 
                <span>Riana</span>
                </h2>
            <div className='cardBoxRow'>
                <div className='boxLeftMobile boxLeft'>
                    <h2>Mengundang Anda </h2>
                    <h2>Untuk Hadir</h2>
                </div>
                <div className='boxRight boxRightMobile'>
                    <h2>Minggu, 13 November 2022</h2>
                </div>
            </div>
            <div className=''>
            <Link
              to={DirectTo}
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}>
                <button className='buttonDetailMobile md: buttonDetail' onClick={Action}>Detail Undangan</button>
            </Link>
            </div>
        </div>
    )
}
