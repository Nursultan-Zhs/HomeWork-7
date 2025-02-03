import './card.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer';
import { useState } from "react";

const Card = ({item}) => {
    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(0)
    
    const addToCart = () => {
        setCartCount((prev) => {
         if(typeof prev === "string")
           return "9+"
        return  prev >=  9 ? "9+" : prev + 1 

        })
    }

    return (
        
        <div className="card">
                      <button className="card-btn" onClick={() =>{
                        addToCart()
                    dispatch(addCart(item)); 
                }}>buy</button>
              <div>
                {
                    cartCount !== 0 && (
                        <div className="card-indicator">
                             {cartCount}
                        </div>
                    )
                }
              </div>
            <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="" className="card-img" />
                                                                     
            <h4 className="card-title">{
            item.title.length > 30
            ? item.title.substr(0, 27).trim() + '...'
            : item.title
            }</h4>
            <p className="card-text">{
            item.description.length > 65
            ? item.description.substr(0, 62).trim() + '...'
            : item.description
            }</p>
            <br />
            <p className="card-text">{item.category}</p>
            </Link>
            <div className="card-block">
                <p className="card-text">${item.price}</p>
      
            </div>
        </div>
    );
}

export default Card;

