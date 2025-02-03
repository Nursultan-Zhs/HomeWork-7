import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './detail.scss'
import { addCart } from "../../redux/reducer";
import { useDispatch } from "react-redux";
 
const DetailPage = () => {
    const params = useParams();
    const [data, setData] = useState({});
    const dispatch = useDispatch();


    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data}) => setData(data))
    },[params])
    return (
        <div className="detail">
            <div className="row">
                <div className="col-6">
                    <img className="detail-img" src={data.image} alt="" />
                </div>
                <div className="col-6">
                    <h2 className="detail-title">{data.title}</h2>

                    <p className="detail-text">{data.description}</p>
                    <p className="detail-text">{data.category}</p>
                    <p className="detail-text">${data.price}</p>
                    <button className="btn1" onClick={() =>{
                        dispatch(addCart(data))
                    }}>buy</button>
                </div>
            </div>
            <div className="loader"></div> 
        </div>
    );
}

export default DetailPage;
