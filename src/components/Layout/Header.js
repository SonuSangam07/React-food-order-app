import { Fragment } from "react";
import classes from './Header.module.css';
import HeadercartButton from "./HeaderCartButton";
const Header=props=>{
    return(
<Fragment>
<header className={classes.header}>
    <h1>React Meal</h1>

   <HeadercartButton onClick={props.onShowcart}/>
</header>
<div className={classes['main-image']}>
<img src="https://b.zmtcdn.com/data/pictures/4/19567304/dc2237e49928346fd9ecbb45630180b9_featured_v2.jpg" alt="My Awesome " />
</div>
</Fragment>
    )
};
export default Header;