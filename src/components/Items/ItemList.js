import React from 'react'
import Item from './Item'
const ItemList = ({items}) => {

return (
    <div className="container">
            <div className="row">
             {     
               items.map(item => (
                <div className="col-md-4 mb-5" key={item.id}>
                <Item product ={item} key={item.id}/>
                </div>

               ))
             }                
            </div>
        </div>

)

}

export default ItemList