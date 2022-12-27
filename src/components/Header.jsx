import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPrice } from "../redux/slices/cartSlice";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src="img/pizza-logo.svg" alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <SearchInput />
                <div className="header__cart">
                    <HeaderCartButton />
                </div>
            </div>
        </div>
    );
};

export default Header;
