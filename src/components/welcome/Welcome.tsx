import styles from './Welcome.module.scss';
import SpotifyButton from '../spotify-button/SpotifyButton';

function Welcome(){
    return <section className={styles.welcome}>
        <div className="container">
            <div className={styles.welcome__content}>
                <h1 className={styles.welcome__title}>Welcome to SpotiStats!</h1>
                <p className={styles.welcome__subtitle}>
                    Check your latest stats from Spotify!
                </p>
                <div className={styles.welcome__button}>
                    <SpotifyButton />
                </div>
            </div>
        </div>
    </section>
}

export default Welcome;