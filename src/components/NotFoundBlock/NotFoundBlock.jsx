import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
    return (
        <div className={styles.notFoundBlock}>
            <span className={styles.emoji}>&#128533;</span>
            <h1>Ничего не найдено</h1>
            <p className={styles.description}>
                К сожалению данная страница не существует в нашем интернет-магазине.
            </p>
        </div>
    );
};

export default NotFoundBlock;
