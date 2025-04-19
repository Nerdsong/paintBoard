import Cell from "./Cell"
import '../styles/CellContainer.css';
import {useRef,useState,useEffect} from "react";



function cellContainer({setColorMenu}) {
    let mouseIsDown = useRef(false)
    
//-------------------------------------------------------------------
      function handleMouseDown(e) {
        console.log(e)
        if(e.button === 2){
          console.log("righ click")
          setColorMenu({display:"shown", x: e.clientX-10, y: e.clientY-10 })
        }
        else{
          mouseIsDown.current = true
          console.log(mouseIsDown.current)
        }
        
      }
    
      function handleMouseUp() {
        mouseIsDown.current = false
        console.log(mouseIsDown.current)
      }
    
      function handleOnContextMenu(e) {
        e.preventDefault();
      }
    
      useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown)
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("contextmenu",handleOnContextMenu)
    
        return () => {
          window.removeEventListener("mousedown", handleMouseDown)
          window.removeEventListener("mouseup", handleMouseUp)
          window.removeEventListener("contextmenu",handleOnContextMenu)
        }
      }, [])

      //-------------------------------------------------------------------

    const [cellCount, setCellCount] = useState(0);
    const cells = []
    useEffect(() => {
        const columns = 100;
        const cellSize = window.innerWidth / columns;
        const rows = Math.floor(window.innerHeight / cellSize);
        setCellCount(columns * rows);

    }, []);
    let i;

    for(i=0 ; i < cellCount; i++){
          cells.push(i)
    }

  return (
    
        <div className="cell-container">
            
                {cells.length > 0? cells.map((cell,index) => (
                    < Cell key = {index} mouseIsDown={mouseIsDown} />
                )): <p>vacio </p>} 
            
        </div>
    
  )
}

export default cellContainer