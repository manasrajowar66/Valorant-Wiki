import classes from './Footer.module.css';
import github from '../../assets/github.png';

const Footer = () => {
    return (
        <footer className={classes.footer}>

            <div>
                <p>© Copyright Valorant-API. All Rights Reserved</p>
                <p>Valorant-API is a non-official API and not endorsed by Riot Games in any way.</p>
                <p>Riot Games, Valorant, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</p>
            </div>
            <div>
                <img className={classes.icon} src={github} alt="" />
            </div>
        </footer>
    )
}

export default Footer;