import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {


    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>

                {/*props.onShowCart = > app.js */}
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt={'A table of delicious foods'} />
            </div>
        </>
    );
};

export default Header;
