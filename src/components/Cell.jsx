import React, {useContext, useRef} from 'react'
import '../styles/cell.css'
import { paintColorContext } from '../context.js';

function Cell({mouseIsDown}) {
    
    const painted = useRef(false); 
    
    const cellRef = useRef();
    const {paintColor} = useContext(paintColorContext)

    function paintCell(){

        if(painted.current){
            cellRef.current.classList.remove("cell-red","cell-black","cell-yellow","cell-green","cell-pink") 
            cellRef.current.classList.add("cell-white")
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
                cellRef.current.classList.remove("cell-red","cell-black","cell-yellow","cell-green","cell-pink") 
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