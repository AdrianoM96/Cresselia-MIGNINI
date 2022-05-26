import React from "react";
import ItemCount from "../Items/ItemCount";


const ItemDetail = ({ product }) => {

  function onAdd() {
    console.log("agrego al carrito")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img className="imageDetail"
            src={product.image}
            alt="cr7"
          />
        </div>
        <div className="col-6"> 
          <div className="col-10">
              <h1>{product.title}</h1><br></br>
              <h5>{product.description}</h5><br></br>
             <h2>${product.price}</h2> <br></br>  
          </div>
          <div className="col-5">
              <ItemCount stock={product.stock} initial={1} onAdd={onAdd}></ItemCount>
          </div>        
        </div> 
      </div>
    </div>
  );
};

export default ItemDetail;