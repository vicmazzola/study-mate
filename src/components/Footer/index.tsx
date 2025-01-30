import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer-container"]}>
                <p className={styles["footer-text"]}>Developed by Victor Mazzola</p>
            </div>
        </footer>
    );
};

export default Footer;