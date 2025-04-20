import Cell from "./Cell"
import '../styles/CellContainer.css';
import {useRef,useState,useEffect} from "react";



function cellContainer({setColorMenu}) {
    let mouseIsDown = useRef(false)
    let xMenuLocation = 0;
    let yMenuLocation = 0; 

//-------------------------------------------------------------------
      function handleMouseDown(e) {
        console.log(e)
        if(e.button === 2){
          console.log("righ click")
          console.log("x: " + e.clientX)
          console.log("y: " + e.clientY)
          const menuSize = cellSize *12;
          const fullWidth = window.innerWidth;
          const fullHeight = window.innerHeight;
          
          e.clientX + menuSize > fullWidth ? xMenuLocation = fullWidth - menuSize - 20 : xMenuLocation = e.clientX;
          e.clientY + menuSize > fullHeight? yMenuLocation = fullHeight- menuSize - 20 : yMenuLocation = e.clientY;

          
          setColorMenu({display:"shown", x: xMenuLocation-10, y: yMenuLocation-10, width: menuSize})
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
    let cellSize = 0;
    useEffect(() => {
        const columns = 100;
        cellSize = window.innerWidth / columns;
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