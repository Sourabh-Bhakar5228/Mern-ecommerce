import React, { useEffect, useState } from 'react'
import "./NewCollection.css"
// import new_collections from '../assests/new_collections'
import Items from '../Item/Items'

const NewCollection = () => {
    const [new_Collection, setNew_collection] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/newcollection")
            .then((response) => response.json())
            .then((data) => setNew_collection(data))
    }, [])
    return (
        <div className='newCollection'>
            <h1>New Collection</h1>
            <hr />
            <div className="collection">
                {new_Collection.map((items, i) => {
                    return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollection
