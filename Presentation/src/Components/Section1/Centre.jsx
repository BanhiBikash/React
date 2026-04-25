import React from 'react'
import CentreText from './CentreText'
import CardData from "../../assets/CardData.json"
import Card from "./Card"

const Centre = () => {
  return (
    <div className='center-content'>
        <CentreText />
        {CardData.map(function(data){ return <Card title={data.title} description={data.description} image={data.image} />})}
    </div>
  )
}

export default Centre