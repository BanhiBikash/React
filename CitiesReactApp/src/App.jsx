import Navbar from './components/Navbar'
import CityTable from "./Components/Table"
import './App.css'
import WarningDialog from './Components/WarningDialogBox'
import { useEffect, useState } from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import accountService from './services/AccountApi'

function App() {
    const [dialogConfig, setDialogConfig] = useState(null);
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)
    const [cityTable, setCityTable] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [refreshToken,setRefreshToken] = useState(localStorage.getItem("RefreshToken"))

    useEffect(function () {
        if (!token) {
            setLogin(true)
            setCityTable(false)
        }else{
            setLogin(false)
            setCityTable(true)
        }
    }, [token])

    const fetchNewToken = async ()=>{
        console.log("fetch token")
        const response = await accountService.tokenFetch(localStorage.getItem("token"),localStorage.getItem("RefreshToken"));
        console.log(response.data)
        setToken(response.data.token)
        setRefreshToken(response.data.refreshToken)
    }

    return (
        <>
            <button onClick={fetchNewToken} className='buttonEnLarge'>Token</button>
            {/* register page */}
            {dialogConfig && (
                <WarningDialog
                    message={dialogConfig.message}
                    type={dialogConfig.type}
                    onConfirm={dialogConfig.onConfirm}
                    onCancel={dialogConfig.onCancel}
                />
            )}

            <Navbar setRegister={setRegister} token={token} setToken={setToken} setLogin={setLogin} />
            {/* login page */}
            {login && <Login setToken={setToken} setLogin={setLogin} />}
            {register && <Register setToken={setToken} setRegister={setRegister} />}
            {cityTable && <CityTable token={token} setDialogConfig={setDialogConfig} dialog={dialogConfig} />}
        </>
    )
}

export default App
