import styles from './Header.module.scss';

function Header(){
    return <header className={styles.header}>
        <div className="container">
            <div className={styles.header__row}>
                <div className={styles.header__logo}>
                    <p className={styles.header__title}>
                        SpotiStats
                    </p>
                </div>
                {/* <div className={styles.header__logo}>
                    <button>
                        Login
                    </button>
                </div> */}
            </div>
        </div>
    </header>
}

export default Header;