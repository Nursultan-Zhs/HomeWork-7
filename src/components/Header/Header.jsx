import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './header.scss';


const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
   

    return (
      
        <header className="header">
             
                <div className="container header-container">
                        <h1 className="header-logo"><Link to={'/'}>shop</Link></h1>

                        <nav className="header-nav">
                            <Link to={'/'}>home</Link>
                                {
                                    categories.map(item=>{
                                        return <Link key={item} to={`/category/${item}`} >{item}</Link>
                                    })
                                }
                            <Link to={'/cart'}>cart</Link>
                        </nav>
                </div>
        </header>
    );
}

export default Header;

