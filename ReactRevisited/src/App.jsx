import Card from "./Components/Card"
import Navbar from "./Navbar"
import Data from "./assets/Data.json"

export const App =  () => {
  return (
    <>
        <Navbar />
        <h1>This is React App</h1>
        <h2>This is React Content</h2>
        {Data.map(function(data){return <Card name={data.name} desc={data.exp} exp={data.exp} imageLink={data.imageLink} />})}
    </>
  )
}