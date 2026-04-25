import React,{useState} from 'react'

const Navbar = () => {

  const [v, setV] = useState('Target Audience')
  
  function NavClicked(){
    if(v=='Target Audience')
    {
      setV('Audience Targetted')
    }
    else{
      setV('Target Audience')
    }
  }

  return (
    <div className='flex'>
      <button onClick={NavClicked}>{v}</button>
      <p className='nav-text'>Digital Banking Platform</p>
    </div>
  )
}

export default Navbar