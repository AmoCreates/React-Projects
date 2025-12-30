import Box from "./Box"

const Right = (props) => {
    console.log(props);
  return (
    <div className="Right">
        {props.data.map(function(val, idx){

            return <Box image={val.image} content = {val.content} index = {idx} tag={val.tag}/>
        })}
       
        
        
    </div>
    
  )
}

export default Right
