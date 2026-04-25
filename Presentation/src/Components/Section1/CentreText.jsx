import React,{useState} from 'react'

const CentreText = () => {

    const [textData, setTextData] = useState({"title":"Prospective customer segmentation","text":"Depending on customer satisfaction and access to banking products,potential target audience can be divided into three groups."})

    const clickedHeader = ()=>{
        setTextData(prev => {return {...prev,"title":"clicked","text":"We are here to serve"}})
    }

    return (
        <>
            <div className="left-content">
                <h3 onClick={clickedHeader}>{textData.title}</h3>
                <p>
                    {textData.text}
                </p>
            </div>
        </>
    )
}

export default CentreText