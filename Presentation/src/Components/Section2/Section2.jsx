import React,{useState} from 'react'

export const Section2 = () => {

  //handling input
  const [inputData, setInputData] = useState('hi')

  const InputDataChange = (event)=>{
    setInputData(event.target.value)
    console.log(event.target.value)
  }
  
  const [inputAge, setInputAge] = useState(18)

  const InputAgeChange = (event)=>{
    setInputAge(event.target.value)
    console.log(event.target.value)
  }


  //handling form

  const [formData, setformData] = useState({"name":"","age":{}})

  const submitHandler=(event)=>{
      event.preventDefault()
      setformData(prev=>{return{...prev,name:{inputData},age:{inputAge}}})
      console.log(formData)
      setInputData('')
      setInputAge(0)
  }

  return (
    <div className='section2' >
      <form onSubmit={function(event){submitHandler(event)}} className="demo-form">
        <label>Name</label>
        <input type="text" name="Name" id="name-input" placeholder='Enter name' value={inputData} onChange={(event)=>{InputDataChange(event)}}/>
        <label>Age</label>
        <input type="number" name="Age" id="name-Age" placeholder='Enter Age' value={inputAge} onChange={(event)=>{InputAgeChange(event)}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
