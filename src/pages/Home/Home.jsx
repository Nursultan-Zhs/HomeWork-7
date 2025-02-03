import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import { useSelector } from 'react-redux';
import './home.scss';

const Home = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <div>
            {
                categories.map(item=>{
                    return <CategoryComponent key={item} limit={4} category={item} />
                })
            }

<div class="loader" ></div> 
        </div>
    );
}

export default Home;
