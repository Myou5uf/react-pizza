import React, { useEffect, useMemo, useRef, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/PizzaSkeleton";
import PizzaCard from "../components/PizzaCard";
import axios from "axios";
import Pagination from "../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setTotalPrice } from "../redux/slices/cartSlice";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const searchValue = useSelector((state) => state.filter.searchValue);
    const { categoryId, sort } = useSelector((state) => state.filter);
    // const navigate = useNavigate();
    // const isMounted = useRef(false);

    const getParams = () => {
        const params = {
            page: currentPage,
            limit: 4,
            order: "asc",
            sortBy: sort.sortProperty,
        };

        if (categoryId > 0) params.category = categoryId;
        if (searchValue !== "") {
            delete params.page;
            delete params.limit;
            params.search = searchValue;
        }

        return params;
    };

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify(getParams(), { addQueryPrefix: true });
    //         navigate(queryString);
    //     }
    //     isMounted.current = true;
    // }, [categoryId, sort, searchValue, currentPage]);

    useEffect(() => {
        setLoading(true);
        setError("");
        axios
            .get(`https://63899e8dc5356b25a203caf1.mockapi.io/pizzas?`, {
                params: getParams(),
            })
            .then((response) => {
                setLoading(false);
                setPizzas(response.data);
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
            });
    }, [categoryId, sort, searchValue, currentPage]);

    const handlePageClick = (event) => setCurrentPage(event.selected + 1);

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {loading
                    ? [...new Array(8)].map((_, i) => <PizzaSkeleton key={i} />)
                    : pizzas.map((pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
                {error ? (
                    <h2>
                        Произошла ошибка: <span style={{ fontWeight: "bold" }}>{error}</span>
                    </h2>
                ) : null}
            </div>
            <div className="content__pagination">
                <Pagination handlePageClick={handlePageClick} />
            </div>
        </div>
    );
};

export default Home;
