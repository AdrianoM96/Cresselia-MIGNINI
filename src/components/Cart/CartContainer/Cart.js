import React from 'react'
import './Cart.css'
import ItemCart from '../ItemCart/ItemCart'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'

const Cart = () => {

    const {cartList,clearCart,totalPrice} = useCartContext()


    if(!cartList.some(item=>item)){
        return (
            <div className='container'>
                <div className='row h100 cart'>     
                    <div className="empty-cart">
                        <h3 className=''>El carrito esta vacio !</h3> <br></br>
                        <Link to ='/' className='text-empty'>
                            <button className='btn btn-dark'> Ve a ver !</button>
                        </Link> 
                    </div>
                </div>
            </div>
              
        )
    }

return (
    <div className='container'>
    <div className='row h100 cart'>
        
            {cartList.map(item =>   
                <div key={item.id}>
                    <ItemCart item={item}></ItemCart> 
                </div>    
            )} 
            <footer>
                <div>
                    <h4>Total : ${totalPrice()}</h4> 
                </div>
                <div>
                    <button className="btn btn-dark mb-3" onClick={()=>clearCart()}>Limpiar carrito</button>
                </div> 
                <div>
                <Link to="/checkout"><button className="btn btn-dark" >Finalizar compra</button></Link> 
                </div> 
            </footer>                          
    </div>
</div>
    )
}

export default Cart