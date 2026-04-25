import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
      <p>{props.description}</p>
      <h4>{props.title}</h4>
    </div>
    </>
  )
}

export default Card