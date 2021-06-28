import React from 'react'
import placeholder from './assets/placeholder.png'

function Item(props) {

    const picture = props.picture
    const name = props.name   


    return (
        <div className="item">
            <img src={picture ? picture : placeholder} alt={`${name}.img`} id="itemimage" />
            <h2 id="itemname">{name ? name : "Main Item"}</h2>
        </div>
    )
}

export default Item