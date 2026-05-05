import Navbar from './components/Navbar'
import CityTable from "./Components/Table"
import './App.css'
import WarningDialog from './Components/WarningDialogBox'
import { useState } from 'react'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {
    const [dialogConfig, setDialogConfig] = useState(null);
    const [register,setRegister] = useState(false)
    const [login,setLogin] = useState(false)
    const[token,setToken] = useState(localStorage.getItem("token"))

    return (
        <>
            {/* register page */}
            {dialogConfig && (
                <WarningDialog
                    message={dialogConfig.message}
                    type={dialogConfig.type}
                    onConfirm={dialogConfig.onConfirm}
                    onCancel={dialogConfig.onCancel}
                />
            )}

            {/* login page */}
            {login && <Login setToken={setToken} setLogin={setLogin} />}
            <Navbar setRegister={setRegister} token={token} setToken={setToken} setLogin={setLogin}/>
            {register && <Register setToken={setToken} setRegister={setRegister} />}
            <CityTable token={token} setDialogConfig={setDialogConfig} dialog={dialogConfig} />
        </>
    )
}

export default App
