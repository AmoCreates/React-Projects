import Left from "./Left"
import Navbar from "./Navbar"
import Right from "./Right"

const Interface = (props) => {
  return (
    <div className="Interface">
        <Left/>
        <Right data={props.data}/>
    </div>
  )
}

export default Interface
