import Features from './Features/Features';
import classes from './Home.module.css';
import jett from '../assets/jett.svg'

const Home = () => {
    return (
        <main className={classes.home}>
            <div className={classes.hero}>
                <div className={classes['character-container']}>
                    <img src={jett} alt="" />
                </div>
            </div>
            <Features />
        </main>
    )
}

export default Home;