function NavBar(props) {
  console.log(props.token)
  const openRegister = () => {
    console.log("open")
    props.setRegister(true)
  }

  const openLogin = ()=>{
    console.log("open login")
    props.setLogin(true)
  }

  const logOut = async()=>{
    localStorage.removeItem("token")
    props.setToken(null)
  }

  return (
      <div className='navbar'>
          <a className='app-logo'>Cities</a>

          <div className='pagelinks'>
            {!props.token?<>
            <button onClick={openRegister} >Register</button>
            <button onClick={openLogin} >Login</button></>:
            <button onClick={logOut}>Logout</button>
            }
          </div>
      </div>
  )
}

export default NavBar
