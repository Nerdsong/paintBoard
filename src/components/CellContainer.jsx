import Cell from "./Cell"
import '../styles/CellContainer.css'

function cellContainer() {
    const columns = 100 
    const rows = 150;
    const cells = []
    let i;

    for(i=0 ; i < (columns * rows ); i++){
        cells.push(i)
    }   

    console.log(cells)


  return (
    <div className="cell-container"  >
        {cells.length > 0? cells.map((cell,index) => (
            < Cell key = {index} />
        )): <p>vacio </p>} 
    </div>
  )
}

export default cellContainer