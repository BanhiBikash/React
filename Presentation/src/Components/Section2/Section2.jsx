import React,{useState} from 'react'

export const Section2 = () => {

  const [inputData, setInputData] = useState('hi')

  const InputDataChange = (event)=>{
    setInputData(event.target.value)
    console.log(event.target.value)
  }

  const submitHandler=(event)=>{
      event.preventDefault()
      console.log("submit")
  }

  return (
    <div className='section2' >
      <form onSubmit={function(event){submitHandler(event)}} action="" className="demo-form">
        <input type="text" name="form-input" id="form-input" placeholder='Enter anything' value={inputData} onChange={(event)=>{InputDataChange(event)}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
