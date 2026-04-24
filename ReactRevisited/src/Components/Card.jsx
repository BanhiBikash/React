import React from "react";

function Card(props){
    return  <div className="card">
                <img src={props.imageLink} />
                <p className="title">{props.name}</p>
                <p className="Desc">{props.desc}</p>
                <p className="exp">{props.exp} years</p>
            </div>
}

export default Card