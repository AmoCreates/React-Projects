import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url}>
          <div id='img'>
            <img src={props.elem.download_url}/>
          </div>
        </a>
        <h2>{props.elem.author}</h2>
    </div>
  )
}

export default Card
