import React from 'react'
import Link from "react-scroll/modules/components/Link";
import upArrow from '../assets/upArrow.png'

export default function () {
    return (
        <button className='chevronUpButton'>
            <Link
                to={"Beranda"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}>
                <img className='iconButton' src={upArrow} alt="cevronTop" />
            </Link>
        </button>
    )
}
