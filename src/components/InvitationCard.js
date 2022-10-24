import React from 'react'
import "../index.css"
import "../App.css"

export default function InvitationCard() {
    return (
        <div className='cardInvitation'>
            <h1 className='titleCardMobile titleCard'>Pernikahan</h1>
            <h2 className='coupleNameMobile coupleName'>Makbul & Riana</h2>
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
                <button className='buttonDetailMobile md: buttonDetail'>Detail Undangan</button>
            </div>
        </div>
    )
}
