import Interface from "./Interface"
import Navbar from "./Navbar"


const MainPage = (props) => {
  return (
    <div className='MainPage'>
      <Navbar/>
      <Interface data={props.data}/>
    </div>
  )
}

export default MainPage
