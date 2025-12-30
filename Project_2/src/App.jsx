import MainPage from "./Components/Section1/MainPage"



function App() {

  const professionals = [
    {
      image : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      content : "Prime customers, that have acces to bank credit and are satisfied with the current product",
      tag : "Satisfied"
    },
    {
      image : "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      content : "Prime customers, that have access to bank credit and are not satisfied with the current service",
      tag : "Undeserved"
    },
    {
      image : "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      content : "Customers from near-prime and sub-prime segments with no access to bank credit",
      tag : "Underbanked"
    }
  ]
    
  
  return (
    <MainPage data={professionals}/>
  )
    
}

export default App
