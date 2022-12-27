import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const Categories = React.memo(() => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    const categoryId = useSelector((state) => state.filter.categoryId);
    const dispatch = useDispatch();

    console.log("Categories");

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={category}
                        className={categoryId === index ? "active" : null}
                        onClick={() => dispatch(setCategoryId(index))}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Categories;
