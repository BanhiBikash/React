import Card from "./Components/Card"
import Navbar from "./Navbar"

export const App =  () => {
  return (
    <>
        <Navbar />
        <h1>This is React App</h1>
        <h2>This is React Content</h2>
        <Card name='Banhi' desc='Hi, I am Banhi.' exp={7} imageLink="https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" />
        <Card name='Ankit' desc='Hi, I am Ankit.' exp={4} imageLink="https://tse3.mm.bing.net/th/id/OIP.vuiSHQ12eLpH8ZLEYPlDAAHaLI?pid=ImgDet&w=187&h=280&c=7&dpr=1.3&o=7&rm=3" />
    </>
  )
}