import { createContext, useEffect, useRef, useState } from 'react'
import CellContainer from './components/cellContainer'
import './App.css'
import FloatingMenu from './components/FloatingMenu';


export const MouseContext = createContext();


function App() {
  let mouseIsDown = useRef(false)
  let mousePositionX = useRef (0)
  let mousePositionY = useRef (0)
  
  const [colorMenu,setColorMenu] = useState({
    display: "none",
    x: 0,
    y: 0,
  })

  const [paintColor,setPaintColor] = useState("cell-red")

function hideMenu (){
  setColorMenu({display:"none", x:0, y:0});
}




  
  function handleMouseDown(e) {
    console.log(e)
    if(e.button === 2){
      console.log("righ click")
      setColorMenu({display:"block", x: e.clientX, y: e.clientY })
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






  return (
    <>
    
      <MouseContext.Provider value = {{mouseIsDown,paintColor,setPaintColor}}>
      <FloatingMenu x={colorMenu.x} y={colorMenu.y} display={colorMenu.display} hideMenu={hideMenu} /> 
      <CellContainer/>
      </MouseContext.Provider>
    </>
  )
}

export default App
