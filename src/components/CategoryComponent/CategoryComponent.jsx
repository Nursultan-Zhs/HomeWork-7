import { useState, useEffect } from "react";
import axios from 'axios';
import Card from '../Card/Card';

const CategoryComponent = ({limit=false, category}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData([]);
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
         )
         .then(({data})=> setData(data))
    },[category, limit])
    return (
        <div>
            <h1>{category}</h1>
                <div className="row">
                    {
                        data.map(item =>{
                            return <div className="col-3" key={item.id}>
                                <Card item={item} />
                            </div>
                        })
                    }
                </div>
        </div>
    );
}

export default CategoryComponent;