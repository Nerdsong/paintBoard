import React, { useContext, useRef} from 'react'
import { MouseContext } from '../App';
import '../styles/cell.css'

function Cell() {
    
    let painted = false; 
    
    const cellRef = useRef();

    const consumeContext = useContext(MouseContext)

    let {mouseIsDown,paintColor} = consumeContext;

    function paintCell(){

        if(painted){
            cellRef.current.classList.remove("cell-red","cell-black","cell-yellow","cell-green","cell-pink") 
            cellRef.current.classList.add("cell-white")
            painted=false;
        }
        else{
            cellRef.current.classList.add(paintColor)
                painted= true;
        }
        
    }

    function mouseEntered(){
        if(mouseIsDown.current){
                cellRef.current.classList.add(paintColor)
                painted= true;
              
            
        }
    
    }

  return (
    
        <div ref={cellRef} className='cell' onMouseEnter={mouseEntered} onClick={paintCell}>

        </div>
  )
}

export default Cell