import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import styles from "./SearchInput.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDebounce } from "../../hooks/debounce";

const SearchInput = () => {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value);
    const dispatch = useDispatch();
    const inputRef = useRef();

    useEffect(() => {
        dispatch(setSearchValue(debouncedValue));
    }, [debouncedValue]);

    const handleClickClear = () => {
        setValue("");
        dispatch(setSearchValue(""));
        inputRef.current.focus();
    };

    const handleChangeInput = (e) => setValue(e.target.value);

    return (
        <div className={styles.searchWrapper}>
            <svg
                className={styles.searchIcon}
                height="512px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="512px"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
            </svg>
            <input
                ref={inputRef}
                type="text"
                placeholder="Поиск пицыы..."
                className={styles.searchInput}
                value={value}
                onChange={(e) => handleChangeInput(e)}
            />
            {value ? (
                <svg
                    className={styles.searchIconClose}
                    height="512px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="512px"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleClickClear}
                >
                    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                </svg>
            ) : null}
        </div>
    );
};

export default SearchInput;
