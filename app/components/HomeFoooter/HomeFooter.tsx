import styles from './style.module.css';

const FooterText: React.FC = () => {
    return (
        <div className='whitespace-nowrap flex flex-row justify-between gap-8'>
            <h3>3Ds MAX</h3>
            <h3>AUTOCAD</h3>
            <h3>PHOTOSHOP</h3>
            <h3>ARCHICAD</h3>
            <h3>CORELDRAW</h3>
            <h3>UNREAL ENGINE</h3>
            <h3>ADOBE ILLUSTRATOR</h3>
            <h3>CORONA</h3>
            <h3>V-RAY</h3>
            <h3>CHOAS VANTAGE</h3>
            <h3>SKETCHUP</h3>
        </div>
    )
}

const HomeFooter: React.FC = () => {
    return (
        <footer className={`${styles.scrolling} overflow-hidden h-[80px] mt-auto mb-2 flex gap-4 items-center`}>
            <FooterText />
            <FooterText />
        </footer>
    );
}

export default HomeFooter;
