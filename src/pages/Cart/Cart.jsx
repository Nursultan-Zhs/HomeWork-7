import { useSelector } from "react-redux";
import './cart.scss';
import { useDispatch } from "react-redux";
import { addCart, decrementCart, deleteCart } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const cartData = useSelector(s => s.reducer.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <div className="cart">

          <button className="btn"  onClick={() =>{
            navigate(-1)
          }} >GO HOME</button>

        {
            cartData.map(item =>{
                return <div className="cart-item" key={item.id}>
                    
                       <div className="cart-item-left">
                         <img src={item.image} alt="" className="cart-item-img" />
                         <h3 className="cart-item-title">{item.title}</h3>
                       </div>

                       <div className="cart-item-right">
                         <div>
                            <button className="min" onClick={() =>{
                                if(item.count > 1 ) dispatch(decrementCart(item))
                            }}>-</button>
                            <span>{item.count}</span>
                            <button className="plus" onClick={() =>{
                                dispatch(addCart(item))
                            }}>+</button>
                         </div>

                         <p className="price">${(item.price * item.count).toFixed(2)}</p>

                         <button className="del" onClick={() =>{
                            dispatch(deleteCart(item))
                         }} >delete</button>
                       </div>

                 </div>
            })
         }
         <div class="loader" ></div> 
         <p>Total: ${
             cartData.reduce((acc,rec)=>{
                return acc + (rec.price * rec.count)
             }, 0)
            }</p>
     </div>
    );
}

export default Cart;
