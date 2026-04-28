import React,{useState} from 'react'
import axios from 'axios'

export const Section2 = () => {

  //handling input
  // const [inputData, setInputData] = useState('hi')

  // const InputDataChange = (event)=>{
  //   setInputData(event.target.value)
  //   console.log(event.target.value)
  // }
  
  // const [inputAge, setInputAge] = useState(18)

  // const InputAgeChange = (event)=>{
  //   setInputAge(event.target.value)
  //   console.log(event.target.value)
  // }

  //handling form

  const [formData, setformData] = useState({"personName":"hi","age":0})

  const formDataChange=(event)=>{

    //get the name and value of chnage target
    const {name , value} = event.target

    //set the data
    setformData((prev)=>{return {...prev,[name]:value}})
    console.log(event.target.value)
  }

  const submitHandler=(event)=>{
      event.preventDefault()
      console.log(formData)
      setformData({"personName":"","age":0})
  }

  //fetch data from api
  const fetchData = async()=>{
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const jsonResponse = await response.json()
    // console.log(jsonResponse)

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1') 
    const {data} = response
    console.log(data)
  }

  return (
    <div className='section2' >
      <form onSubmit={function(event){submitHandler(event)}} className="demo-form">
        <label>Name</label>
        <input type="text" name="personName" id="name-input" placeholder='Enter name' value={formData.personName} onChange={(event)=>{formDataChange(event)}}/>
        <label>Age</label>
        <input type="number" name="age" id="name-Age" placeholder='Enter Age' value={formData.age} onChange={(event)=>{formDataChange(event)}}/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}
