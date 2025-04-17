import React, { useContext } from 'react'
import { MouseContext } from '../App';

import "../styles/FloatingMenu.css"

function FloatingMenu({x,y,display,hideMenu}) {

    const context = useContext(MouseContext);
    const {setPaintColor} = context

  return (

    <div className='floating-menu' style={{top: `${y}px`, left: `${x}px`, display: `${display}`}} onMouseLeave={hideMenu} >
        <div className='color-selector'>
            <div className='color-red' id="red" onClick={setPaintColor("cell-red")}>
            </div>
            <div className='color-black'id="black" onClick={setPaintColor("cell-black")}>
            </div>
            <div className='color-green'id="green" onClick={setPaintColor("cell-green")}>
            </div>
            <div className='color-pink'id="pink" onClick={setPaintColor("cell-pink")}>
            </div>
            <div className='color-blue'id="blue" onClick={setPaintColor("cell-yellow")}>
            </div>
        </div>
    </div>
  )
}

export default FloatingMenu