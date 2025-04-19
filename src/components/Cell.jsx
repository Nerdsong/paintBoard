import React, {useContext, useRef} from 'react'
import { paintColorContext } from '../context.js';
import { colors } from './colors.js';
import '../styles/cell.css'
import "../styles/colors.css"


function Cell({mouseIsDown}) {
    
    const painted = useRef(false); 
    
    const cellRef = useRef();
    const {paintColor} = useContext(paintColorContext)

    function paintCell(){

        if(painted.current){
            colors.forEach(color => {
                cellRef.current.classList.contains(`cell-${color}`) && cellRef.current.classList.remove(`cell-${color}`)
            })
            cellRef.current.classList.add("cell-not-painted");
            painted.current = false;
        }
        else{
            console.log(paintColor)
            cellRef.current.classList.add(paintColor)
            painted.current= true;
        }
        
    }

    function mouseEntered(){
        if(mouseIsDown.current){
            colors.forEach(color => {
                cellRef.current.classList.contains(`cell-${color}`) && cellRef.current.classList.remove(`cell-${color}`)
            })
                console.log(paintColor)
                cellRef.current.classList.add(paintColor)
                painted.current= true;
              
            
        }
    
    }

  return (
    
        <div ref={cellRef} className='cell' onMouseEnter={mouseEntered} onClick={paintCell}>

        </div>
  )
}

export default Cell