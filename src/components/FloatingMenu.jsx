import React, { useContext } from 'react'
import {paintColorContext} from "../context.js"
import {colors} from "./colors.js"
import "../styles/FloatingMenu.css"
import "../styles/colors.css"

function FloatingMenu({x,y,display,hideMenu,givenWidth}) {

    const {paintColor, setPaintColor }= useContext(paintColorContext)

    function setColor(e){
        if(e.button === 0){
            setPaintColor(e.target.id)
        }
        else{}
    }

    

  return (

    <div className={`floating-menu-${display}`} style={{top: `${y}px`, left: `${x}px`, width: `${givenWidth}px`}} onMouseLeave={hideMenu} >
        <div className='color-selector'>
            {colors.map((color) => (
                <div className={`color-box cell-${color}`} style={{width:`${givenWidth/10}px`}} id={`cell-${color}`} onClick={(e) => {setColor(e), hideMenu()}}>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default FloatingMenu