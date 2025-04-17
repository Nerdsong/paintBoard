import React, { useContext } from 'react'
import {paintColorContext} from "../context.js"
import "../styles/FloatingMenu.css"

function FloatingMenu({x,y,display,hideMenu}) {

    const {paintColor, setPaintColor }= useContext(paintColorContext)

    function setColor(e){
        if(e.button === 0){
            setPaintColor(e.target.id)
        }
        else{}
    }

  return (

    <div className={`floating-menu-${display}`} style={{top: `${y}px`, left: `${x}px`}} onMouseLeave={hideMenu} >
        <div className='color-selector'>
            <div className='color-box color-red' id="cell-red" onClick={(e) => {setColor(e), hideMenu()}}>
            </div>
            <div className='color-box color-black'id="cell-black" onClick={(e) => {setColor(e), hideMenu()}}>
            </div>
            <div className='color-box color-green'id="cell-green" onClick={(e) => {setColor(e), hideMenu()}}>
            </div>
            <div className='color-box color-pink'id="cell-pink" onClick={(e) => {setColor(e), hideMenu()}}>
            </div>
            <div className='color-box color-yellow'id="cell-yellow" onClick={(e) => {setColor(e), hideMenu()}}>
            </div>
        </div>
    </div>
  )
}

export default FloatingMenu