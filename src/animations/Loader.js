import styles from './loader.module.css';

// Loading animation for suspense fallback as styled component

const Loader = () => {
    return ( 
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh'
        }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div className={styles.hexagon} aria-label="Animated hexagonal ripples">
                    <div className={styles.hexagon__group}>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                    </div>
                    <div className={styles.hexagon__group}>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                    </div>
                    <div className={styles.hexagon__group}>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                    </div>
                    <div className={styles.hexagon__group}>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                    </div>
                    <div className={styles.hexagon__group}>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                    </div>
                    <div className={styles.hexagon__group}>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                        <div className={styles.hexagon__sector}></div>
                    </div>
                </div>

            </div>
            

        </div>
     );
}
 
export default Loader;