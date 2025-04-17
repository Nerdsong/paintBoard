import { useRef, useState } from 'react'
import CellContainer from './components/cellContainer'
import './App.css'
import FloatingMenu from './components/FloatingMenu';
import { paintColorContext } from './context';


function App() {
  
  
  const [displayColorMenu,setDisplayColorMenu] = useState({
    display: "hidden",
    x: 0,
    y: 0,
  })

  const [paintColor,setPaintColor] = useState("cell-red")



function hideMenu (e){
  setDisplayColorMenu({display:"hidden"});
}


  return (
    <paintColorContext.Provider value = {{paintColor,setPaintColor}}>
        <FloatingMenu x={displayColorMenu.x} y={displayColorMenu.y} display={displayColorMenu.display} hideMenu={hideMenu} />
        <CellContainer setColorMenu = {setDisplayColorMenu}/>
    </paintColorContext.Provider>
  )
}

export default App
