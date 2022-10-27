import React from 'react'
import Link from "react-scroll/modules/components/Link";

export default function CompenentMobileNav({Action, Navbarlist, NavbarActive}) {
    return (
        <div className='containerNavMobile'>
            <div className='exitWrapper'>
                <button onClick={Action} className='closeButton'>x</button>
            </div>
            <div className='whiteContainer'>
                {Navbarlist.map((item) => {
                    return(
                        <Link
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={900}>
                          <button style={{marginBottom: 14}} onClick={() => Action(item)}>
                            {NavbarActive === item ? 
                            <span style={{color: '#586032', fontFamily: "Poppins-Bold", fontSize: 14}}>{item}</span>
                            :
                            <span style={{color: 'black', fontFamily: "Poppins-Bold", fontSize: 14}}>{item}</span>
                            }
                          </button>
                      </Link>
                    )
                })}
            </div>
        </div>
    )
}
