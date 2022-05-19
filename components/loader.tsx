import React from 'react';
import styles from "../styles/loader.module.css"

const Loader = () => {
    return (
        <main id={"main"} className="min-h-screen w-screen flex flex-row justify-center items-center">
            <div className={styles.halfCircleSpinner}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
            </div>
        </main>
    );
};

export default Loader;