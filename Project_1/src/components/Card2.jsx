import React from 'react'

const Card2 = (props) => {
    console.log(props);
  return (
    
        <div className='card2'>
            <div id="logo">
              <img src={props.brandLogo}></img>
              <button className = "save" >Save<box-icon name='bookmark'></box-icon></button>
            </div>
            <div id="details">
              <h3>{props.companyName}<span> {props.datePosted}</span><br/>{props.post}</h3>
              <nav>
                <button className = "jobOption">{props.tag1}</button>
                <button className = "jobOption">{props.tag2}</button>
              </nav>
            </div>
            <hr/>
            <div id="bottom">
              <div id="priceXadd">
                <h3>{props.pay}</h3>
                <span>{props.location}</span>
              </div>
              <button id="enroll">Apply now</button>
            </div>
        </div>
        
   
  )
}

export default Card2
