import React,{useState} from 'react'

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

  return (
    <div className='section2' >
      <form onSubmit={function(event){submitHandler(event)}} className="demo-form">
        <label>Name</label>
        <input type="text" name="personName" id="name-input" placeholder='Enter name' value={formData.personName} onChange={(event)=>{formDataChange(event)}}/>
        <label>Age</label>
        <input type="number" name="age" id="name-Age" placeholder='Enter Age' value={formData.age} onChange={(event)=>{formDataChange(event)}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
