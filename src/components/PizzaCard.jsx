import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { v4 as uuidv4 } from "uuid";

const typeNamesPizza = ["тонкое", "традиционное"];

const PizzaCard = ({ pizza }) => {
    const [pizzaSize, setPizzaSize] = useState(pizza.sizes[0]);
    const [typePizza, setTypePizza] = useState(pizza.types[0]);
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.items.find((item) => item.id === pizza.id));
    const countPizzaInCart = cartItem ? cartItem.count : 0;

    const handleClickAddToCart = () => {
        const pizzaForCart = {
            id: pizza.id,
            title: pizza.title,
            price: pizza.price,
            image: pizza.imageUrl,
            size: pizzaSize,
            type: typeNamesPizza[typePizza],
            cartId: uuidv4(),
        };

        dispatch(addToCart(pizzaForCart));
    };

    return (
        <div className="pizza-block-wrapper">
            <div className="pizza-block">
                <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza" />
                <h4 className="pizza-block__title">{pizza.title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {pizza.types.map((type) => (
                            <li
                                key={type}
                                className={type === typePizza ? "active" : null}
                                onClick={() => setTypePizza(type)}
                            >
                                {typeNamesPizza[type]}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {pizza.sizes.map((size) => (
                            <li
                                key={size}
                                className={size === pizzaSize ? "active" : null}
                                onClick={() => setPizzaSize(size)}
                            >
                                {size} см.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {pizza.price} ₽</div>
                    <div
                        className="button button--outline button--add"
                        onClick={handleClickAddToCart}
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {countPizzaInCart > 0 ? <i>{countPizzaInCart}</i> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;