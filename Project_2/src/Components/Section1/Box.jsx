import { Camera } from 'lucide-react';
const Box = (props) => {
  return (
    <div className='Box'>
      <img src={props.image}/>
      <div className='img-content'>
        <div className="index">
           {props.index+1}
            </div>
        <div className="content text-white">
            <h2>{props.content}</h2>
            <div id="btn">
              <button>{props.tag}</button>
              <arrow><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></arrow>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Box
