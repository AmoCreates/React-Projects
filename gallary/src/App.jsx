import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {
  const [Data, setData] = useState([]);
  const [page, setPage] = useState(2);

  const getimage = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    setData(response.data);
    console.log(response.data);
  }

  useEffect(function() {
    getimage()
  }, [page])

  let currentStatus = <h3 id="status">Loading...</h3>

  if(Data.length > 0) {
    currentStatus = Data.map(function(elem, idx) {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
      <div id="outerContainer">
        <div className='innerContainer'>
        {currentStatus}
        </div>
        
        <div id="btn">
          <button style={{opacity: page == 2 ? 0.5 : 1, cursor: page == 2 ? 'none' : 'pointer'}} className='btn' onClick={( () => {
            if(page > 1) {
              setData([])
              setPage(page-1);  
            }
          })}>Prev</button>
          <h2>Page {page-1}</h2>
          <button className='btn' onClick={(() =>{
              setData([])
              setPage(page+1);
             
          })}>Next</button>
        </div>
      </div>
  )
}

export default App

